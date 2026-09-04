import urllib.request
import json
import urllib.parse
from PIL import Image
import os
import io

star_list = [
    ('장원영', 'Jang Won-young', 'pure_glow', '장원영st 투명 수분광 & 핑크 탕후루', ['광채 피부', '투명한 베이스', '수분 속광', '핑크 립', '시스루 뱅']),
    ('안유진', 'An Yu-jin', 'cheongdam_hair', '안유진st 맑고 건강한 내추럴 레이어드', ['긴 레이어드 헤어', '페이스라인 컷', '자연스러운 피부결', '또렷한 눈매']),
    ('윈터', 'Winter (singer)', 'clean_girl', '윈터st 백옥 도자기 피부 & 숏단발', ['도자기 벨벳 피부', '무결점 베이스', '칼단발', '쿨톤 베이스']),
    ('수지', 'Bae Suzy', 'pure_glow', '수지st 첫사랑 청순 내추럴 페이스', ['청초한 눈망울', '투명한 베이스', '내추럴 립', '광채 피부']),
    ('한소희', 'Han So-hee', 'cateye_chic', '한소희st 고혹적인 캣아이 & 음영 스모키', ['또렷한 눈매', '캣아이 아이라인', '음영 섀도우', '세련된 무드']),
    ('고윤정', 'Go Youn-jung', 'pure_glow', '고윤정st 완벽한 대칭 & 독보적 분위기', ['조화로운 이목구비', '결 브로우', '광채 피부', '누드 립']),
    ('송혜교', 'Song Hye-kyo', 'clean_girl', '송혜교st 우아하고 기품 있는 클래식 룩', ['단아한 분위기', '무결점 베이스', '우아한 네크라인', '세미매트']),
    ('김지원', 'Kim Ji-won', 'seongsu_minimal', '김지원st 세련된 도시미 & 깊은 눈빛', ['세련된 무드', '음영 섀도우', '또렷한 눈매', '자연스러운 웨이브']),
    ('신세경', 'Shin Se-kyung', 'pure_glow', '신세경st 맑고 투명한 유리알 페이스', ['투명한 베이스', '수분 속광', '핑크 립', '자연스러운 눈썹']),
    ('박은빈', 'Park Eun-bin', 'peach_lovely', '박은빈st 맑고 선한 눈망울 & 미소', ['사랑스러운 미소', '강아지상 눈매', '투명한 베이스', '시스루 뱅']),
    ('노정의', 'Roh Jeong-eui', 'pure_glow', '노정의st 정석 인형 비주얼 & 과즙 립', ['광채 피부', '가닥속눈썹', '핑크 립', '페이스라인 컷']),
    ('채수빈', 'Chae Soo-bin', 'peach_lovely', '채수빈st 동글동글 사랑스러운 토끼상', ['동그란 눈매', '피치 치크', '핑크 립', '사랑스러운 미소']),
    ('이세영', 'Lee Se-young', 'hannam_feminine', '이세영st 또렷한 이목구비 & 고전미', ['또렷한 눈매', '우아한 분위기', '광채 피부', '단아한 헤어']),
    ('김세정', 'Kim Se-jeong', 'peach_lovely', '김세정st 생기발랄 비타민 과즙 페이스', ['피치 치크', '사랑스러운 미소', '투명한 베이스', '생기 립']),
    ('사나', 'Sana (singer)', 'peach_lovely', '사나st 애교 가득 시바견 러블리상', ['애교살 글리터', '핑크 립', '피치 치크', '사랑스러운 미소']),
    ('나연', 'Nayeon', 'peach_lovely', '나연st 상큼한 과즙상 & 토끼 앞니 미소', ['과즙 메이크업', '촉촉한 탕후루 립', '피치 치크', '생기 톤업']),
    ('지수', 'Jisoo', 'pure_glow', '지수st 단아함과 화려함의 완벽한 조화', ['조화로운 이목구비', '투명한 베이스', '로즈 립', '긴 생머리']),
    ('제니', 'Jennie (singer)', 'cateye_chic', '제니st 트렌디한 힙 캣아이 & 베이비페이스', ['캣아이 아이라인', '오버 립 메이크업', '도회적 시크', '힙 스트리트']),
    ('아이유', 'IU (singer)', 'peach_lovely', '아이유st 국민 여동생 청초 러블리', ['강아지상 눈매', '시스루 뱅', '피치 치크', '핑크 립']),
    ('카리나', 'Karina (singer)', 'cateye_chic', '카리나st AI 그래픽급 샤프 턱선 & 냉미녀', ['샤프한 턱선', '캣아이 아이라인', '슬릭 헤어', '또렷한 눈매']),
    ('해린', 'Haerin (singer)', 'cateye_chic', '해린st 독보적인 고양이 눈매 캣아이', ['15도 윙드 라인', '삼각존 음영', '또렷한 눈매', '캣아이 아이라인']),
    ('민지', 'Minji (singer)', 'clean_girl', '민지st K-하이틴 올리비아 핫세 청순', ['긴 스트레이트 헤어', '결 브로우', '자연스러운 피부결', '투명한 베이스']),
    ('하니', 'Hanni (singer)', 'peach_lovely', '하니st 통통 튀는 러블리 베이비페이스', ['피치 치크', '애교살 글리터', '사랑스러운 미소', '과즙 립']),
    ('김채원', 'Kim Chae-won', 'tassel_bob', '김채원st 칼각 단발 태슬컷 & 치크', ['태슬 단발', '칼단발', '피치 치크', '또렷한 눈매']),
    ('카즈하', 'Kazuha (singer)', 'clean_girl', '카즈하st 발레리나 우아한 목선 & 클린걸', ['슬릭 로우번', '우아한 네크라인', '자연스러운 피부결', '단아한 분위기']),
    ('유나', 'Shin Yu-na', 'cateye_chic', '유나st 화려한 퀸카 비주얼 & 시원한 눈매', ['또렷한 눈매', '화려한 이목구비', '풍성한 볼륨', '광채 피부']),
    ('예지', 'Hwang Ye-ji', 'cateye_chic', '예지st 무쌍 매력의 정점 독보적 카리스마', ['무쌍 매력', '슬릭 아이라인', '또렷한 눈매', '샤프한 턱선']),
    ('태연', 'Taeyeon', 'balletcore', '태연st 요정 같은 뽀얀 쿨톤 & 백옥 피부', ['쿨톤 베이스', '라벤더 치크', '핑크빔 하이라이터', '투명한 베이스']),
    ('윤아', 'Im Yoon-ah', 'pure_glow', '윤아st 사슴 같은 눈망울 & K-청순의 대명사', ['사슴상 눈망울', '맑은 피부', '투명한 베이스', '우아한 웨이브']),
    ('박규영', 'Park Gyu-young', 'geek_chic', '박규영st 지적인 긱시크 & 숏컷 매력', ['긱시크 무드', '쇼트 레이어드', '내추럴 스킨', '무테 안경']),
    ('문가영', 'Mun Ka-young', 'hannam_feminine', '문가영st 도회적인 화려함 & 페미닌 룩', ['우아한 네크라인', '풍성한 볼륨', '또렷한 눈매', '세련된 무드']),
    ('김소현', 'Kim So-hyun', 'pure_glow', '김소현st 맑고 깊은 눈망울의 청초 페이스', ['청초한 눈망울', '투명한 베이스', '핑크 립', '긴 생머리']),
    ('조보아', 'Jo Bo-ah', 'hannam_feminine', '조보아st 시원시원한 입체 이목구비', ['또렷한 눈매', '사랑스러운 미소', '광채 피부', '풍성한 볼륨']),
    ('권나라', 'Kwon Nara', 'clean_girl', '권나라st 독보적인 비율과 세련된 도회미', ['도회적 시크', '슬릭 헤어', '무결점 베이스', '또렷한 눈매']),
    ('미연', 'Cho Mi-yeon', 'hannam_feminine', '미연st 콧대 여신 & 화려한 정석 미인', ['오뚝한 콧대', '또렷한 눈매', '여성스러운 스타일', '광채 피부']),
    ('신민아', 'Shin Min-a', 'peach_lovely', '신민아st 보조개 미소 & 러블리 베이글', ['보조개 미소', '피치 치크', '광채 피부', '내추럴 립']),
    ('김태리', 'Kim Tae-ri', 'seongsu_minimal', '김태리st 독보적인 아우라 & 짙은 자연미', ['자연스러운 눈썹', '깊은 눈빛', '내추럴 스킨', '단아한 분위기']),
    ('박민영', 'Park Min-young', 'hannam_feminine', '박민영st 오피스 여신 & 페이스라인 컬', ['페이스라인 컷', '에어리 볼륨', '우아한 네크라인', '광채 피부']),
    ('설인아', 'Seol In-ah', 'tassel_bob', '설인아st 칼단발 여신 & 건강한 매력', ['태슬 단발', '칼단발', '자연스러운 피부결', '또렷한 눈매']),
    ('김다미', 'Kim Da-mi', 'geek_chic', '김다미st 개성 넘치는 무쌍 & 유니크 페이스', ['무쌍 매력', '깨끗한 피부', '미니멀 무드', '투명한 베이스'])
]

out_dir = r'C:\Users\asia\.gemini\antigravity\scratch\my-beauty\public\images\korean_stars'
os.makedirs(out_dir, exist_ok=True)
headers = {'User-Agent': 'MyBeautyApp/1.0 (contact@mybeauty.kr)'}

saved_stars = []

for kr_name, en_name, style_group, title, elements in star_list:
    filename = en_name.lower().replace(' ', '_').replace('(', '').replace(')', '').replace('-', '_') + '.jpg'
    filepath = os.path.join(out_dir, filename)
    
    # Check if already exists
    if os.path.exists(filepath):
        saved_stars.append({
            'name': kr_name,
            'en': en_name,
            'file': filename,
            'group': style_group,
            'title': title,
            'elements': elements
        })
        continue
        
    try:
        q = urllib.parse.quote(en_name)
        url = f'https://en.wikipedia.org/w/api.php?action=query&titles={q}&prop=pageimages&format=json&pithumbsize=600'
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=4) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            pages = data.get('query', {}).get('pages', {})
            for pid, page in pages.items():
                thumb = page.get('thumbnail', {}).get('source')
                if thumb:
                    img_req = urllib.request.Request(thumb, headers=headers)
                    img_bytes = urllib.request.urlopen(img_req, timeout=5).read()
                    img = Image.open(io.BytesIO(img_bytes)).convert('RGB')
                    
                    # Tight face crop
                    w, h = img.size
                    face_w = int(w * 0.8)
                    face_h = int(face_w * 1.25)
                    left = (w - face_w) // 2
                    top = int(h * 0.03)
                    right = left + face_w
                    bottom = min(h, top + face_h)
                    
                    face_crop = img.crop((left, top, right, bottom))
                    face_crop.save(filepath, quality=92)
                    saved_stars.append({
                        'name': kr_name,
                        'en': en_name,
                        'file': filename,
                        'group': style_group,
                        'title': title,
                        'elements': elements
                    })
    except Exception as e:
        pass

# Write result metadata json
with open(os.path.join(out_dir, 'metadata.json'), 'w', encoding='utf-8') as f:
    json.dump(saved_stars, f, ensure_ascii=False, indent=2)

print(f'Done! Successfully saved {len(saved_stars)} distinct Korean celebrity portraits!')
