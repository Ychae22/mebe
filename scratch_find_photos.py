import urllib.request
import json
import re

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
}

keywords = [
    'korean model', 'korean beauty', 'korean girl', 'korean fashion',
    'k-beauty', 'kpop style', 'asian portrait woman', 'seoul fashion',
    'korean aesthetic girl', 'korean makeup'
]

ids = set()

for kw in keywords:
    try:
        url = 'https://unsplash.com/napi/search/photos?query=' + urllib.parse.quote(kw) + '&per_page=30'
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=5) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            results = data.get('results', [])
            for r in results:
                raw_url = r.get('urls', {}).get('regular') or r.get('urls', {}).get('small')
                pid = r.get('id')
                if raw_url and pid:
                    ids.add((pid, raw_url))
    except Exception as e:
        print(kw, 'failed:', e)

print(f"Total found: {len(ids)}")
with open('korean_photos.json', 'w', encoding='utf-8') as f:
    json.dump([{'id': x[0], 'url': x[1]} for x in list(ids)], f, ensure_ascii=False, indent=2)
print("Saved to korean_photos.json")
