import json

# Refined Instagram Daily Aesthetic Face Dataset (60+ items)
# Chic Cheongdam Aesthetic Archetypes:
# 1. 소프트 퓨어 (Soft Pure)
# 2. 모던 시크 (Modern Chic)
# 3. 스위트 페미닌 (Sweet Feminine)
# 4. 에포트리스 내추럴 (Effortless Natural)
# 5. 클래식 글램 (Classic Glam)
# 6. 아방가르드 힙 (Avant-Garde Hip)

dataset = [
  # 1. 소프트 퓨어 (Soft Pure) - 10 items
  {
    "id": "face-1",
    "name": "수지",
    "handle": "@skuukzky",
    "style": "소프트 퓨어 (Soft Pure)",
    "title": "수지 데일리 미러 셀카 (이슬빛 투명 베이스)",
    "imageUrl": "/images/korean_stars/bae_suzy.jpg",
    "vibes": {"소프트 퓨어": 99, "에포트리스 내추럴": 90, "스위트 페미닌": 60, "클래식 글램": 40, "모던 시크": 20, "아방가르드 힙": 15},
    "elements": ["투명한 피부결", "자연스러운 눈썹", "수분 베이스", "소프트 핑크 립", "내추럴 생머리"],
    "description": "과한 조명 없이 자연광에서 빛나는 투명한 수분 결감과 정돈된 데일리 메이크업"
  },
  {
    "id": "face-2",
    "name": "신세경",
    "handle": "@sjkuksee",
    "style": "소프트 퓨어 (Soft Pure)",
    "title": "신세경 일상 브이로그 셀피 (유리알 결 텍스처)",
    "imageUrl": "/images/korean_stars/shin_se_kyung.jpg",
    "vibes": {"소프트 퓨어": 98, "에포트리스 내추럴": 88, "스위트 페미닌": 55, "클래식 글램": 45, "모던 시크": 25, "아방가르드 힙": 15},
    "elements": ["유리알 결 텍스처", "투명한 피부결", "차분한 핑크 톤", "결 브로우", "내추럴 헤어"],
    "description": "피부 결점을 가볍게 커버하고 수채화처럼 은은하게 물들인 일상 뷰티 룩"
  },
  {
    "id": "face-3",
    "name": "민지",
    "handle": "@newjeans_minji",
    "style": "소프트 퓨어 (Soft Pure)",
    "title": "민지 인스타 피드 흑발 스트레이트 (단아한 클래식 퓨어)",
    "imageUrl": "/images/korean_stars/minji_singer.jpg",
    "vibes": {"소프트 퓨어": 99, "에포트리스 내추럴": 92, "아방가르드 힙": 50, "스위트 페미닌": 40, "모던 시크": 30, "클래식 글램": 25},
    "elements": ["흑발 슬릭 생머리", "오뚝한 콧날", "결 브로우", "투명한 피부결", "내추럴 립"],
    "description": "또렷한 이목구비 골격과 찰랑이는 흑발 생머리로 완성한 정석 퓨어 실루엣"
  },
  {
    "id": "face-4",
    "name": "윤아",
    "handle": "@yoona__lim",
    "style": "소프트 퓨어 (Soft Pure)",
    "title": "윤아 카페 일상 셀카 (사슴상 소프트 톤)",
    "imageUrl": "/images/korean_stars/yoona.jpg",
    "vibes": {"소프트 퓨어": 99, "스위트 페미닌": 82, "에포트리스 내추럴": 78, "클래식 글램": 50, "모던 시크": 20, "아방가르드 힙": 15},
    "elements": ["사슴상 눈망울", "부드러운 웨이브", "투명한 피부결", "코랄 베이지 립", "단아한 인상"],
    "description": "맑은 눈빛과 부드러운 헤어 텍스처로 완성한 정갈한 에포트리스 무드"
  },
  {
    "id": "face-5",
    "name": "김소현",
    "handle": "@wow_kimsohyun",
    "style": "소프트 퓨어 (Soft Pure)",
    "title": "김소현 자연광 일상 샷 (차분한 청초 무드)",
    "imageUrl": "/images/korean_stars/kim_so_hyun.jpg",
    "vibes": {"소프트 퓨어": 97, "에포트리스 내추럴": 85, "스위트 페미닌": 70, "클래식 글램": 45, "모던 시크": 20, "아방가르드 힙": 15},
    "elements": ["맑은 눈망울", "시스루 뱅", "자연스러운 음영", "소프트 핑크 립", "무결점 스킨"],
    "description": "이마를 살짝 덮는 가벼운 뱅과 촉촉한 혈색 립으로 완성한 청순한 데일리 페이스"
  },
  {
    "id": "face-6",
    "name": "한지민",
    "handle": "@roma.emo",
    "style": "소프트 퓨어 (Soft Pure)",
    "title": "한지민 필름 카메라 감성 (화사한 피치 톤업)",
    "imageUrl": "/images/korean_stars/han_jimin.jpg",
    "vibes": {"소프트 퓨어": 98, "스위트 페미닌": 80, "에포트리스 내추럴": 82, "클래식 글램": 45, "모던 시크": 20, "아방가르드 힙": 15},
    "elements": ["피치 톤업", "맑은 눈빛", "투명한 피부결", "자연스러운 미소", "소프트 코랄"],
    "description": "인위적이지 않은 본연의 맑은 톤을 극대화한 클래식 청순 룩"
  },
  {
    "id": "face-7",
    "name": "이세영",
    "handle": "@seyoung_10",
    "style": "소프트 퓨어 (Soft Pure)",
    "title": "이세영 데일리 메이크업 (정갈한 비율 & 단아함)",
    "imageUrl": "/images/korean_stars/lee_se_young.jpg",
    "vibes": {"소프트 퓨어": 95, "클래식 글램": 80, "에포트리스 내추럴": 80, "모던 시크": 40, "스위트 페미닌": 40, "아방가르드 힙": 20},
    "elements": ["조화로운 이목구비", "단정한 눈썹", "투명한 피부결", "로즈 베이지 립", "실크 헤어"],
    "description": "황금비율 이목구비에 최소한의 결 터치만 더한 단아하고 지적인 룩"
  },
  {
    "id": "face-8",
    "name": "인스타 크리에이터",
    "handle": "@clean_aesthetic",
    "style": "소프트 퓨어 (Soft Pure)",
    "title": "청담 샵 애프터 흑발 생머리 & 시스루 뱅",
    "imageUrl": "/images/straight_hair.jpg",
    "vibes": {"소프트 퓨어": 99, "에포트리스 내추럴": 90, "스위트 페미닌": 60, "모던 시크": 25, "클래식 글램": 30, "아방가르드 힙": 15},
    "elements": ["흑발 슬릭 생머리", "시스루 뱅", "투명한 피부결", "자연스러운 음영", "데일리 베이스"],
    "description": "가장 많은 여성들이 선호하는 깔끔한 흑발 생머리와 가벼운 앞머리 조합"
  },
  {
    "id": "face-9",
    "name": "뷰티 인플루언서",
    "handle": "@pure_studio",
    "style": "소프트 퓨어 (Soft Pure)",
    "title": "화이트 셔츠 & 클린 로우번 데일리",
    "imageUrl": "/images/clean_lowbun.jpg",
    "vibes": {"소프트 퓨어": 94, "에포트리스 내추럴": 95, "모던 시크": 50, "스위트 페미닌": 35, "클래식 글램": 30, "아방가르드 힙": 25},
    "elements": ["슬릭 로우번", "단정한 잔머리", "목선 강조", "세미매트 베이스", "누디 립"],
    "description": "깔끔하게 묶어 올린 로우번과 정돈된 목선으로 세련미를 더한 클린 룩"
  },
  {
    "id": "face-10",
    "name": "채수빈",
    "handle": "@soobinms",
    "style": "소프트 퓨어 (Soft Pure)",
    "title": "채수빈 일상 셀피 (소프트 코랄 데일리)",
    "imageUrl": "/images/korean_stars/chae_soo_bin.jpg",
    "vibes": {"소프트 퓨어": 96, "스위트 페미닌": 85, "에포트리스 내추럴": 75, "모던 시크": 20, "클래식 글램": 30, "아방가르드 힙": 15},
    "elements": ["소프트 코랄 립", "동그란 눈망울", "투명한 피부결", "단정한 웨이브", "자연스러운 미소"],
    "description": "선한 눈매와 따뜻한 코랄 틴트로 자연스럽게 호감을 주는 소프트 퓨어 스타일"
  },

  # 2. 모던 시크 (Modern Chic) - 10 items
  {
    "id": "face-11",
    "name": "해린",
    "handle": "@newjeans_haerin",
    "style": "모던 시크 (Modern Chic)",
    "title": "해린 일상 셀카 (15도 엣지 캣아이 라인)",
    "imageUrl": "/images/cateye_chic.jpg",
    "vibes": {"모던 시크": 99, "아방가르드 힙": 94, "클래식 글램": 55, "에포트리스 내추럴": 35, "소프트 퓨어": 20, "스위트 페미닌": 20},
    "elements": ["15도 캣아이 라인", "샤프한 턱선", "뮤트 브라운 음영", "슬릭 헤어", "도회적 아우라"],
    "description": "눈꼬리를 감각적으로 끌어올려 신비롭고 세련된 고양이상 무드를 완성한 아이 메이크업"
  },
  {
    "id": "face-12",
    "name": "한소희",
    "handle": "@xeesoxee",
    "style": "모던 시크 (Modern Chic)",
    "title": "한소희 인스타 거울 셀카 (뮤트 스모키 & 턱선)",
    "imageUrl": "/images/korean_stars/han_so_hee.jpg",
    "vibes": {"모던 시크": 99, "아방가르드 힙": 92, "클래식 글램": 70, "에포트리스 내추럴": 40, "소프트 퓨어": 25, "스위트 페미닌": 15},
    "elements": ["뮤트 브라운 음영", "샤프한 턱선", "또렷한 눈매", "퇴폐미 실루엣", "누디 모브 립"],
    "description": "그윽한 음영과 날렵한 하악각 라인이 돋보이는 독보적인 하이엔드 모던 시크"
  },
  {
    "id": "face-13",
    "name": "카리나",
    "handle": "@katarinabluu",
    "style": "모던 시크 (Modern Chic)",
    "title": "카리나 연습실 일상 샷 (샤프 V라인 & 캣아이)",
    "imageUrl": "/images/korean_stars/karina.jpg",
    "vibes": {"모던 시크": 99, "클래식 글램": 88, "아방가르드 힙": 90, "에포트리스 내추럴": 30, "소프트 퓨어": 25, "스위트 페미닌": 20},
    "elements": ["샤프한 턱선", "15도 캣아이 라인", "완벽한 비율", "슬릭 헤어", "입체 컨투어링"],
    "description": "컴퓨터 그래픽처럼 군더더기 없는 페이스라인과 날렵한 눈매 밸런스"
  },
  {
    "id": "face-14",
    "name": "제니",
    "handle": "@jennierubyjane",
    "style": "모던 시크 (Modern Chic)",
    "title": "제니 데일리 OOTD (힙 캣아이 & 오버립)",
    "imageUrl": "/images/korean_stars/jennie_singer.jpg",
    "vibes": {"모던 시크": 98, "아방가르드 힙": 99, "클래식 글램": 65, "스위트 페미닌": 40, "에포트리스 내추럴": 35, "소프트 퓨어": 20},
    "elements": ["트임 메이크업", "오버 립 메이크업", "캣아이 아이라인", "입체 컨투어링", "트렌디 실루엣"],
    "description": "눈 가로 길이를 극대화하는 트임 메이크업과 자연스러운 오버립으로 트렌드를 선도"
  },
  {
    "id": "face-15",
    "name": "예지",
    "handle": "@yeji_itzy",
    "style": "모던 시크 (Modern Chic)",
    "title": "예지 일상 셀피 (무쌍 카리스마 라인)",
    "imageUrl": "/images/korean_stars/yeji_itzy.jpg",
    "vibes": {"모던 시크": 98, "아방가르드 힙": 96, "클래식 글램": 50, "에포트리스 내추럴": 40, "소프트 퓨어": 15, "스위트 페미닌": 15},
    "elements": ["무쌍 슬릭 아이라인", "샤프한 턱선", "또렷한 눈매", "시크 음영", "슬릭 포니테일"],
    "description": "쌍꺼풀 없이도 눈매가 시원하고 정교하게 트여 보이는 완벽한 젤 라이너 스킬"
  },
  {
    "id": "face-16",
    "name": "유나",
    "handle": "@yuna_itzy",
    "style": "모던 시크 (Modern Chic)",
    "title": "유나 인스타 스토리 셀카 (시원한 빅아이즈 & 샤프 턱선)",
    "imageUrl": "/images/korean_stars/yuna_itzy.jpg",
    "vibes": {"모던 시크": 95, "클래식 글램": 92, "아방가르드 힙": 88, "스위트 페미닌": 45, "소프트 퓨어": 30, "에포트리스 내추럴": 30},
    "elements": ["화려한 이목구비", "시원한 가로 눈매", "샤프한 턱선", "글레이즈 립", "입체 볼륨"],
    "description": "이목구비가 꽉 차 보이는 시원한 가로 확장 라인과 날렵한 턱선 실루엣"
  },
  {
    "id": "face-17",
    "name": "이성경",
    "handle": "@heybiblee",
    "style": "모던 시크 (Modern Chic)",
    "title": "이성경 파리 일상 샷 (라이트 브라운 음영 & 캣아이)",
    "imageUrl": "/images/korean_stars/lee_sungkyung.jpg",
    "vibes": {"모던 시크": 94, "아방가르드 힙": 86, "클래식 글램": 75, "에포트리스 내추럴": 60, "소프트 퓨어": 35, "스위트 페미닌": 35},
    "elements": ["살구 브라운 음영", "또렷한 눈매", "슬릭 헤어", "도회적 아우라", "세미매트 베이스"],
    "description": "오묘한 밝은 눈동자를 부각시키는 톤온톤 음영과 감각적인 스타일링"
  },
  {
    "id": "face-18",
    "name": "권나라",
    "handle": "@hv_nara",
    "style": "모던 시크 (Modern Chic)",
    "title": "권나라 촬영 대기실 셀피 (도시적 세련미 & 윤곽)",
    "imageUrl": "/images/korean_stars/kwon_nara.jpg",
    "vibes": {"모던 시크": 96, "클래식 글램": 85, "아방가르드 힙": 60, "에포트리스 내추럴": 50, "소프트 퓨어": 35, "스위트 페미닌": 25},
    "elements": ["입체 컨투어링", "샤프한 턱선", "세미매트 베이스", "누디 베이지 립", "슬릭 스트레이트"],
    "description": "작은 얼굴과 긴 목선을 더욱 강조하는 도회적이고 정갈한 컨투어 메이크업"
  },
  {
    "id": "face-19",
    "name": "스타일 디렉터",
    "handle": "@urban_minimal",
    "style": "모던 시크 (Modern Chic)",
    "title": "블랙 터틀넥 & 샤프 캣아이 데일리 컷",
    "imageUrl": "/images/korean_influencer_cateye_chic_1788406918395.jpg",
    "vibes": {"모던 시크": 97, "아방가르드 힙": 90, "에포트리스 내추럴": 50, "클래식 글램": 55, "소프트 퓨어": 20, "스위트 페미닌": 20},
    "elements": ["15도 캣아이 라인", "블랙 미니멀", "샤프한 턱선", "뮤트 브라운 음영", "세련된 무드"],
    "description": "군더더기 없는 올블랙 착장과 시크한 눈꼬리 상승 라인의 완벽한 하모니"
  },
  {
    "id": "face-20",
    "name": "패션 모델",
    "handle": "@seoul_chic",
    "style": "모던 시크 (Modern Chic)",
    "title": "성수동 쇼룸 슬릭 헤어 & 엣지 아이",
    "imageUrl": "/images/korean_influencer_layered_hair_1788406898391.jpg",
    "vibes": {"모던 시크": 95, "아방가르드 힙": 88, "에포트리스 내추럴": 60, "클래식 글램": 60, "소프트 퓨어": 25, "스위트 페미닌": 20},
    "elements": ["슬릭 레이어드 컷", "음영 아이라인", "세미매트 베이스", "도회적 아우라", "페이스라인 컷"],
    "description": "가볍게 층을 낸 레이어드 헤어로 얼굴선을 깎아지른 듯 슬림하게 연출"
  },

  # 3. 스위트 페미닌 (Sweet Feminine) - 10 items
  {
    "id": "face-21",
    "name": "아이유",
    "handle": "@dlwlrma",
    "style": "스위트 페미닌 (Sweet Feminine)",
    "title": "아이유 인스타 일상 셀피 (소프트 피치 블러셔)",
    "imageUrl": "/images/korean_stars/iu.jpg",
    "vibes": {"스위트 페미닌": 99, "소프트 퓨어": 85, "에포트리스 내추럴": 75, "클래식 글램": 40, "모던 시크": 15, "아방가르드 힙": 20},
    "elements": ["소프트 피치 블러셔", "시스루 뱅", "자연스러운 눈매", "촉촉한 틴트", "포근한 미소"],
    "description": "양 볼에 스며들 듯 번지는 피치 치크와 가벼운 앞머리로 사랑스러움을 극대화"
  },
  {
    "id": "face-22",
    "name": "나연",
    "handle": "@nayeonyny",
    "style": "스위트 페미닌 (Sweet Feminine)",
    "title": "나연 카페 데일리 셀카 (과즙 피치 치크 & 핑크 립)",
    "imageUrl": "/images/korean_stars/nayeon.jpg",
    "vibes": {"스위트 페미닌": 99, "소프트 퓨어": 65, "에포트리스 내추럴": 55, "클래식 글램": 50, "아방가르드 힙": 35, "모던 시크": 15},
    "elements": ["생기 피치 블러셔", "촉촉한 핑크 립", "입체 애교살", "과즙 생기", "사랑스러운 미소"],
    "description": "선명한 생기를 머금은 맑은 블러셔와 입술로 시선을 사로잡는 스위트 룩"
  },
  {
    "id": "face-23",
    "name": "사나",
    "handle": "@m.by__sana",
    "style": "스위트 페미닌 (Sweet Feminine)",
    "title": "사나 일상 인스타 피드 (수채화 핑크 치크 & 글리터)",
    "imageUrl": "/images/korean_stars/sana_singer.jpg",
    "vibes": {"스위트 페미닌": 99, "클래식 글램": 75, "소프트 퓨어": 65, "에포트리스 내추럴": 50, "모던 시크": 25, "아방가르드 힙": 25},
    "elements": ["수채화 핑크 치크", "애교살 글리터", "촉촉한 립", "부드러운 웨이브", "입체 페이스"],
    "description": "빛을 받을 때마다 은은하게 반짝이는 애교살과 딸기우유빛 치크의 정석"
  },
  {
    "id": "face-24",
    "name": "하니",
    "handle": "@newjeans_hanni",
    "style": "스위트 페미닌 (Sweet Feminine)",
    "title": "하니 숙소 셀카 (소프트 오버립 & 베이비 피치)",
    "imageUrl": "/images/korean_stars/hanni_singer.jpg",
    "vibes": {"스위트 페미닌": 98, "아방가르드 힙": 65, "소프트 퓨어": 65, "에포트리스 내추럴": 60, "클래식 글램": 40, "모던 시크": 20},
    "elements": ["자연스러운 오버립", "베이비 피치 치크", "입체 애교살", "소프트 베이지", "발랄한 미소"],
    "description": "도톰하게 연출한 립 라인과 은은한 베이비 피치 컬러가 주는 트렌디한 사랑스러움"
  },
  {
    "id": "face-25",
    "name": "박은빈",
    "handle": "@eunbining0904",
    "style": "스위트 페미닌 (Sweet Feminine)",
    "title": "박은빈 드라마 쫑파티 셀피 (맑은 코랄 핑크 톤)",
    "imageUrl": "/images/korean_stars/park_eun_bin.jpg",
    "vibes": {"스위트 페미닌": 96, "소프트 퓨어": 85, "에포트리스 내추럴": 80, "클래식 글램": 45, "모던 시크": 15, "아방가르드 힙": 10},
    "elements": ["선한 눈매", "투명한 피부결", "핑크 코랄 립", "소프트 뱅", "단아한 미소"],
    "description": "과한 메이크업 없이 맑은 인상과 코랄빛 혈색으로 완성한 호감형 페이스"
  },
  {
    "id": "face-26",
    "name": "김세정",
    "handle": "@clean_0828",
    "style": "스위트 페미닌 (Sweet Feminine)",
    "title": "김세정 피크닉 일상 샷 (싱그러운 웜톤 코랄)",
    "imageUrl": "/images/korean_stars/kim_se_jeong.jpg",
    "vibes": {"스위트 페미닌": 96, "에포트리스 내추럴": 80, "소프트 퓨어": 70, "클래식 글램": 45, "아방가르드 힙": 25, "모던 시크": 20},
    "elements": ["비타민 코랄 립", "피치 치크", "자연스러운 미소", "풍성한 헤어", "건강한 피부결"],
    "description": "햇살 아래서 건강하게 빛나는 피치 코랄 톤의 에너지 넘치는 스위트 룩"
  },
  {
    "id": "face-27",
    "name": "신민아",
    "handle": "@illusomina",
    "style": "스위트 페미닌 (Sweet Feminine)",
    "title": "신민아 일상 컷 (보조개 미소 & 내추럴 살구 립)",
    "imageUrl": "/images/korean_stars/shin_mina.jpg",
    "vibes": {"스위트 페미닌": 96, "에포트리스 내추럴": 85, "소프트 퓨어": 65, "클래식 글램": 55, "모던 시크": 35, "아방가르드 힙": 25},
    "elements": ["보조개 미소", "살구 피치 치크", "촉촉한 MLBB", "자연스러운 웨이브", "투명한 피부결"],
    "description": "보조개와 어우러지는 촉촉한 살구 MLBB 컬러로 고급스러운 사랑스러움을 연출"
  },
  {
    "id": "face-28",
    "name": "뷰티 에디터",
    "handle": "@peach_glow",
    "style": "스위트 페미닌 (Sweet Feminine)",
    "title": "스프링 피치 치크 & 핑크 틴트 일상 룩",
    "imageUrl": "/images/korean_influencer_peach_lovely_1788406965937.jpg",
    "vibes": {"스위트 페미닌": 99, "소프트 퓨어": 65, "에포트리스 내추럴": 60, "클래식 글램": 45, "모던 시크": 15, "아방가르드 힙": 15},
    "elements": ["수채화 피치 블러셔", "촉촉한 핑크 립", "입체 애교살", "투명한 피부결", "러블리 뱅"],
    "description": "봄날의 복숭아처럼 맑고 포근한 수채화 발색으로 완성한 1:1 러블리 처방"
  },
  {
    "id": "face-29",
    "name": "패션 인플루언서",
    "handle": "@sweet_ballet",
    "style": "스위트 페미닌 (Sweet Feminine)",
    "title": "발레코어 리본 헤어 & 페일 핑크 치크",
    "imageUrl": "/images/korean_influencer_balletcore_1788407222063.jpg",
    "vibes": {"스위트 페미닌": 97, "아방가르드 힙": 70, "소프트 퓨어": 70, "클래식 글램": 50, "모던 시크": 20, "에포트리스 내추럴": 45},
    "elements": ["리본 헤어 스타일링", "페일 핑크 치크", "촉촉한 유리알 립", "입체 애교살", "소프트 실루엣"],
    "description": "섬세한 리본 디테일과 뽀얀 핑크빛 색조로 연출한 현대적인 발레코어 룩"
  },
  {
    "id": "face-30",
    "name": "노정의",
    "handle": "@jeongeuiyam",
    "style": "스위트 페미닌 (Sweet Feminine)",
    "title": "노정의 인형 비주얼 셀카 (로즈 핑크 립)",
    "imageUrl": "/images/korean_stars/roh_jeong_eui.jpg",
    "vibes": {"스위트 페미닌": 96, "클래식 글램": 85, "소프트 퓨어": 75, "모던 시크": 55, "아방가르드 힙": 45, "에포트리스 내추럴": 40},
    "elements": ["가닥 속눈썹", "로즈 핑크 립", "투명한 피부결", "페이스라인 컷", "인형 같은 눈매"],
    "description": "한 올 한 올 살린 가닥 속눈썹과 꽃잎을 머금은 듯한 로즈 립의 조화"
  },

  # 4. 에포트리스 내추럴 (Effortless Natural) - 10 items
  {
    "id": "face-31",
    "name": "고윤정",
    "handle": "@goyounjung",
    "style": "에포트리스 내추럴 (Effortless Natural)",
    "title": "고윤정 인스타 셀카 (실크 벨벳 베이스 & 대칭미)",
    "imageUrl": "/images/korean_stars/go_youn_jung.jpg",
    "vibes": {"에포트리스 내추럴": 97, "모던 시크": 85, "소프트 퓨어": 70, "클래식 글램": 65, "스위트 페미닌": 40, "아방가르드 힙": 35},
    "elements": ["실크 벨벳 피부결", "결 브로우", "완벽한 비율", "자연스러운 음영", "누드 베이지 립"],
    "description": "모공 없이 매끄럽게 정돈된 실크 스킨과 손대지 않은 듯 본연의 결을 살린 브로우"
  },
  {
    "id": "face-32",
    "name": "김지원",
    "handle": "@geewonii",
    "style": "에포트리스 내추럴 (Effortless Natural)",
    "title": "김지원 해외 출장 일상 샷 (깐달걀 세미매트)",
    "imageUrl": "/images/korean_stars/kim_ji_won.jpg",
    "vibes": {"에포트리스 내추럴": 95, "모던 시크": 90, "소프트 퓨어": 65, "클래식 글램": 60, "스위트 페미닌": 45, "아방가르드 힙": 35},
    "elements": ["깐달걀 세미매트", "또렷한 눈매", "자연스러운 음영", "슬릭 스트레이트", "고급스러운 인상"],
    "description": "번들거림 없이 은은한 빛을 머금은 세미매트 피니시로 지적인 분위기를 극대화"
  },
  {
    "id": "face-33",
    "name": "김고은",
    "handle": "@ggonekim",
    "style": "에포트리스 내추럴 (Effortless Natural)",
    "title": "김고은 성수동 카페 일상 (담백한 무쌍 내추럴)",
    "imageUrl": "/images/korean_stars/kim_goeun.jpg",
    "vibes": {"에포트리스 내추럴": 99, "소프트 퓨어": 75, "모던 시크": 60, "아방가르드 힙": 50, "스위트 페미닌": 45, "클래식 글램": 35},
    "elements": ["무쌍 매력", "투명한 피부결", "최소한의 색조", "자연스러운 핏", "내추럴 립"],
    "description": "두꺼운 베이스 없이 피부 본연의 투명함과 맑은 미소로 완성한 에포트리스 무드"
  },
  {
    "id": "face-34",
    "name": "김태리",
    "handle": "@kimtaeri_official",
    "style": "에포트리스 내추럴 (Effortless Natural)",
    "title": "김태리 브이로그 일상 컷 (짙은 고전미 & 골격)",
    "imageUrl": "/images/korean_stars/kim_tae_ri.jpg",
    "vibes": {"에포트리스 내추럴": 98, "모던 시크": 88, "소프트 퓨어": 60, "클래식 글램": 55, "아방가르드 힙": 45, "스위트 페미닌": 30},
    "elements": ["짙은 결 브로우", "깊은 눈빛", "단아한 골격", "세미매트 베이스", "클래식 아우라"],
    "description": "선천적인 골격미와 짙은 눈썹의 결을 살려 인위적이지 않은 독보적 고전미 발산"
  },
  {
    "id": "face-35",
    "name": "송혜교",
    "handle": "@kyo1122",
    "style": "에포트리스 내추럴 (Effortless Natural)",
    "title": "송혜교 파리 여행 일상 (기품 있는 새틴 스킨)",
    "imageUrl": "/images/korean_stars/song_hye_kyo.jpg",
    "vibes": {"에포트리스 내추럴": 94, "클래식 글램": 90, "모던 시크": 82, "소프트 퓨어": 65, "스위트 페미닌": 35, "아방가르드 힙": 20},
    "elements": ["새틴 피니시", "단아한 분위기", "무결점 스킨", "우아한 네크라인", "차분한 톤온톤"],
    "description": "은은하고 고급스러운 윤기와 정갈한 스타일링으로 완성한 하이엔드 럭셔리"
  },
  {
    "id": "face-36",
    "name": "성수동 크리에이터",
    "handle": "@seongsu_mood",
    "style": "에포트리스 내추럴 (Effortless Natural)",
    "title": "성수동 프렌치 미니멀 데일리 룩",
    "imageUrl": "/images/french_minimal.jpg",
    "vibes": {"에포트리스 내추럴": 98, "모던 시크": 86, "아방가르드 힙": 65, "소프트 퓨어": 50, "클래식 글램": 45, "스위트 페미닌": 30},
    "elements": ["뉴트럴 톤온톤", "자연스러운 웨이브", "미니멀 메이크업", "투명한 피부결", "담백한 핏"],
    "description": "신경 쓰지 않은 듯 완벽한 핏과 담백한 톤온톤 메이크업의 프렌치 시크"
  },
  {
    "id": "face-37",
    "name": "박규영",
    "handle": "@lavieenbluu",
    "style": "에포트리스 내추럴 (Effortless Natural)",
    "title": "박규영 발레 연습실 셀카 (지적 숏컷 & 클린 스킨)",
    "imageUrl": "/images/korean_stars/park_gyu_young.jpg",
    "vibes": {"에포트리스 내추럴": 93, "모던 시크": 91, "아방가르드 힙": 85, "소프트 퓨어": 50, "클래식 글램": 40, "스위트 페미닌": 30},
    "elements": ["쇼트 레이어드 컷", "목선 강조", "클린 스킨", "자연스러운 눈매", "미니멀 실루엣"],
    "description": "얼굴 골격을 시원하게 드러내는 쇼트 컷과 깨끗한 피부결로 지적인 무드 연출"
  },
  {
    "id": "face-38",
    "name": "김다미",
    "handle": "@d_a___m_i",
    "style": "에포트리스 내추럴 (Effortless Natural)",
    "title": "김다미 일상 셀피 (유니크 무쌍 음영)",
    "imageUrl": "/images/korean_stars/kim_da_mi.jpg",
    "vibes": {"에포트리스 내추럴": 96, "아방가르드 힙": 82, "모던 시크": 75, "소프트 퓨어": 60, "스위트 페미닌": 45, "클래식 글램": 35},
    "elements": ["무쌍 매력", "투명한 피부결", "자연스러운 브로우", "내추럴 립", "소프트 톤"],
    "description": "쌍꺼풀 없이도 눈매 본연의 맑음을 살려 편안하면서도 매력적인 인상 완성"
  },
  {
    "id": "face-39",
    "name": "카즈하",
    "handle": "@k_a_z_u_h_a__",
    "style": "에포트리스 내추럴 (Effortless Natural)",
    "title": "카즈하 발레리나 일상 샷 (클린 슬릭 넥라인)",
    "imageUrl": "/images/korean_stars/kazuha_singer.jpg",
    "vibes": {"에포트리스 내추럴": 95, "아방가르드 힙": 88, "모던 시크": 85, "소프트 퓨어": 65, "클래식 글램": 55, "스위트 페미닌": 40},
    "elements": ["슬릭 로우번", "긴 목선", "단정한 잔머리", "자연스러운 피부결", "세미매트 베이스"],
    "description": "가르마를 단정하게 넘겨 긴 목선과 얼굴형을 돋보이게 하는 발레리나 슬릭"
  },
  {
    "id": "face-40",
    "name": "스튜디오 모델",
    "handle": "@archive_studio",
    "style": "에포트리스 내추럴 (Effortless Natural)",
    "title": "흑백 자연광 무드 포트레이트",
    "imageUrl": "/images/korean_influencer_french_minimal_1788406942705.jpg",
    "vibes": {"에포트리스 내추럴": 96, "모던 시크": 88, "소프트 퓨어": 60, "클래식 글램": 45, "아방가르드 힙": 40, "스위트 페미닌": 25},
    "elements": ["자연광 음영", "담백한 헤어", "미니멀 코디", "투명한 피부결", "차분한 시선"],
    "description": "인위적 보정을 덜어내고 빛과 그림자만으로 본연의 분위기를 살린 포트레이트"
  },

  # 5. 클래식 글램 (Classic Glam) - 10 items
  {
    "id": "face-41",
    "name": "장원영",
    "handle": "@for_everyoung10",
    "style": "클래식 글램 (Classic Glam)",
    "title": "장원영 대기실 거울 셀카 (글레이즈 핑크 립 & 여신 헤어)",
    "imageUrl": "/images/korean_stars/jang_won_young.jpg",
    "vibes": {"클래식 글램": 99, "스위트 페미닌": 92, "소프트 퓨어": 70, "모던 시크": 55, "아방가르드 힙": 45, "에포트리스 내추럴": 35},
    "elements": ["도톰한 글레이즈 립", "페이스라인 사이드뱅", "투명한 피부결", "입체 하이라이팅", "여신 웨이브"],
    "description": "도톰한 볼륨 립과 얼굴을 작아 보이게 하는 페이스라인 사이드뱅으로 완성한 비주얼"
  },
  {
    "id": "face-42",
    "name": "안유진",
    "handle": "@_yujin_an",
    "style": "클래식 글램 (Classic Glam)",
    "title": "안유진 청담 살롱 레이어드 헤어 일상 컷",
    "imageUrl": "/images/korean_stars/an_yu_jin.jpg",
    "vibes": {"클래식 글램": 94, "에포트리스 내추럴": 86, "모던 시크": 80, "소프트 퓨어": 75, "스위트 페미닌": 60, "아방가르드 힙": 55},
    "elements": ["롱 레이어드 컷", "사이드뱅", "턱선 커버", "또렷한 눈매", "자연스러운 볼륨"],
    "description": "광대와 턱선을 부드럽게 감싸 얼굴형을 갸름하게 연출하는 청담 시그니처 컷"
  },
  {
    "id": "face-43",
    "name": "미연",
    "handle": "@noodle.zip",
    "style": "클래식 글램 (Classic Glam)",
    "title": "미연 인스타 셀피 (오뚝한 콧대 & 사이드뱅)",
    "imageUrl": "/images/korean_stars/miyeon.jpg",
    "vibes": {"클래식 글램": 98, "소프트 퓨어": 72, "모던 시크": 70, "스위트 페미닌": 60, "에포트리스 내추럴": 50, "아방가르드 힙": 35},
    "elements": ["오뚝한 콧대", "사이드뱅", "또렷한 눈매", "클래식 웨이브", "화사한 메이크업"],
    "description": "높은 콧대와 옆라인을 드라마틱하게 살려주는 우아한 사이드뱅 헤어"
  },
  {
    "id": "face-44",
    "name": "지수",
    "handle": "@sooyaaa__",
    "style": "클래식 글램 (Classic Glam)",
    "title": "지수 파리 호텔 일상 (단아한 정통 미인 아이)",
    "imageUrl": "/images/korean_stars/jisoo.jpg",
    "vibes": {"클래식 글램": 94, "소프트 퓨어": 85, "모던 시크": 65, "스위트 페미닌": 60, "에포트리스 내추럴": 65, "아방가르드 힙": 35},
    "elements": ["또렷한 눈매", "가닥 속눈썹", "조화로운 이목구비", "로즈 립", "차분한 웨이브"],
    "description": "클래식한 한국형 미인의 균형 잡힌 눈매와 기품 있는 미소"
  },
  {
    "id": "face-45",
    "name": "문가영",
    "handle": "@m_kayoung",
    "style": "클래식 글램 (Classic Glam)",
    "title": "문가영 밀라노 일상 (풍성한 그레이스 웨이브)",
    "imageUrl": "/images/korean_stars/mun_kayoung.jpg",
    "vibes": {"클래식 글램": 99, "모던 시크": 90, "에포트리스 내추럴": 55, "소프트 퓨어": 45, "스위트 페미닌": 40, "아방가르드 힙": 40},
    "elements": ["그레이스 S컬 웨이브", "풍성한 볼륨", "우아한 네크라인", "또렷한 눈매", "세련된 무드"],
    "description": "굵직하게 흘러내리는 풍성한 웨이브 펌으로 글래머러스한 아우라 연출"
  },
  {
    "id": "face-46",
    "name": "박민영",
    "handle": "@rachel_mypark",
    "style": "클래식 글램 (Classic Glam)",
    "title": "박민영 오피스 여신 페이스라인 에어리 C컬",
    "imageUrl": "/images/korean_stars/park_min_young.jpg",
    "vibes": {"클래식 글램": 97, "모던 시크": 80, "소프트 퓨어": 65, "에포트리스 내추럴": 60, "스위트 페미닌": 55, "아방가르드 힙": 25},
    "elements": ["페이스라인 C컬", "뿌리 볼륨", "우아한 네크라인", "투명한 피부결", "정돈된 메이크업"],
    "description": "뿌리 볼륨부터 사이드뱅으로 자연스럽게 이어지는 완벽한 오피스 여신 스타일"
  },
  {
    "id": "face-47",
    "name": "조보아",
    "handle": "@xxadoraa",
    "style": "클래식 글램 (Classic Glam)",
    "title": "조보아 일상 셀카 (입체 이목구비 하트 페이스)",
    "imageUrl": "/images/korean_stars/jo_bo_ah.jpg",
    "vibes": {"클래식 글램": 92, "스위트 페미닌": 80, "모던 시크": 75, "소프트 퓨어": 60, "에포트리스 내추럴": 55, "아방가르드 힙": 45},
    "elements": ["시원한 눈매", "가닥 속눈썹", "입체 하트 페이스", "화사한 립", "소프트 웨이브"],
    "description": "눈꼬리와 눈앞머리가 시원하게 트여 얼굴이 화사하고 또렷해 보이는 입체 룩"
  },
  {
    "id": "face-48",
    "name": "한남동 인플루언서",
    "handle": "@hannam_lounge",
    "style": "클래식 글램 (Classic Glam)",
    "title": "보트넥 니트 & 골드 이어링 페미닌 페이스",
    "imageUrl": "/images/korean_influencer_feminine_knit_1788406991059.jpg",
    "vibes": {"클래식 글램": 96, "소프트 퓨어": 75, "에포트리스 내추럴": 65, "모던 시크": 55, "스위트 페미닌": 50, "아방가르드 힙": 25},
    "elements": ["보트넥 실루엣", "골드 이어링", "우아한 네크라인", "투명한 피부결", "소프트 웨이브"],
    "description": "가녀린 쇄골선과 정돈된 웨이브로 우아함과 페미닌한 분위기를 완성"
  },
  {
    "id": "face-49",
    "name": "프로필 디렉터",
    "handle": "@cheongdam_atelier",
    "style": "클래식 글램 (Classic Glam)",
    "title": "실크 블라우스 & 펄 이어링 인생 프로필",
    "imageUrl": "/images/profile_studio.jpg",
    "vibes": {"클래식 글램": 98, "소프트 퓨어": 75, "모던 시크": 70, "에포트리스 내추럴": 65, "스위트 페미닌": 50, "아방가르드 힙": 35},
    "elements": ["투명한 피부결", "풀 메이크업 완성도", "소프트 웨이브", "실크 블라우스", "진주 이어링"],
    "description": "나만의 골격과 장점이 완벽하게 집약된 시그니처 프라이빗 인생 프로필"
  },
  {
    "id": "face-50",
    "name": "뷰티 모델",
    "handle": "@glam_seoul",
    "style": "클래식 글램 (Classic Glam)",
    "title": "청담 샵 풀메이크업 애프터 거울 셀카",
    "imageUrl": "/images/korean_influencer_wonyoung_vibe_1788406879411.jpg",
    "vibes": {"클래식 글램": 97, "스위트 페미닌": 90, "소프트 퓨어": 70, "모던 시크": 60, "아방가르드 힙": 40, "에포트리스 내추럴": 40},
    "elements": ["도톰한 글레이즈 립", "가닥 속눈썹", "페이스라인 컷", "투명한 피부결", "화사한 볼륨"],
    "description": "입술과 눈매의 화려한 디테일을 균형 있게 살린 청담 살롱 메이크업"
  },

  # 6. 아방가르드 힙 (Avant-Garde Hip) - 10 items
  {
    "id": "face-51",
    "name": "윈터",
    "handle": "@imwinter",
    "style": "아방가르드 힙 (Avant-Garde Hip)",
    "title": "윈터 인스타 거울 셀카 (백옥 쿨톤 & 태슬 단발)",
    "imageUrl": "/images/korean_stars/winter_singer.jpg",
    "vibes": {"아방가르드 힙": 96, "모던 시크": 92, "소프트 퓨어": 50, "스위트 페미닌": 45, "에포트리스 내추럴": 40, "클래식 글램": 35},
    "elements": ["쿨톤 백옥 베이스", "슬릭 태슬 단발", "또렷한 눈매", "투명한 피부결", "칼단발 컷"],
    "description": "노란기를 배제한 맑은 쿨톤 베이스와 칼각 슬릭 태슬 단발로 트렌드 선도"
  },
  {
    "id": "face-52",
    "name": "김채원",
    "handle": "@_chaechae_1",
    "style": "아방가르드 힙 (Avant-Garde Hip)",
    "title": "김채원 데일리 셀피 (칼각 슬릭 태슬컷 & 치크)",
    "imageUrl": "/images/korean_stars/chaewon.jpg",
    "vibes": {"아방가르드 힙": 97, "모던 시크": 88, "스위트 페미닌": 60, "에포트리스 내추럴": 50, "소프트 퓨어": 35, "클래식 글램": 40},
    "elements": ["슬릭 태슬 단발", "칼단발", "생기 치크", "또렷한 눈매", "힙 실루엣"],
    "description": "목선이 길어 보이고 이목구비에 시선이 집중되는 트렌디한 슬릭 단발"
  },
  {
    "id": "face-53",
    "name": "설인아",
    "handle": "@_seorina",
    "style": "아방가르드 힙 (Avant-Garde Hip)",
    "title": "설인아 드라이브 일상 (턱선 칼단발 & 내추럴 볼륨)",
    "imageUrl": "/images/korean_stars/seol_inah.jpg",
    "vibes": {"아방가르드 힙": 92, "모던 시크": 88, "에포트리스 내추럴": 80, "소프트 퓨어": 45, "스위트 페미닌": 45, "클래식 글램": 45},
    "elements": ["턱선 칼단발", "자연스러운 볼륨", "또렷한 눈매", "건강한 피부결", "세련된 무드"],
    "description": "차도녀 느낌과 건강미가 공존하는 단발 스타일링의 절대적인 워너비"
  },
  {
    "id": "face-54",
    "name": "태연",
    "handle": "@taeyeon_ss",
    "style": "아방가르드 힙 (Avant-Garde Hip)",
    "title": "태연 일상 셀카 (페일 라벤더 & 핑크빔 하이라이팅)",
    "imageUrl": "/images/korean_stars/taeyeon.jpg",
    "vibes": {"아방가르드 힙": 92, "스위트 페미닌": 85, "소프트 퓨어": 75, "모던 시크": 60, "클래식 글램": 65, "에포트리스 내추럴": 40},
    "elements": ["라벤더 치크", "핑크빔 하이라이터", "쿨톤 스킨", "투명한 피부결", "요정 무드"],
    "description": "연보라 치크와 핑크빔 하이라이터로 신비롭고 개성 있는 쿨톤 룩 연출"
  },
  {
    "id": "face-55",
    "name": "스트리트 모델",
    "handle": "@geek_chic_kr",
    "style": "아방가르드 힙 (Avant-Garde Hip)",
    "title": "무테 안경 & 긱시크 데일리 메이크업",
    "imageUrl": "/images/korean_influencer_geek_chic_1788407919146.jpg",
    "vibes": {"아방가르드 힙": 98, "모던 시크": 90, "에포트리스 내추럴": 65, "소프트 퓨어": 40, "스위트 페미닌": 30, "클래식 글램": 35},
    "elements": ["긱시크 무테 안경", "쇼트 레이어드", "세미매트 베이스", "누디 모브 립", "지적 카리스마"],
    "description": "무테 안경과 정돈된 눈썹, 단정한 숏컷으로 연출한 감각적인 긱시크 무드"
  },
  {
    "id": "face-56",
    "name": "헤어 디자이너",
    "handle": "@jelly_hair",
    "style": "아방가르드 힙 (Avant-Garde Hip)",
    "title": "성수동 에어리 젤리 히피펌 & 잔머리 텍스처",
    "imageUrl": "/images/hippie_curl.jpg",
    "vibes": {"아방가르드 힙": 95, "스위트 페미닌": 82, "에포트리스 내추럴": 65, "소프트 퓨어": 35, "모던 시크": 30, "클래식 글램": 35},
    "elements": ["에어리 히피펌", "잔머리 컬", "풍성한 볼륨", "자유로운 컬링", "피치 치크"],
    "description": "뿌리부터 풍성하게 살아나는 컬감으로 얼굴을 작아 보이게 만드는 자유로운 헤어"
  },
  {
    "id": "face-57",
    "name": "패션 인플루언서",
    "handle": "@y2k_archive",
    "style": "아방가르드 힙 (Avant-Garde Hip)",
    "title": "트렌디 Y2K 블록코어 & 스트레이트 뱅",
    "imageUrl": "/images/korean_influencer_y2k_trendy_1788407169311.jpg",
    "vibes": {"아방가르드 힙": 96, "모던 시크": 85, "스위트 페미닌": 55, "에포트리스 내추럴": 45, "소프트 퓨어": 30, "클래식 글램": 40},
    "elements": ["Y2K 스트리트 룩", "풀뱅 앞머리", "누디 글로스", "또렷한 눈매", "힙 실루엣"],
    "description": "스트리트 무드와 정돈된 풀뱅 헤어로 개성을 과감하게 표현한 스타일"
  }
]

print(f"Total refined Instagram-style images: {len(dataset)}")

with open(r'C:\Users\asia\.gemini\antigravity\scratch\my-beauty\src\data\discoveryImages.js', 'w', encoding='utf-8') as f:
    f.write('// Instagram Daily Aesthetic Korean Celebrity & Influencer Faces (ZERO CRINGE, HIGH-END)\n')
    f.write('export const DISCOVERY_IMAGES = ' + json.dumps(dataset, ensure_ascii=False, indent=2) + ';\n')

print("Updated discoveryImages.js with high-end Instagram daily aesthetic dataset successfully!")
