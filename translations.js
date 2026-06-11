// ============================================
// ПЕРЕВОДЫ САЙТА
// ============================================

const TRANSLATIONS = {
    en: {
        // Общие
        loading: "Loading...",
        unranked: "Unranked",
        unknown: "Unknown",

        // Заголовки секций
        about_title: "About Me",
        connect_title: "Connect With Me",
        dota_title: "Dota 2 Statistics",
        comments_title: "Comments",

        // Ссылки
        github: "My GitHub",
        steam: "My Steam",
        discord: "My Discord",
        youtube: "My Youtube",
        twitch: "My Twitch",
        twitter: "My Twitter",

        // Dota 2 статистика
        rank_tier: "Rank Tier",
        winrate: "Winrate",
        most_played: "Most Played",
        view_opendota: "View Full Profile on OpenDota",

        // Футер
        hosted: "Hosted with ❤️ on",

        // Ранги Dota 2
        ranks: {
            "Herald": "Herald",
            "Guardian": "Guardian",
            "Crusader": "Crusader",
            "Archon": "Archon",
            "Legend": "Legend",
            "Ancient": "Ancient",
            "Divine": "Divine",
            "Immortal": "Immortal",
            "Unranked": "Unranked"
        }
    },

    ru: {
        // Общие
        loading: "Загрузка...",
        unranked: "Без ранга",
        unknown: "Неизвестно",

        // Заголовки секций
        about_title: "Обо мне",
        connect_title: "Связаться со мной",
        dota_title: "Статистика Dota 2",
        comments_title: "Комментарии",

        // Ссылки
        github: "Мой GitHub",
        steam: "Мой Steam",
        discord: "Мой Discord",
        youtube: "Мой Youtube",
        twitch: "Мой Twitch",
        twitter: "Мой Twitter",

        // Dota 2 статистика
        rank_tier: "Ранг",
        winrate: "Винрейт",
        most_played: "Любимый герой",
        view_opendota: "Полный профиль на OpenDota",

        // Футер
        hosted: "Размещено с ❤️ на",

        // Ранги Dota 2
        ranks: {
            "Herald": "Рекрут",
            "Guardian": "Страж",
            "Crusader": "Рыцарь",
            "Archon": "Герой",
            "Legend": "Легенда",
            "Ancient": "Властелин",
            "Divine": "Божество",
            "Immortal": "Титан",
            "Unranked": "Без ранга"
        }
    }
};

// Экспорт
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TRANSLATIONS;
}
