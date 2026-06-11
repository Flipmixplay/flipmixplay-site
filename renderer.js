// ============================================
// РЕНДЕРИНГ КОНТЕНТА ИЗ КОНФИГА
// ============================================

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

function renderAboutText(lang) {
    const config = SITE_CONFIG.profile;
    const age = getYearsSince(config.dates.birthday);
    const guitarYears = getYearsSince(config.dates.guitarStart);

    return config.about[lang].map(line => {
        return line
            .replace('{age}', age)
            .replace('{guitarYears}', guitarYears);
    }).join('<br>');
}

function renderSite() {
    const config = SITE_CONFIG;
    const app = document.getElementById('app');

    let html = '';

    // ШАПКА
    html += `
        <header>
            <div class="lang-switcher">
                <button class="lang-btn active" data-lang="en">EN</button>
                <button class="lang-btn" data-lang="ru">RU</button>
            </div>
            <img src="${config.profile.avatar}" alt="Avatar" class="avatar">
            <h1>${config.profile.name}</h1>
            <p class="subtitle" data-i18n="subtitle">${config.profile.subtitle.en}</p>
        </header>
    `;

     // ОБО МНЕ
     // Определяем начальный язык корректно
     const initialLang = localStorage.getItem('preferredLanguage') || SITE_CONFIG.language.default || 'en';
     html += `
     <section id="about">
     <h2 data-i18n="about_title">About Me</h2>
     <p id="about-text">${renderAboutText(initialLang)}</p>
     </section>
     `;

    // ССЫЛКИ
    const links = config.links;
    const linkIcons = {
        github: 'fab fa-github',
        steam: 'fab fa-steam',
        discord: 'fab fa-discord',
        youtube: 'fab fa-youtube',
        twitch: 'fab fa-twitch',
        twitter: 'fab fa-twitter'
    };

    let linksHtml = '';
    for (const [platform, url] of Object.entries(links)) {
        if (url) {
            linksHtml += `
                <a href="${url}" target="_blank" rel="noopener noreferrer" class="link-card">
                    <i class="${linkIcons[platform]} icon ${platform}"></i>
                    <span class="text" data-i18n="${platform}">${platform.charAt(0).toUpperCase() + platform.slice(1)}</span>
                    <i class="fas fa-arrow-right arrow"></i>
                </a>
            `;
        }
    }

    html += `
        <section class="socials section">
            <h2><i class="fas fa-link"></i> <span data-i18n="connect_title">Connect With Me</span></h2>
            <div class="links-container">
                ${linksHtml}
            </div>
        </section>
    `;

    // DOTA 2
    if (config.dota.enabled) {
        html += `
            <section class="dota-stats section" id="dota-section">
                <h2><i class="fas fa-gamepad"></i> <span data-i18n="dota_title">Dota 2 Statistics</span></h2>
                <div class="stats-grid">
                    <div class="stat-item">
                        <i class="fas fa-trophy stat-icon"></i>
                        <span class="stat-value" id="dota-rank">Loading...</span>
                        <span class="stat-label" data-i18n="rank_tier">Rank Tier</span>
                    </div>
                    <div class="stat-item">
                        <i class="fas fa-chart-line stat-icon"></i>
                        <span class="stat-value" id="dota-winrate">Loading...</span>
                        <span class="stat-label" data-i18n="winrate">Winrate</span>
                    </div>
                    <div class="stat-item">
                        <i class="fas fa-dragon stat-icon"></i>
                        <span class="stat-value" id="dota-hero">Loading...</span>
                        <span class="stat-label" data-i18n="most_played">Most Played</span>
                    </div>
                </div>
                <a href="https://www.opendota.com/players/${config.dota.steamId}" target="_blank" rel="noopener noreferrer" class="dota-btn opendota-btn">
                    <i class="fas fa-chart-bar"></i> <span data-i18n="view_opendota">View Full Profile on OpenDota</span>
                </a>
            </section>
        `;
    }

    // КОММЕНТАРИИ - ИСПРАВЛЕННАЯ ВЕРСИЯ
    if (config.comments.enabled) {
        html += `
            <section class="comments-section section">
                <div class="comments-header">
                    <i class="fas fa-comments"></i>
                    <h2 data-i18n="comments_title">Discussion</h2>
                    <span class="comments-badge">Powered by ${config.comments.platform}</span>
                </div>
                <div id="utterances-container"></div>
            </section>
        `;
    }

    // ФУТЕР
    html += `
        <footer>
            <p><span data-i18n="hosted">Hosted with ❤️ on</span> <a href="${config.hosting.url}" target="_blank">${config.hosting.platform}</a></p>
        </footer>
    `;

    app.innerHTML = html;

    // ✅ ЗАГРУЗКА КОММЕНТАРИЕВ ПОСЛЕ ВСТАВКИ HTML
    if (config.comments.enabled && config.comments.platform === 'utterances') {
        const commentsConfig = config.comments.utterances;
        const script = document.createElement('script');
        script.src = 'https://utteranc.es/client.js';
        script.setAttribute('repo', commentsConfig.repo);
        script.setAttribute('issue-term', commentsConfig.issueTerm);
        script.setAttribute('theme', commentsConfig.theme);
        script.setAttribute('crossorigin', 'anonymous');
        script.async = true;

        const container = document.getElementById('utterances-container');
        if (container) {
            container.appendChild(script);
        }
    }

    const currentLang = localStorage.getItem('preferredLanguage') || SITE_CONFIG.language.default;
    document.getElementById('about-text').innerHTML = renderAboutText(currentLang);
}

document.addEventListener('DOMContentLoaded', renderSite);
