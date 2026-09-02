# PROJECT LEARNINGS

このファイルは、Home Workout Guideで発生した再発防止価値の高い失敗と、今後も再利用したい成功候補を長期的に残すための正本です。

## Failure

### PL-F-001 フォーム図が抽象的すぎて動きが伝わらなかった

- Date: 2026-09-02
- Status: resolved
- Severity: medium
- Cost: medium
- Symptom: ダンベル種目の図が棒人間中心で、開始姿勢・終了姿勢・ダンベルの位置が直感的に分かりにくかった。
- Expected: 初心者が画像だけでも「どこからどこへ動かすか」を理解できる。
- Actual: 英語ラベルと単純線画に情報を寄せすぎ、動作説明として弱かった。
- Trigger / Reproduction: ダンベル種目の旧インラインSVGを見る。
- Root Cause: 画像を「装飾・補助」として作り、説明の主役として設計していなかった。
- Final Fix: 開始 / 終了を左右に並べ、ダンベル形状、矢印、日本語ラベルを持つ独立SVGへ置換。自重・座位種目にも同じ説明原則を展開。
- Affected files / systems: `index.html`, `assets/exercises/*.svg`
- Detection method: User feedback「画像が意味わからん」
- Regression Guard: 新しい運動図は開始状態・終了状態または正解/NGの比較と、説明用altを持つ。
- Prevention: 抽象的な棒人間だけで完成扱いせず、画像単体で動作方向が伝わるか確認する。
- Related Issue / PR / Commit: 2026-09-02 image redesign commits
- Guide candidate: no
- Guide note: Project固有のVisual説明ルールとして維持する。

### PL-F-002 全情報を同じCard強度で並べ、長い説明ページに見えた

- Date: 2026-09-02
- Status: resolved
- Severity: medium
- Cost: medium
- Symptom: Hero、注意、種目、回復、進め方がほぼ同じCard / Section rhythmで縦に続き、情報量が増えるほどHierarchyが弱くなった。
- Expected: 最初に「今日何をやるか」が分かり、必要なフォームへすぐ移動できる。
- Actual: どの情報も同じ強さで見え、ページ全体が長い説明の集合に見えた。
- Root Cause: Content追加ごとに同じCard patternを足し、Information ArchitectureとPage Compositionを再設計していなかった。
- Final Fix: Exercise Cardは独立した種目に限定し、Safety / Recovery / Progressは別表現へ分ける。
- Affected files / systems: `index.html`, `styles.css`
- Detection method: User request「サイトの見た目を修正して」＋構造Review。
- Regression Guard: Section追加時に既存Cardを複製する前に、その情報が本当に独立Objectか判断する。
- Prevention: Card数ではなくContent semanticsでComponentを選ぶ。
- Guide candidate: no
- Guide note: Decorative Cardificationを避けるProject例。

### PL-F-003 別Projectの成功Directionを題材の雰囲気ごと持ち込みFPS感が出た

- Date: 2026-09-02
- Status: resolved
- Severity: high
- Cost: medium
- Symptom: Training Manual / Sticky Rail / 暗色 / Grid / 番号Labelを組み合わせた結果、筋トレサイトなのにFPS攻略・Field Manualのような印象になった。
- Expected: 健康・筋トレ用途として、運動画像と種目選択が自然に主役になる。
- Actual: Tarkov Field Manualの構造原理を参照した際、Rail / dark manual / coded labelsなどSource固有のVisual moodまでTargetへ近づけてしまった。
- Trigger / Reproduction: commit `ab0c7e8a80cdb59286e10871f8c804bef45d92a7` 付近のUI。
- Root Cause: Validated DirectionからTransferすべき構造原理と、Copyすべきでない題材固有表層の切り分けが不十分だった。
- Final Fix: Sticky Railを非表示化し、Light neutral background + soft green + Exercise Library型Card + workout-focused First Viewへ変更。ReferenceもHevy / Nike Training Club等のFitnessサービスへ変更。
- Affected files / systems: `styles.css`, `README.md`, `PROJECT_LEARNINGS.md`
- Detection method: User feedback「この成功例はちょっと違う」「FPS感がある」。
- Regression Guard: Visual Referenceを選ぶ際、Project shapeだけでなく題材 / mood / primary visual materialまで近いか確認する。
- Prevention: 別ProjectのValidated Directionは `Transfer / Rebuild / Do not copy` を明示し、Source固有のRail・dark mood・coded labels等を成功要因だと誤認しない。
- Related Issue / PR / Commit: `ba8dac1208952b4480de87694fb087ce43c83547`
- Guide candidate: yes
- Guide note: web-project-guideのSuccess Factor Misattribution / Reference Transfer Ruleの具体例として再利用価値がある。

---

## Success

### PL-S-001 開始→終了の独立フォーム図

- Date: 2026-09-02
- Goal / Problem: 初心者でも運動動作を視覚的に理解できるようにする。
- Adopted Pattern: 左に開始、右に動作後、Accent色でダンベル / 矢印を強調し、日本語の短い説明を併記する。
- Why it worked: Userから「だいぶわかりやすくなった」と肯定Feedbackがあった。
- Trade-off: 厳密な解剖学図ではなく、動作理解を優先した説明図。
- Reuse when: 新しい運動種目を追加するとき。
- Avoid when: プランクのような静止種目。静止種目は正解 / NG比較を優先する。
- Related files / tests: `assets/exercises/*.svg`, `index.html`
- Guide candidate: no
- Guide note: Home Workout Guide内の画像説明Contractとして再利用する。

### PL-S-002 Fitness App / Exercise Library方向

- Date: 2026-09-02
- Status: candidate / user validation待ち
- Goal / Problem: FPS / Technical Manual感をなくし、運動用途として自然に見えるVisualへ戻す。
- Adopted Pattern: Light neutral background、soft green accent、Top category navigation、Quick Start、Exercise image + muscle target + reps + instructionをまとめたExercise Card。
- Why it may work: ProjectのPrimary Taskである「種目を選ぶ → 画像を見る → 回数とフォームを確認する」にVisual hierarchyを直接合わせている。
- Trade-off: 明るいUIへ変えるため、暗色SVGはCard内のExercise previewとして扱い、Site全体の背景とは分離する。
- Reuse when: Userから肯定的Visual feedbackが得られた場合、このProject内で維持する。
- Avoid when: Userがまだ違和感を示した場合。色だけ微調整せず、Fitness Editorial / Workout Planner等の別Directionと比較する。
- Related files / tests: `styles.css`, `index.html`
- Guide candidate: no
- Guide note: User Validation前なので成功扱いしない。

---

## Guide Feedback Queue

| ID | Type | Summary | Evidence | Next action |
|---|---|---|---|---|
| HWG-VIS-001 | rejected | Tarkov / Field Manual系の成功Directionを筋トレGuideへ転用すると題材Mismatchが発生 | User feedback「FPS感がある」 | Reference Transfer Ruleの具体例としてGuide改善候補 |
| HWG-VIS-002 | success candidate | Fitness App / Exercise Library方向 | 2026-09-02 CSS redesign、User visual validation待ち | User feedback後に維持 / 再設計を判断 |
