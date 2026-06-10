// Словарь переводов
const translations = {
    en: {
        subtitle: "Welcome to my personal corner of the web!",
        about_title: "About Me",
        about_text_1: "Hello my name is flipmixplay",
        about_text_2: "I am",
        about_text_3: "years old!",
        about_text_4: "I love games like Dota, Terraria, Risk of Rain 2 and all sorts of indie projects.",
        about_text_5: "I also like programming in Python and C#.",
        connect_title: "Connect With Me",
        github: "My GitHub",
        steam: "My Steam",
        discord: "My Discord",
        youtube: "My Youtube",
        dota_title: "Dota 2 Statistics",
        rank_tier: "Rank Tier",
        winrate: "Winrate",
        most_played: "Most Played",
        view_opendota: "View Full Profile on OpenDota",
        comments_title: "Discussion",
        hosted: "Hosted with ❤️ on",
        loading: "Loading...",
        unranked: "Unranked"
    },
    ru: {
        subtitle: "Добро пожаловать в мой личный уголок интернета!",
        about_title: "Обо мне",
        about_text_1: "Привет, меня зовут flipmixplay",
        about_text_2: "Мне",
        about_text_3: "лет!",
        about_text_4: "Я люблю такие игры как Dota, Terraria, Risk of Rain 2 и всякие инди-проекты.",
        about_text_5: "Также мне нравится программировать на Python и C#.",
        connect_title: "Связаться со мной",
        github: "Мой GitHub",
        steam: "Мой Steam",
        discord: "Мой Discord",
        youtube: "Мой Youtube",
        dota_title: "Статистика Dota 2",
        rank_tier: "Ранг",
        winrate: "Винрейт",
        most_played: "Любимый герой",
        view_opendota: "Полный профиль на OpenDota",
        comments_title: "Обсуждение",
        hosted: "Размещено с ❤️ на",
        loading: "Загрузка...",
        unranked: "Без ранга"
    }
};

// Функция переключения языка
function setLanguage(lang) {
    // Проверяем, существует ли язык
    if (!translations[lang]) {
        lang = 'en'; // По умолчанию английский
    }

    // Обновляем все элементы с data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
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

    // Сохраняем выбор в localStorage
    localStorage.setItem('preferredLanguage', lang);

    // Обновляем язык Giscus (перезагружаем виджет)
    updateGiscusLanguage(lang);
}

// Функция для обновления языка Giscus
function updateGiscusLanguage(lang) {
    const giscusScript = document.querySelector('script[src*="giscus.app/client.js"]');
    if (giscusScript) {
        giscusScript.setAttribute('data-lang', lang);

        // Перезагружаем Giscus
        const iframe = document.querySelector('.giscus-frame');
        if (iframe) {
            iframe.remove();
            // Перезагружаем скрипт
            const newScript = giscusScript.cloneNode(true);
            giscusScript.parentNode.replaceChild(newScript, giscusScript);
        }
    }
}

// Автоматическое определение языка
function detectLanguage() {
    // Сначала проверяем localStorage
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && translations[savedLang]) {
        return savedLang;
    }

    // Если нет сохраненного, определяем язык браузера
    const browserLang = navigator.language || navigator.userLanguage;

    // Проверяем, начинается ли язык с 'ru'
    if (browserLang.startsWith('ru')) {
        return 'ru';
    }

    // По умолчанию английский
    return 'en';
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    // Определяем язык
    const lang = detectLanguage();
    setLanguage(lang);

    // Добавляем обработчики на кнопки переключения
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
});
