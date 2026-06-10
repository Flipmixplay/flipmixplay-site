# dota-stats-site
GitHub Actions раз в сутки (или чаще) запускает скрипт, который получает мою статистику из OpenDota API.
Скрипт сохраняет данные в файл stats.json прямо в репозитории.
Мой сайт на Neocities читает этот stats.json (так как он лежит на том же домене, CSP не блокирует).
Ты просто синхронизируешь файлы между GitHub и Neocities (или используешь GitHub Pages вместо Neocities).
