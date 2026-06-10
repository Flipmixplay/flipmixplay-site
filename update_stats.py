import requests
import json
import re

# Читаем конфигурацию
CONFIG_FILE = 'config.js'

def read_config():
    """Читает Steam ID из config.js"""
    with open(CONFIG_FILE, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Извлекаем steamId из JavaScript объекта
    match = re.search(r'steamId:\s*["\'](\d+)["\']', content)
    if match:
        return match.group(1)
    else:
        raise Exception("Steam ID не найден в config.js")

STEAM_ID = read_config()
API_URL = 'https://api.opendota.com/api/players'

def get_dota_stats():
    try:
        print(f"🔍 Запрос данных для Steam ID: {STEAM_ID}")
        
        r_profile = requests.get(f'{API_URL}/{STEAM_ID}')
        r_wl = requests.get(f'{API_URL}/{STEAM_ID}/wl')
        r_heroes = requests.get(f'{API_URL}/{STEAM_ID}/heroes')
        r_all_heroes = requests.get('https://api.opendota.com/api/heroes')

        try:
            profile = r_profile.json()
            wl = r_wl.json()
            heroes = r_heroes.json()
            all_heroes = r_all_heroes.json()
        except requests.exceptions.JSONDecodeError:
            print(f"❌ Ошибка: Сервер вернул не JSON. Ответ: {r_profile.text}")
            return

        if isinstance(profile, str) or (isinstance(profile, dict) and "error" in profile):
            print(f"❌ API вернул ошибку профиля: {profile}")
            return

        # Обработка ранга
        rank_text = "Unranked"
        if isinstance(profile, dict) and profile.get('rank_tier'):
            medals = ["Herald", "Guardian", "Crusader", "Archon", "Legend", "Ancient", "Divine", "Immortal"]
            tier = profile['rank_tier'] // 10
            stars = profile['rank_tier'] % 10
            if 1 <= tier <= 8:
                rank_text = f"{medals[tier - 1]} {stars}"

        # Обработка винрейта
        if isinstance(wl, dict):
            wins = wl.get('win', 0)
            losses = wl.get('lose', 0)
            total_games = wins + losses
            winrate = f"{(wins / total_games * 100):.1f}%" if total_games > 0 else "0%"
        else:
            winrate = "N/A"

        # Обработка любимого героя
        top_hero_name = "Unknown"
        if isinstance(heroes, list) and len(heroes) > 0 and isinstance(all_heroes, list):
            sorted_heroes = sorted(heroes, key=lambda x: x.get('games', 0), reverse=True)
            top_hero_id = sorted_heroes[0].get('hero_id')
            hero_data = next((h for h in all_heroes if h.get('id') == top_hero_id), None)
            if hero_data:
                top_hero_name = hero_data.get('localized_name', 'Unknown')

        stats = {
            "rank": rank_text,
            "winrate": winrate,
            "top_hero": top_hero_name,
            "last_updated": profile.get('last_match_time', 'N/A')
        }

        with open('stats.json', 'w', encoding='utf-8') as f:
            json.dump(stats, f, indent=2, ensure_ascii=False)

        print("✅ Статистика успешно обновлена!")
        print(json.dumps(stats, indent=2, ensure_ascii=False))

    except Exception as e:
        print(f"❌ Критическая ошибка: {e}")
        import traceback
        traceback.print_exc()

if __name__ == '__main__':
    get_dota_stats()