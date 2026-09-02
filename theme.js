(() => {
  const root = document.documentElement;
  const button = document.querySelector('[data-theme-toggle]');
  const label = button?.querySelector('[data-theme-label]');
  const icon = button?.querySelector('[data-theme-icon]');
  const themeMeta = document.querySelector('meta[name="theme-color"]');
  const media = window.matchMedia('(prefers-color-scheme: dark)');
  const storageKey = 'home-workout-theme';

  const storedTheme = () => {
    try {
      const value = localStorage.getItem(storageKey);
      return value === 'light' || value === 'dark' ? value : null;
    } catch {
      return null;
    }
  };

  const effectiveTheme = () => root.dataset.theme || (media.matches ? 'dark' : 'light');

  const sync = () => {
    const dark = effectiveTheme() === 'dark';
    if (button) {
      button.setAttribute('aria-pressed', String(dark));
      button.setAttribute('aria-label', dark ? 'ライトモードに切り替える' : 'ダークモードに切り替える');
    }
    if (label) label.textContent = dark ? 'ライト' : 'ダーク';
    if (icon) icon.textContent = dark ? '☀' : '☾';
    if (themeMeta) themeMeta.setAttribute('content', dark ? '#101310' : '#f5f6f3');
  };

  button?.addEventListener('click', () => {
    const next = effectiveTheme() === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try {
      localStorage.setItem(storageKey, next);
    } catch {
      // Theme still works for the current page when storage is unavailable.
    }
    sync();
  });

  const onSystemThemeChange = () => {
    if (!storedTheme()) sync();
  };

  if (typeof media.addEventListener === 'function') {
    media.addEventListener('change', onSystemThemeChange);
  } else if (typeof media.addListener === 'function') {
    media.addListener(onSystemThemeChange);
  }

  sync();
})();
