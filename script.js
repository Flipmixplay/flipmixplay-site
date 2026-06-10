// ============================================
// ЗАГРУЗКА СТАТИСТИКИ DOTA 2
// ============================================

async function loadDotaStats() {
    if (!SITE_CONFIG.dota.enabled) return;

    try {
        const response = await fetch('stats.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        const currentLang = localStorage.getItem('preferredLanguage') || SITE_CONFIG.language.default;
        const unrankedText = TRANSLATIONS[currentLang].unranked;

        // Обработка ранга
        const originalRank = data.rank || unrankedText;
        const translatedRank = getTranslatedRank(originalRank);

        const rankEl = document.getElementById('dota-rank');
        if (rankEl) {
            rankEl.textContent = translatedRank;
            rankEl.dataset.originalRank = originalRank;
        }

        // Винрейт и герой
        const winrateEl = document.getElementById('dota-winrate');
        if (winrateEl) winrateEl.textContent = data.winrate || '0%';

        const heroEl = document.getElementById('dota-hero');
        if (heroEl) heroEl.textContent = data.top_hero || TRANSLATIONS[currentLang].unknown;

        document.getElementById('dota-section').classList.remove('loading');

    } catch (error) {
        console.error("Ошибка при загрузке статистики:", error);
    }
}

document.addEventListener('DOMContentLoaded', loadDotaStats);
