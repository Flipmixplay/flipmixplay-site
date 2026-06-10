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
    document.getElementById('guitar-year').textContent = getYearsSince("2021-09-09");


    async function loadDotaStats() {
        try {
            const response = await fetch('stats.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();

            // Получаем текущий язык
            const currentLang = localStorage.getItem('preferredLanguage') || 'en';
            const loadingText = translations[currentLang]?.loading || 'Loading...';
            const unrankedText = translations[currentLang]?.unranked || 'Unranked';

            // Вставляем данные в HTML
            document.getElementById('dota-rank').textContent = data.rank || unrankedText;
            document.getElementById('dota-winrate').textContent = data.winrate || '0%';
            document.getElementById('dota-hero').textContent = data.top_hero || 'Unknown';

            // Убираем анимацию загрузки
            document.getElementById('dota-section').classList.remove('loading');

        } catch (error) {
            console.error("Ошибка при загрузке статистики:", error);
            const rankEl = document.getElementById('dota-rank');
            const winrateEl = document.getElementById('dota-winrate');
            const heroEl = document.getElementById('dota-hero');
            const sectionEl = document.getElementById('dota-section');

            if(rankEl) rankEl.textContent = "N/A";
            if(winrateEl) winrateEl.textContent = "N/A";
            if(heroEl) heroEl.textContent = "N/A";
            if(sectionEl) sectionEl.classList.remove('loading');
        }
    }

    document.addEventListener('DOMContentLoaded', loadDotaStats);
