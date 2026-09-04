import os
import json

with open('src/data/discoveryImages.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Strip JS prefix
json_text = text.replace('// 100% Unique Korean Celebrity & Influencer Faces (ZERO DUPLICATES)\nexport const DISCOVERY_IMAGES = ', '').rstrip(';\n')
data = json.loads(json_text)

print(f"Total items in discoveryImages: {len(data)}")

missing = []
for item in data:
    url = item['imageUrl']
    rel = url.lstrip('/')
    full_path = os.path.join('public', rel.replace('/', os.sep))
    if not os.path.exists(full_path) or os.path.getsize(full_path) == 0:
        missing.append((item['id'], item['title'], url))

print(f"Missing or empty images count: {len(missing)}")
for m in missing:
    print(f" - ID: {m[0]}, Title: {m[1]}, URL: {m[2]}")
