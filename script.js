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

    // Твой Steam ID (кастомный URL)
    const steamId = '840785563';
    const apiUrl = 'https://api.opendota.com/api/players';

    async function loadDotaStats() {
        try {
            // Запрашиваем 3 источника данных одновременно для скорости
            const [profileRes, wlRes, heroesRes, allHeroesRes] = await Promise.all([
                fetch(`${apiUrl}/${steamId}`),
                fetch(`${apiUrl}/${steamId}/wl`),
                fetch(`${apiUrl}/${steamId}/heroes`),
                fetch('https://api.opendota.com/api/heroes') // Список всех героев для перевода ID в имя
            ]);

            const profile = await profileRes.json();
            const wl = await wlRes.json();
            const heroes = await heroesRes.json();
            const allHeroes = await allHeroesRes.json();

            // 1. Обработка Ранга (Rank Tier)
            let rankText = "Unranked";
            if (profile.rank_tier) {
                const medals = ["Herald", "Guardian", "Crusader", "Archon", "Legend", "Ancient", "Divine", "Immortal"];
                const tier = Math.floor(profile.rank_tier / 10); // Получаем номер медали (1-8)
                const stars = profile.rank_tier % 10;            // Получаем количество звезд (1-5)

                if (tier >= 1 && tier <= 8) {
                    rankText = `${medals[tier - 1]} ${stars}`;
                } else {
                    rankText = `Tier ${profile.rank_tier}`;
                }
            }

            // 2. Обработка Винрейта
            const totalGames = wl.win + wl.loss;
            const winrate = totalGames > 0 ? ((wl.win / totalGames) * 100).toFixed(1) + '%' : '0%';

            // 3. Обработка самого сыгранного героя
            // Сортируем героев по количеству игр (от большего к меньшему)
            heroes.sort((a, b) => b.games - a.games);
            const topHeroId = heroes[0]?.hero_id;

            // Находим имя героя по его ID
            const topHeroData = allHeroes.find(h => h.id === topHeroId);
            const heroName = topHeroData ? topHeroData.localized_name : 'Unknown';

            // 4. Вставляем данные в HTML
            document.getElementById('dota-rank').textContent = rankText;
            document.getElementById('dota-winrate').textContent = winrate;
            document.getElementById('dota-hero').textContent = heroName;

            // 5. Убираем анимацию загрузки
            document.getElementById('dota-section').classList.remove('loading');

        } catch (error) {
            console.error("Ошибка при загрузке статистики Dota 2:", error);
            document.getElementById('dota-rank').textContent = "Private";
            document.getElementById('dota-winrate').textContent = "N/A";
            document.getElementById('dota-hero').textContent = "N/A";
            document.getElementById('dota-section').classList.remove('loading');
        }
    }

    // Запускаем функцию при загрузке страницы
    document.addEventListener('DOMContentLoaded', loadDotaStats);
