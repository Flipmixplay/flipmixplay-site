// ============================================
// КОНФИГУРАЦИЯ САЙТА
// Измените эти значения под себя
// ============================================

const SITE_CONFIG = {
    //  ЛИЧНАЯ ИНФОРМАЦИЯ
    profile: {
        name: "Flipmixplay",
        avatar: "./avatar.jpg", // Путь к аватарке

        // Краткое описание под именем
        subtitle: {
            en: "Welcome to my personal corner of the web!",
            ru: "Добро пожаловать в мой личный уголок интернета!"
        },

        // Даты для автоматического расчета возраста
        dates: {
            birthday: "2006-10-01",      // Дата рождения (для расчета возраста)
            guitarStart: "2021-09-09"    // Дата начала игры на гитаре
        },

        // Раздел "Обо мне" - используйте {age} и {guitarYears} как placeholders
        about: {
            en: [
                "Hello my name is Miron",
                "I am {age} years old!",
                "I love games like Dota, Terraria, Risk of Rain 2 and all sorts of indie projects.",
                "I also like programming in Python and C#.",
                "Self-taught guitarist with {guitarYears} years of experience."
            ],
            ru: [
                "Привет, меня зовут Мирон",
                "Мне {age} лет!",
                "Я люблю такие игры как Dota, Terraria, Risk of Rain 2 и всякие инди-проекты.",
                "Также мне нравится программировать на Python и C#.",
                "Самоучка-гитарист с {guitarYears}-летним стажем."
            ]
        }
    },

    // 🔗 ССЫЛКИ НА СОЦСЕТИ
    // Оставьте пустую строку "", чтобы скрыть ссылку
    links: {
        github: "https://github.com/Flipmixplay",
        steam: "https://steamcommunity.com/id/flipmixplay/",
        discord: "https://discord.com/users/581012692744011776",
        youtube: "https://www.youtube.com/@flipmixplay",
        twitch: "", // Пример скрытой ссылки
        twitter: ""
    },

    // 🎮 DOTA 2 СТАТИСТИКА
    dota: {
        steamId: "840785563", // Ваш Steam ID (числовой)
        enabled: true // true = показать секцию, false = скрыть
    },

    // 💬 КОММЕНТАРИИ
    comments: {
        enabled: true, // true = показать, false = скрыть
        platform: "utterances", // "utterances" или "giscus"

        // Настройки Utterances
        utterances: {
            repo: "Flipmixplay/flipmixplay-comments",
            theme: "github-dark",
            issueTerm: "pathname"
        },

        // Настройки Giscus (если используете)
        giscus: {
            repo: "Flipmixplay/flipmixplay-site",
            repoId: "R_kgDOS2yXuQ",
            category: "Announcements",
            categoryId: "DIC_kwDOS2yXuc4C-6Kk",
            theme: "dark"
        }
    },

    // 🌍 НАСТРОЙКИ ЯЗЫКА
    language: {
        default: "en", // Язык по умолчанию: "en" или "ru"
        autoDetect: true // Автоматически определять язык браузера
    },

    // 🏠 ХОСТИНГ
    hosting: {
        platform: "GitHub Pages",
        url: "https://pages.github.com/"
    }
};

// Экспорт для использования в других файлах
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SITE_CONFIG;
}
