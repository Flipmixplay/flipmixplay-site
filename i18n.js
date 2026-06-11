// ============================================
// СИСТЕМА ЛОКАЛИЗАЦИИ
// ============================================

// Функция перевода ранга
function getTranslatedRank(rankText) {
    if (!rankText || rankText === 'N/A') return rankText;
    const currentLang = localStorage.getItem('preferredLanguage') || SITE_CONFIG.language.default;

    const parts = rankText.split(' ');
    const medal = parts[0];
    const stars = parts[1] || '';

    const translatedMedal = TRANSLATIONS[currentLang].ranks[medal] || medal;
    return stars ? `${translatedMedal} ${stars}` : translatedMedal;
}

// Функция получения перевода
function t(key) {
    const lang = localStorage.getItem('preferredLanguage') || SITE_CONFIG.language.default;
    return TRANSLATIONS[lang][key] || TRANSLATIONS.en[key] || key;
}


function setLanguage(lang) {
  // Проверяем, существует ли язык
  if (!translations[lang]) {
    lang = 'en'; // По умолчанию английский
  }

  // 1. Обновляем все стандартные элементы с data-i18n
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  // 2. ✅ ИСПРАВЛЕНИЕ: Обновляем динамический текст "Обо мне"
  const aboutTextEl = document.getElementById('about-text');
  if (aboutTextEl) {
    // Функция renderAboutText доступна глобально из renderer.js
    aboutTextEl.innerHTML = renderAboutText(lang); 
  }

  // 3. Обновляем атрибут lang в HTML
  document.documentElement.lang = lang;

  // 4. Обновляем активную кнопку
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    }
  });

  // 5. Сохраняем выбор в localStorage
  localStorage.setItem('preferredLanguage', lang);

  // 6. Переводим ранг Dota 2, если он уже загружен
  const rankEl = document.getElementById('dota-rank');
  if (rankEl && rankEl.dataset.originalRank) {
    rankEl.textContent = getTranslatedRank(rankEl.dataset.originalRank);
  }
}

// Автоматическое определение языка
function detectLanguage() {
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && TRANSLATIONS[savedLang]) {
        return savedLang;
    }

    if (SITE_CONFIG.language.autoDetect) {
        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang.startsWith('ru')) {
            return 'ru';
        }
    }

    return SITE_CONFIG.language.default;
}

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    const lang = detectLanguage();
    setLanguage(lang);

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(btn.getAttribute('data-lang'));
        });
    });
});
