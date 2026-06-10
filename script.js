async function loadDotaStats() {
    try {
        // Читаем локальный JSON-файл
        const response = await fetch('stats.json');
        const data = await response.json();

        // Вставляем данные в HTML
        document.getElementById('dota-rank').textContent = data.rank || 'Unranked';
        document.getElementById('dota-winrate').textContent = data.winrate || '0%';
        document.getElementById('dota-hero').textContent = data.top_hero || 'Unknown';

    } catch (error) {
        console.error("Ошибка при загрузке статистики:", error);
        document.getElementById('dota-rank').textContent = "N/A";
        document.getElementById('dota-winrate').textContent = "N/A";
        document.getElementById('dota-hero').textContent = "N/A";
    }
}

document.addEventListener('DOMContentLoaded', loadDotaStats);
