# 🌐 Flipmixplay's Personal Website

<div align="center">

![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-Online-success?style=for-the-badge&logo=github)
![Languages](https://img.shields.io/badge/Languages-EN%2FRU-blue?style=for-the-badge)
![Dota 2 API](https://img.shields.io/badge/Dota_2-OpenDota_API-orange?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**Мой личный уголок в интернете** — статический сайт с автоматической статистикой Dota 2, мультиязычностью и стильным дизайном.

[🌍 Посетить сайт](https://flipmixplay.github.io/flipmixplay-site/) · [ Оставить комментарий](https://flipmixplay.github.io/flipmixplay-site/#comments) · [ Мой OpenDota](https://www.opendota.com/players/840785563)

</div>

---

## 📘 Настройка сайта

> ⚡ **Хочешь сделать такой же сайт для себя?**
>
> Полная пошаговая инструкция находится в файле **[SETUP_GUIDE.md](./SETUP_GUIDE.md)**.
>
> Всего 5 минут — и у тебя будет свой сайт с:
> - 🎨 Кастомным дизайном
> - 🌍 Поддержкой нескольких языков
> - 🎮 Автоматической статистикой Dota 2
> - 💬 Системой комментариев

---

## ✨ Возможности

| Фича | Описание |
|------|----------|
| 🎮 **Статистика Dota 2** | Автообновление ранга, винрейта и любимого героя каждые 6 часов |
|  **Мультиязычность** | EN/RU с автоопределением языка браузера |
|  **Комментарии** | Интеграция с Utterances / Giscus (GitHub Issues/Discussions) |
|  **Стильный дизайн** | Темная тема с голубыми акцентами в стиле OpenDota |
| 📱 **Адаптивность** | Отлично выглядит на всех устройствах |
| ⚡ **Быстрая загрузка** | Статический сайт без тяжелых фреймворков |
| 🤖 **Автоматизация** | GitHub Actions для обновления данных |
| ⚙️ **Конфигурация** | Все настройки в одном файле `config.js` |

---

## 🛠️ Технологический стек

### Frontend
- **HTML5** — семантическая разметка
- **CSS3** — кастомные стили, Grid, Flexbox, анимации
- **JavaScript (ES6+)** — интерактивность, локализация, рендеринг
- **Font Awesome** — иконки
- **Google Fonts (Inter)** — типографика

### Backend & Automation
- **GitHub Pages** — хостинг
- **GitHub Actions** — CI/CD для обновления статистики
- **Python** — скрипт для работы с OpenDota API
- **OpenDota API** — источник данных о Dota 2

### Интеграции
- **Utterances / Giscus** — система комментариев
- **OpenDota** — статистика Dota 2

---

##  Структура проекта

```
flipmixplay-site/
├── 📄 index.html              # Главная страница (минимальная)
├── 🎨 style.css               # Все стили сайта
├── ⚙️ config.js               # 🌟 Главный файл конфигурации
── 🌍 translations.js         # Словарь переводов (EN/RU)
── 🖼️ renderer.js             # Генератор HTML из конфига
├──  i18n.js                 # Система локализации
├── 📊 script.js               # Загрузка статистики Dota 2
├──  update_stats.py         # Python-скрипт для OpenDota API
├── 📦 stats.json              # Кэш статистики (автогенерация)
├── 🖼️ avatar.jpg              # Аватар профиля
├── 📖 SETUP_GUIDE.md          # 📚 Инструкция по настройке
├── 📖 README.md               # Этот файл
└── 📂 .github/
    └── workflows/
        └── update-stats.yml   # GitHub Actions workflow
```

---

## 🚀 Быстрый старт

### Для пользователей (свой сайт)

1. **Форкни** этот репозиторий
2. **Открой** [`config.js`](./config.js) и измени данные под себя
3. **Загрузи** свою аватарку (`avatar.jpg`)
4. **Включи** GitHub Pages в настройках репозитория
5. **Готово!** 🎉

📖 **Подробная инструкция:** [SETUP_GUIDE.md](./SETUP_GUIDE.md)

### Для разработчиков

```bash
git clone https://github.com/Flipmixplay/flipmixplay-site.git
cd flipmixplay-site
# Открой index.html в браузере или используй Live Server
```

---

## ⚙️ Как работает автоматизация

```
┌─────────────────────┐
│  GitHub Actions     │  ← каждые 6 часов
│  (update-stats.yml) │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│  Python скрипт      │  ← update_stats.py
│  (OpenDota API)     │
└────────────────────┘
           │
           ▼
┌─────────────────────┐
│  stats.json         │  ← обновление файла
──────────┬──────────┘
           │
           ▼
┌─────────────────────
│  GitHub Pages       │  ← автоматический деплой
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│  Твой сайт          │  ← показывает актуальные данные
└─────────────────────┘
```

---

## 🎨 Кастомизация

### Изменение цветовой схемы

Открой `style.css` и измени основные цвета:

```css
/* Основной цвет (сейчас голубой) */
color: #00d2ff;

/* Варианты: */
color: #ff6b6b;  /* Красный */
color: #51cf66;  /* Зеленый */
color: #ffd43b;  /* Желтый */
color: #cc5de8;  /* Фиолетовый */
```

### Добавление нового языка

1. Открой [`translations.js`](./translations.js)
2. Добавь новый объект языка:
   ```javascript
   fr: {
       about_title: "À propos de moi",
       connect_title: "Me contacter",
       // ... остальные переводы
   }
   ```
3. Открой [`renderer.js`](./renderer.js) и добавь кнопку в `lang-switcher`

### Добавление новых ссылок

Открой [`config.js`](./config.js) и добавь новую ссылку в объект `links`:

```javascript
links: {
    github: "https://github.com/...",
    // ...
    telegram: "https://t.me/yourname"  // Новая ссылка
}
```

Затем добавь иконку в `renderer.js` в объект `linkIcons`.

---

##  Поддерживаемые языки

| Язык | Код | Статус |
|------|-----|--------|
| 🇧 English | `en` | ✅ Полный |
| 🇷🇺 Русский | `ru` | ✅ Полный |

Хочешь добавить свой язык? Смотри раздел **Кастомизация** выше или [SETUP_GUIDE.md](./SETUP_GUIDE.md).

---

## 🤝 Вклад в проект

Приветствуются любые улучшения! Вот как помочь:

1. **Форкни** репозиторий
2. **Создай ветку** для фичи (`git checkout -b feature/AmazingFeature`)
3. **Закоммить** изменения (`git commit -m 'Add AmazingFeature'`)
4. **Запуш** ветку (`git push origin feature/AmazingFeature`)
5. **Открой Pull Request**

---

## 📝 Лицензия

Этот проект распространяется под лицензией MIT. Подробнее в файле [LICENSE](LICENSE).

---

## 📬 Контакты

- **GitHub**: [@Flipmixplay](https://github.com/Flipmixplay)
- **Steam**: [flipmixplay](https://steamcommunity.com/id/flipmixplay/)
- **Discord**: [Профиль](https://discord.com/users/581012692744011776)
- **YouTube**: [@flipmixplay](https://www.youtube.com/@flipmixplay)
- **Dota 2**: [OpenDota](https://www.opendota.com/players/840785563)

---

<div align="center">

### ⭐ Если вам понравился проект, поставьте звезду!

**Сделано с ❤️ и большим количеством Dota 2**

[⬆️ Вернуться наверх](#-flipmixplays-personal-website)

</div>
