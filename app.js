(() => {
  'use strict';

  const state = {
    exercises: [],
    basics: [],
    bodyPart: 'すべて',
    equipment: 'すべて',
    difficulty: 'すべて',
    query: ''
  };

  const els = {
    grid: document.querySelector('[data-exercise-grid]'),
    status: document.querySelector('[data-library-status]'),
    empty: document.querySelector('[data-empty-state]'),
    search: document.querySelector('[data-search]'),
    equipment: document.querySelector('[data-equipment-filter]'),
    difficulty: document.querySelector('[data-difficulty-filter]'),
    bodyParts: document.querySelector('[data-bodypart-filters]'),
    clearButtons: document.querySelectorAll('[data-clear-filters]'),
    fallback: document.querySelector('[data-static-fallback]'),
    basics: document.querySelector('[data-basics-list]'),
    dialog: document.querySelector('[data-exercise-dialog]'),
    dialogBody: document.querySelector('[data-dialog-body]'),
    dialogClose: document.querySelector('[data-dialog-close]'),
    loadError: document.querySelector('[data-load-error]')
  };

  const normalize = (value) => String(value ?? '').trim().toLocaleLowerCase('ja-JP');

  const equipmentGroups = (equipment) => {
    const joined = equipment.join(' ');
    const groups = [];
    if (joined.includes('自重') || (!joined.includes('ダンベル') && !joined.includes('椅子'))) groups.push('自重');
    if (joined.includes('ダンベル')) groups.push('ダンベル');
    if (joined.includes('椅子')) groups.push('椅子');
    return groups.length ? groups : ['自重'];
  };

  const difficultyClass = (difficulty) => {
    if (difficulty === 'やさしい') return 'easy';
    if (difficulty === 'むずかしい') return 'hard';
    return 'standard';
  };

  const escapeHtml = (value) =>
    String(value).replace(/[&<>"']/g, (char) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    })[char]);

  const listMarkup = (items) => items.map((item) => `<li>${escapeHtml(item)}</li>`).join('');

  const filteredExercises = () => {
    const q = normalize(state.query);
    return state.exercises.filter((exercise) => {
      const matchesBody = state.bodyPart === 'すべて' || exercise.bodyPart === state.bodyPart;
      const matchesEquipment = state.equipment === 'すべて' || equipmentGroups(exercise.equipment).includes(state.equipment);
      const matchesDifficulty = state.difficulty === 'すべて' || exercise.difficulty === state.difficulty;
      const searchable = normalize([
        exercise.name,
        exercise.bodyPart,
        exercise.muscles.join(' '),
        exercise.equipment.join(' ')
      ].join(' '));
      return matchesBody && matchesEquipment && matchesDifficulty && (!q || searchable.includes(q));
    });
  };

  const cardMarkup = (exercise) => `
    <article class="exercise-card">
      <button class="exercise-card-button" type="button" data-open-exercise="${escapeHtml(exercise.id)}" aria-label="${escapeHtml(exercise.name)}の詳しいフォームを見る">
        <span class="exercise-thumb">
          <img src="${escapeHtml(exercise.image)}" alt="" loading="lazy" width="960" height="420">
        </span>
        <span class="exercise-card-body">
          <span class="exercise-meta">
            <span>${escapeHtml(exercise.bodyPart)}</span>
            <span>${escapeHtml(equipmentGroups(exercise.equipment).join(' + '))}</span>
            <span class="difficulty difficulty-${difficultyClass(exercise.difficulty)}">${escapeHtml(exercise.difficulty)}</span>
          </span>
          <strong>${escapeHtml(exercise.name)}</strong>
          <span class="exercise-muscles">${escapeHtml(exercise.muscles.slice(0, 2).join(' / '))}</span>
          <span class="exercise-dose">${escapeHtml(exercise.reps)} ・ ${escapeHtml(exercise.sets)}</span>
          <span class="card-link">フォームと注意点を見る <span aria-hidden="true">→</span></span>
        </span>
      </button>
    </article>`;

  const renderLibrary = () => {
    const items = filteredExercises();
    if (!els.grid || !els.status || !els.empty) return;

    els.grid.innerHTML = items.map(cardMarkup).join('');
    els.status.textContent = `${items.length} / ${state.exercises.length} 種目`;
    els.empty.hidden = items.length !== 0;
    els.grid.hidden = items.length === 0;
  };

  const setBodyPart = (value) => {
    state.bodyPart = value;
    els.bodyParts?.querySelectorAll('button').forEach((button) => {
      const selected = button.dataset.bodypart === value;
      button.setAttribute('aria-pressed', String(selected));
    });
    renderLibrary();
  };

  const resetFilters = () => {
    state.query = '';
    state.bodyPart = 'すべて';
    state.equipment = 'すべて';
    state.difficulty = 'すべて';
    if (els.search) els.search.value = '';
    if (els.equipment) els.equipment.value = 'すべて';
    if (els.difficulty) els.difficulty.value = 'すべて';
    setBodyPart('すべて');
  };

  const detailRow = (label, content) => `
    <div class="detail-row">
      <dt>${escapeHtml(label)}</dt>
      <dd>${content}</dd>
    </div>`;

  const openExercise = (exercise, updateHash = true) => {
    if (!els.dialog || !els.dialogBody) return;

    const isDumbbell = exercise.equipment.some((item) => item.includes('ダンベル'));
    els.dialogBody.innerHTML = `
      <header class="detail-header">
        <div>
          <p class="detail-overline">${escapeHtml(exercise.bodyPart)} ・ ${escapeHtml(exercise.difficulty)}</p>
          <h2 id="exercise-dialog-title">${escapeHtml(exercise.name)}</h2>
          <p class="detail-target">${escapeHtml(exercise.muscles.join(' / '))}</p>
        </div>
        <div class="detail-dose" aria-label="運動量の目安">
          <strong>${escapeHtml(exercise.reps)}</strong>
          <span>${escapeHtml(exercise.sets)} ・ 休憩 ${escapeHtml(exercise.rest)}</span>
        </div>
      </header>

      <figure class="detail-visual">
        <img src="${escapeHtml(exercise.image)}" alt="${escapeHtml(exercise.imageAlt)}" width="960" height="420">
        <figcaption>フォーム図は動作方向を理解するための説明用です。痛みを我慢して図へ合わせる必要はありません。</figcaption>
      </figure>

      <div class="detail-layout">
        <section class="detail-primary" aria-labelledby="how-to-title">
          <h3 id="how-to-title">やり方</h3>
          <div class="start-position">
            <strong>開始姿勢</strong>
            <p>${escapeHtml(exercise.startPosition)}</p>
          </div>
          <ol class="detail-steps">${listMarkup(exercise.steps)}</ol>
          <div class="breathing"><strong>呼吸</strong><p>${escapeHtml(exercise.breathing)}</p></div>

          <h3>フォームの要点</h3>
          <ul class="check-list">${listMarkup(exercise.cues)}</ul>

          <h3>よくある間違い</h3>
          <ul class="mistake-list">${listMarkup(exercise.mistakes)}</ul>
        </section>

        <aside class="detail-secondary" aria-label="負荷と安全の目安">
          <dl class="detail-facts">
            ${detailRow('必要器具', escapeHtml(exercise.equipment.join(' / ')))}
            ${detailRow('効いている感覚', escapeHtml(exercise.feel))}
            ${detailRow('中止サイン', `<span class="stop-text">${escapeHtml(exercise.stopSigns)}</span>`)}
            ${detailRow('簡単にする', escapeHtml(exercise.easier))}
            ${detailRow('難しくする', escapeHtml(exercise.harder))}
            ${detailRow(isDumbbell ? '3kgで負荷UP' : '3kgについて', escapeHtml(exercise.lightDumbbellProgression))}
            ${detailRow('次に進む', escapeHtml(exercise.next))}
          </dl>
        </aside>
      </div>
    `;

    els.dialog.setAttribute('aria-labelledby', 'exercise-dialog-title');
    if (typeof els.dialog.showModal === 'function') {
      els.dialog.showModal();
    } else {
      els.dialog.setAttribute('open', '');
    }

    if (updateHash) {
      history.replaceState(null, '', `#exercise-${exercise.id}`);
    }
  };

  const closeDialog = () => {
    if (!els.dialog) return;
    if (typeof els.dialog.close === 'function') {
      els.dialog.close();
    } else {
      els.dialog.removeAttribute('open');
    }
    if (location.hash.startsWith('#exercise-')) {
      history.replaceState(null, '', `${location.pathname}${location.search}#exercises`);
    }
  };

  const openFromHash = () => {
    if (!location.hash.startsWith('#exercise-')) return;
    const id = location.hash.replace('#exercise-', '');
    const exercise = state.exercises.find((item) => item.id === id);
    if (exercise) openExercise(exercise, false);
  };

  const renderBasics = () => {
    if (!els.basics) return;
    els.basics.innerHTML = state.basics.map((item, index) => `
      <details class="basic-item"${index < 2 ? ' open' : ''}>
        <summary>
          <span>${escapeHtml(item.title)}</span>
          <small>${escapeHtml(item.summary)}</small>
        </summary>
        <div class="basic-content">
          <p><strong>なぜ：</strong>${escapeHtml(item.why)}</p>
          <p><strong>結局どうする：</strong>${escapeHtml(item.action)}</p>
        </div>
      </details>
    `).join('');
  };

  const showLoadError = () => {
    if (els.loadError) els.loadError.hidden = false;
    if (els.status) els.status.textContent = '種目Dataを読み込めませんでした';
  };

  const bindEvents = () => {
    els.search?.addEventListener('input', (event) => {
      state.query = event.target.value;
      renderLibrary();
    });

    els.equipment?.addEventListener('change', (event) => {
      state.equipment = event.target.value;
      renderLibrary();
    });

    els.difficulty?.addEventListener('change', (event) => {
      state.difficulty = event.target.value;
      renderLibrary();
    });

    els.bodyParts?.addEventListener('click', (event) => {
      const button = event.target.closest('button[data-bodypart]');
      if (button) setBodyPart(button.dataset.bodypart);
    });

    els.clearButtons?.forEach((button) => button.addEventListener('click', resetFilters));

    els.grid?.addEventListener('click', (event) => {
      const button = event.target.closest('[data-open-exercise]');
      if (!button) return;
      const exercise = state.exercises.find((item) => item.id === button.dataset.openExercise);
      if (exercise) openExercise(exercise);
    });

    els.dialogClose?.addEventListener('click', closeDialog);

    els.dialog?.addEventListener('click', (event) => {
      if (event.target === els.dialog) closeDialog();
    });

    els.dialog?.addEventListener('cancel', (event) => {
      event.preventDefault();
      closeDialog();
    });

    window.addEventListener('hashchange', openFromHash);
  };

  const init = async () => {
    bindEvents();

    try {
      const [exerciseResponse, basicsResponse] = await Promise.all([
        fetch('data/exercises.json'),
        fetch('data/basics.json')
      ]);

      if (!exerciseResponse.ok || !basicsResponse.ok) throw new Error('Content load failed');

      state.exercises = await exerciseResponse.json();
      state.basics = await basicsResponse.json();

      renderLibrary();
      renderBasics();
      if (els.fallback) els.fallback.hidden = true;
      openFromHash();
    } catch (error) {
      console.error('[Home Workout] content load failed', error);
      showLoadError();
    }
  };

  init();
})();
