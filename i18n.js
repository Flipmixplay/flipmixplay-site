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

// Функция переключения языка
function setLanguage(lang) {
    if (!TRANSLATIONS[lang]) {
        lang = SITE_CONFIG.language.default;
    }

    // Обновляем все элементы с data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = t(key);
    });

    // Обновляем атрибут lang в HTML
    document.documentElement.lang = lang;

    // Обновляем активную кнопку
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });

    // Сохраняем выбор
    localStorage.setItem('preferredLanguage', lang);

    // Переводим ранг
    const rankEl = document.getElementById('dota-rank');
    if (rankEl && rankEl.dataset.originalRank) {
        rankEl.textContent = getTranslatedRank(rankEl.dataset.originalRank);
    }

    // Обновляем заголовок страницы
    document.title = `${SITE_CONFIG.profile.name}'s Website`;
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
