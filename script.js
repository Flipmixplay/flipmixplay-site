//thx for code to safey(safey.neocities.org)
function getYearsSince(dateString) {
  const today = new Date();
  const pastDate = new Date(dateString);

  let years = today.getFullYear() - pastDate.getFullYear();

  const monthDiff = today.getMonth() - pastDate.getMonth();
  const dayDiff = today.getDate() - pastDate.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    years--;
    }
      return years;
    }
    // not my real birthday
    document.getElementById('age').textContent = getYearsSince("2006-10-01");

async function loadDotaStats() {
    try {
        const response = await fetch('stats.json');
        const data = await response.json();

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
