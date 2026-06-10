```markdown
# 🚀 Быстрая настройка сайта

Привет! Этот сайт легко настроить под себя. Следуй этой инструкции.

## 📋 Что нужно изменить

### 1. Открой файл `config.js`

Это главный конфигурационный файл. Измени следующие значения:

#### Личная информация
```javascript
profile: {
    name: "Твоё Имя",           // Твой никнейм
    avatar: "./avatar.jpg",     // Путь к аватарке (загрузи свою картинку)

    // Даты для автоматического расчета
    dates: {
        birthday: "2006-10-01",      // Дата рождения
        guitarStart: "2021-09-09"    // Дата начала игры на гитаре (или любой другой навык)
    },

    subtitle: {
        en: "Your subtitle here",
        ru: "Твой подзаголовок"
    },

    about: {
        en: [
            "Hello my name is YourName",
            "I am {age} years old!",
            "I love games like Dota, Terraria, Risk of Rain 2.",
            "Self-taught guitarist with {guitarYears} years of experience."
        ],
        ru: [
            "Привет, меня зовут ТвоёИмя",
            "Мне {age} лет!",
            "Я люблю такие игры как Dota, Terraria, Risk of Rain 2.",
            "Самоучка-гитарист с {guitarYears}-летним стажем."
        ]
    }
}
```

**Важно:** Используй `{age}` и `{guitarYears}` как placeholders - они автоматически заменятся на рассчитанные значения!

#### Ссылки на соцсети
```javascript
links: {
    github: "https://github.com/твой-username",
    steam: "https://steamcommunity.com/id/твой-id/",
    discord: "https://discord.com/users/твой-id",
    youtube: "https://www.youtube.com/@твой-канал",
    twitch: "",  // Оставь пустым, чтобы скрыть
    twitter: ""
}
```

#### Dota 2 статистика
```javascript
dota: {
    steamId: "123456789",  // Твой числовой Steam ID
    enabled: true          // true = показать, false = скрыть
}
```

**Как узнать свой Steam ID:**
1. Открой свой профиль Steam
2. Нажми правой кнопкой → "Копировать URL страницы"
3. Если ссылка вида `steamcommunity.com/profiles/76561198XXXXXXXXX/` — это твой ID
4. Если ссылка вида `steamcommunity.com/id/твой-ник/` — зайди на [steamid.io](https://steamid.io/) и узнай числовой ID

#### Комментарии
```javascript
comments: {
    enabled: true,
    platform: "utterances",  // "utterances" или "giscus"
    utterances: {
        repo: "твой-username/название-репозитория-для-комментариев",
        theme: "github-dark",
        issueTerm: "pathname"
    }
}
```

**Настройка Utterances:**
1. Создай публичный репозиторий для комментариев (например, `my-comments`)
2. Установи приложение [Utterances](https://github.com/apps/utterances)
3. Укажи этот репозиторий в настройках

### 2. Загрузи свою аватарку

Замени файл `avatar.jpg` в корне репозитория на свою картинку. Можно использовать:
- `avatar.jpg`
- `avatar.png`
- `avatar.webp`

Не забудь обновить путь в `config.js`:
```javascript
avatar: "./avatar.png",
```

### 3. Настрой GitHub Pages

1. Зайди в **Settings** → **Pages**
2. Выбери ветку `main` и папку `/ (root)`
3. Нажми **Save**
4. Подожди 2-3 минуты

### 4. Настрой GitHub Actions

1. Открой `.github/workflows/update-stats.yml`
2. Убедись, что workflow включен
3. Запусти его вручную: **Actions** → **Update Dota 2 Stats** → **Run workflow**

### 5. Готово!

Открой свой сайт по адресу:
```
https://твой-username.github.io/название-репозитория/
```

## 🎨 Кастомизация цветов

Открой `style.css` и измени цвета напрямую:

```css
/* Основной цвет (сейчас голубой) */
color: #00d2ff;

/* Можно заменить на любой другой, например: */
color: #ff6b6b;  /* Красный */
color: #51cf66;  /* Зеленый */
color: #ffd43b;  /* Желтый */
```

## 🌍 Добавление нового языка

1. Открой `translations.js`
2. Добавь новый объект языка:
```javascript
fr: {
    about_title: "À propos de moi",
    connect_title: "Me contacter",
    // ... остальные переводы
}
```
3. Открой `renderer.js` и добавь кнопку в секцию `lang-switcher`:
```javascript
<button class="lang-btn" data-lang="fr">FR</button>
```

## ❓ Проблемы?

- **Сайт не загружается:** Проверь консоль браузера (F12)
- **Статистика не показывается:** Убедись, что Steam ID правильный и профиль публичный
- **Комментарии не работают:** Проверь настройки Utterances/Giscus

---

**Удачи с настройкой! 🚀**
