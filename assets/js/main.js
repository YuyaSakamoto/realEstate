
(function () {
  const config = window.SITE_CONFIG || {};

  // 共通情報の自動差し替え
  document.querySelectorAll('[data-config]').forEach((el) => {
    const key = el.dataset.config;
    if (key === 'year') {
      el.textContent = new Date().getFullYear();
      return;
    }
    if (config[key]) el.textContent = config[key];
  });

  document.querySelectorAll('[data-config-href]').forEach((el) => {
    const type = el.dataset.configHref;
    if (type === 'tel' && config.phoneHref) el.setAttribute('href', 'tel:' + config.phoneHref);
    if (type === 'email' && config.email) el.setAttribute('href', 'mailto:' + config.email);
  });

  // スマホメニュー
  const button = document.querySelector('[data-menu-button]');
  const nav = document.querySelector('[data-nav]');
  if (button && nav) {
    button.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      button.setAttribute('aria-expanded', String(isOpen));
    });
  }

  // 静的サイト向け仮フォーム：メール作成画面を開く
  document.querySelectorAll('[data-contact-form]').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const lines = [];
      for (const [key, value] of data.entries()) {
        lines.push(`${key}: ${value}`);
      }
      const subject = encodeURIComponent('不動産売却の相談・査定依頼');
      const body = encodeURIComponent(lines.join('\n'));
      const email = config.email || 'info@example.com';
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    });
  });

  // 販売実績・成約実績の自動表示
  const resultsList = document.querySelector('[data-results-list]');
  if (resultsList) {
    const results = Array.isArray(window.RESULTS_DATA) ? window.RESULTS_DATA : [];
    const escapeHtml = (value) => String(value || '').replace(/[&<>"']/g, (char) => {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char];
    });

    if (results.length === 0) {
      resultsList.innerHTML = '<p class="muted result-empty">現在、掲載準備中です。</p>';
    } else {
      resultsList.innerHTML = results.map((item) => {
        return `
          <article class="result-card">
            <span>${escapeHtml(item.area)}</span>
            <h2>${escapeHtml(item.property)}</h2>
            <dl>
              <div><dt>売却期間</dt><dd>${escapeHtml(item.period)}</dd></div>
              <div><dt>相談内容</dt><dd>${escapeHtml(item.request)}</dd></div>
              <div><dt></dt><dd>${escapeHtml(item.reason)}</dd></div>
            </dl>
          </article>
        `;
      }).join('');
    }
  }

})();

