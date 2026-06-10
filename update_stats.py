import requests
import json

STEAM_ID = 'flipmixplay'
API_URL = 'https://api.opendota.com/api/players'

def get_dota_stats():
    try:
        # Получаем данные из OpenDota API
        profile = requests.get(f'{API_URL}/{STEAM_ID}').json()
        wl = requests.get(f'{API_URL}/{STEAM_ID}/wl').json()
        heroes = requests.get(f'{API_URL}/{STEAM_ID}/heroes').json()
        all_heroes = requests.get('https://api.opendota.com/api/heroes').json()

        # Обработка ранга
        rank_text = "Unranked"
        if 'rank_tier' in profile and profile['rank_tier']:
            medals = ["Herald", "Guardian", "Crusader", "Archon", "Legend", "Ancient", "Divine", "Immortal"]
            tier = profile['rank_tier'] // 10
            stars = profile['rank_tier'] % 10
            if 1 <= tier <= 8:
                rank_text = f"{medals[tier - 1]} {stars}"

        # Обработка винрейта
        total_games = wl.get('win', 0) + wl.get('loss', 0)
        winrate = f"{(wl.get('win', 0) / total_games * 100):.1f}%" if total_games > 0 else "0%"

        # Обработка любимого героя
        if heroes:
            top_hero = max(heroes, key=lambda x: x.get('games', 0))
            hero_id = top_hero.get('hero_id')
            hero_data = next((h for h in all_heroes if h['id'] == hero_id), None)
            top_hero_name = hero_data['localized_name'] if hero_data else "Unknown"
        else:
            top_hero_name = "Unknown"

        # Сохраняем в JSON
        stats = {
            "rank": rank_text,
            "winrate": winrate,
            "top_hero": top_hero_name,
            "last_updated": profile.get('last_match_time', 'N/A')
        }

        with open('stats.json', 'w') as f:
            json.dump(stats, f, indent=2)

        print("✅ Статистика успешно обновлена!")
        print(json.dumps(stats, indent=2))

    except Exception as e:
        print(f"❌ Ошибка: {e}")

if __name__ == '__main__':
    get_dota_stats()
