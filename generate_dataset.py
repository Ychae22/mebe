import json

# Define the 11 Core Style Groups with their recurring element DNA
style_groups = [
    {
        "group": "pure_glow",
        "groupName": "청순 & 워터글로우",
        "category": "makeup",
        "baseVibes": {"청순": 95, "여성스러움": 88, "세련": 80, "내추럴": 75, "러블리": 82, "고양이상": 45, "힙": 30},
        "baseElements": ["광채 피부", "투명한 베이스", "촉촉한 탕후루 립", "핑크 립", "슬림 실루엣"],
        "handles": ["@wonyoung_mood", "@pure_danbi", "@minju_glow", "@suzy_vibe", "@dewy_eunji", "@yooa_pure", "@arisu_k", "@lucid_skin"],
        "titles": [
            "워터 글로우 스킨 & 맑은 핑크 립", "이슬광 수분 베이스 & 청초한 피치 립", "자연광 햇살 청순 베이스",
            "글로시 듀이 립 & 맑은 투명광", "청초한 코랄 핑크 틴트 메이크업", "촉촉한 워터 세럼 광채 스킨",
            "유리알 텍스처 수분광 치크", "데일리 퓨어 로즈 핑크 메이크업"
        ],
        "descriptions": [
            "맑은 수분을 머금은 투명광 피부와 청초한 로즈 핑크 글로우 립 포인트",
            "피부 속부터 차오르는 자연스러운 속광과 뽀얀 수채화 치크",
            "햇살 아래서 맑게 빛나는 수분결과 청순한 인상 연출",
            "입술에 과즙을 얹은 듯 촉촉하게 반짝이는 듀이 틴트",
            "투명하고 맑은 피부톤을 극대화하는 은은한 코랄 핑크",
            "스킨케어 직후의 촉촉함을 하루 종일 유지하는 수분결 베이스",
            "끈적임 없이 피부에 착 밀착되는 유리알 물광 표현",
            "과한 색조 없이 본연의 생기를 맑게 살려주는 청순 룩"
        ],
        "localImg": "/images/wonyoung.jpg",
        "unsplashPool": [
            "photo-1534528741775-53994a69daeb", "photo-1544005313-94ddf0286df2", "photo-1517841905240-472988babdf9",
            "photo-1508214751196-bcfd4ca60f91", "photo-1494790108377-be9c29b29330", "photo-1519699047748-de8e457a634e", "photo-1524250502761-1ac6f2e30d43"
        ]
    },
    {
        "group": "cheongdam_hair",
        "groupName": "청담 살롱 레이어드 컷",
        "category": "hair",
        "baseVibes": {"청순": 88, "세련": 92, "여성스러움": 89, "내추럴": 68, "러블리": 72, "고양이상": 55, "힙": 42},
        "baseElements": ["긴 레이어드 헤어", "페이스라인 컷", "사이드뱅", "에어리 볼륨", "광채 피부"],
        "handles": ["@jieun_daily", "@cheongdam_minah", "@volume_chaewon", "@layers_soo", "@hair_yujin", "@salon_hayeon", "@aerocut_studio", "@breeze_hair"],
        "titles": [
            "청담 살롱 페이스라인 컷 & 에어리 볼륨", "소프트 허쉬 레이어드 & 볼륨 사이드뱅", "슬릭 텍스처 롱 레이어드 C컬",
            "얼굴선 감싸는 페이스라인 블렌딩 컷", "자연스러운 볼륨감의 에어리 레이어드", "무드 있는 브라운 톤앤톤 레이어드",
            "가벼운 질감의 청담동 시그니처 롱 컷", "목선을 슬림하게 살려주는 레이어드 펌"
        ],
        "descriptions": [
            "얼굴선을 부드럽게 감싸주어 이목구비를 갸름하게 살려주는 시그니처 레이어드 컷",
            "광대와 턱선을 커버하는 감각적인 사이드뱅과 볼륨 레이어링",
            "차분하면서도 공기감이 느껴지는 에어리 C컬 펌 스타일",
            "묶었을 때도 자연스럽게 흘러내리는 페이스라인 잔머리 연출",
            "두상의 볼륨을 완벽하게 살려주는 입체적인 레이어 텍스처",
            "따뜻하고 고급스러운 에스프레소 브라운 컬러와 레이어드의 조화",
            "무게감은 덜어내고 텍스처를 살린 감성 롱 레이어드 컷",
            "풍성하지만 텁텁하지 않은 여신 웨이브 레이어드 디자인"
        ],
        "localImg": "/images/layered_hair.jpg",
        "unsplashPool": [
            "photo-1517841905240-472988babdf9", "photo-1560066984-138dadb4c035", "photo-1522337660859-02fbefca4702",
            "photo-1529626455594-4ff0802cfb7e", "photo-1522335789203-aabd1fc54bc9", "photo-1492691527719-9d1e07e534b4", "photo-1509967419530-da38b4704bc6"
        ]
    },
    {
        "group": "cateye_chic",
        "groupName": "도회적 캣아이 & 시크",
        "category": "makeup",
        "baseVibes": {"고양이상": 98, "세련": 95, "여성스러움": 80, "청순": 42, "힙": 85, "러블리": 35, "내추럴": 40},
        "baseElements": ["또렷한 눈매", "캣아이 아이라인", "음영 섀도우", "세련된 무드", "슬릭 헤어"],
        "handles": ["@haerin_catmood", "@karina_allure", "@chic_yeji", "@smoky_dami", "@sohee_sharp", "@noir_jenny", "@velvet_cat", "@catline_muse"],
        "titles": [
            "도회적인 캣아이 라인 & 소프트 음영", "15도 엣지 캣아이 & 뉴트럴 브라운 스모키", "샤프한 눈꼬리 & 누드 오버립",
            "매혹적인 캣아이 글램 메이크업", "슬릭 헤어 & 또렷한 눈매 음영", "도시적인 무드의 세미 스모키 아이",
            "시크한 눈매를 살려주는 섬세한 라인", "카리스마 넘치는 캣아이 룩"
        ],
        "descriptions": [
            "눈꼬리를 섬세하게 15도 살린 캣아이 아이라인과 뉴트럴 브라운 입체 음영",
            "점막을 꼼꼼히 채우고 눈꼬리 끝을 샤프하게 연출한 도회적 시크 아이",
            "입술 라인을 도톰하게 살린 누드립과 강렬한 눈매의 밸런스",
            "은은한 펄감과 깊은 음영이 어우러진 나이트 라운지 메이크업",
            "군더더기 없는 슬릭 헤어와 또렷한 눈매로 완성한 세련된 비주얼",
            "답답함 없이 눈매가 길어 보이는 섬세한 음영 레이어링",
            "고양이상의 매력을 극대화하는 날렵하고 우아한 라인 드로잉",
            "시선을 단번에 사로잡는 당당하고 도회적인 시그니처 룩"
        ],
        "localImg": "/images/cateye_chic.jpg",
        "unsplashPool": [
            "photo-1524504388940-b1c1722653e1", "photo-1512496015851-a90fb38ba796", "photo-1531746020798-e6953c6e8e04",
            "photo-1526510747491-58f928ec870f", "photo-1516726817505-f5ed825624d8", "photo-1524638431109-93d95c968f03", "photo-1531123897727-8f129e1688ce"
        ]
    },
    {
        "group": "seongsu_minimal",
        "groupName": "성수동 꾸안꾸 & 미니멀",
        "category": "fashion",
        "baseVibes": {"세련": 96, "내추럴": 90, "여성스러움": 75, "청순": 68, "고양이상": 58, "힙": 72, "러블리": 35},
        "baseElements": ["슬림한 실루엣", "뉴트럴 컬러", "미니멀 코디", "자연스러운 웨이브", "베이직 아이템"],
        "handles": ["@jungwon_minimal", "@seongsu_walk", "@minimal_mingky", "@quiet_dara", "@urban_atelier", "@linen_sofi", "@mood_neutral", "@daily_seongsu"],
        "titles": [
            "성수동 꾸안꾸 & 프렌치 미니멀 트렌치", "클래식 오버 트렌치 & 와이드 슬랙스", "베이지 톤온톤 미니멀 데일리 룩",
            "차분한 모노톤 스트리트 룩", "성수동 카페 감성 오프화이트 셋업", "자연스러운 실루엣의 꾸안꾸 니트 코디",
            "단정하고 세련된 시티 캐주얼", "프렌치 감성의 여유로운 어번 룩"
        ],
        "descriptions": [
            "성수동 카페 거리 감성의 여여로운 프렌치 시크 & 트렌치 클래식 룩",
            "기본에 충실한 트렌치코트와 스트레이트 데님으로 완성한 꾸안꾸의 정석",
            "부드러운 베이지와 크림 컬러의 톤온톤 조화가 주는 편안한 고급스러움",
            "도심의 일상 속에서 돋보이는 모던하고 감각적인 실루엣",
            "과한 디테일을 배제하고 핏과 소재감에 집중한 에센셜 코디",
            "꾸미지 않은 듯 멋스러운 내추럴 핏과 은은한 주얼리 매칭",
            "출근룩부터 주말 브런치까지 아우르는 정제된 미니멀 스타일",
            "간결함 속에서 우아한 태도가 묻어나는 프렌치 시크 에스테틱"
        ],
        "localImg": "/images/french_minimal.jpg",
        "unsplashPool": [
            "photo-1515886657613-9f3515b0c78f", "photo-1488426862026-3ee34a7d66df", "photo-1506794778202-cad84cf45f1d",
            "photo-1496440737103-cd596325d314", "photo-1503104834685-7205e8607eb9", "photo-1507003211169-0a1dd7228f2d", "photo-1539571696357-5a69c17a67c6"
        ]
    },
    {
        "group": "peach_lovely",
        "groupName": "러블리 과즙 & 피치 코랄",
        "category": "makeup",
        "baseVibes": {"러블리": 98, "청순": 89, "여성스러움": 84, "내추럴": 72, "세련": 62, "고양이상": 32, "힙": 35},
        "baseElements": ["피치 치크", "핑크 립", "광채 피부", "사랑스러운 미소", "시스루 뱅"],
        "handles": ["@peach_chuu", "@blush_somi", "@lovely_chuu", "@coral_bomi", "@berry_hana", "@cherry_nana", "@apricot_muse", "@pink_chiffon"],
        "titles": [
            "피치 코랄 과즙 블러셔 & 수채화 치크", "말간 살구빛 치크 & 그라데이션 립", "생기 가득한 핑크 코랄 글로우",
            "뽀얀 베이비 피치 블러셔 룩", "달콤한 과즙상 치크 & 촉촉 틴트", "수채화처럼 맑게 번지는 치크 메이크업",
            "사랑스러운 애교살 & 코랄 립", "화사한 봄 햇살을 머금은 피치 룩"
        ],
        "descriptions": [
            "양 볼에 뽀얗게 물드는 피치 코랄 치크와 생기 가득한 과즙 그라데이션 립",
            "피부 속이 비치는 듯 맑고 여린 살구빛으로 물들인 치크 포인트",
            "웃을 때마다 화사하게 피어나는 생기 넘치는 과즙 메이크업",
            "모공 부각 없이 뽀얗게 블러 처리된 듯한 베이비 피치 치크",
            "입술 중앙부터 물드는 틴트와 싱그러운 볼터치의 사랑스러운 조화",
            "파우더리함 없이 투명하게 스며드는 수채화 발색 메이크업",
            "눈 밑 애교살에 은은한 샴페인 글리터와 생기 립으로 완성한 러블리 무드",
            "주변을 환하게 밝히는 긍정적이고 화사한 뷰티 에스테틱"
        ],
        "localImg": "/images/peach_lovely.jpg",
        "unsplashPool": [
            "photo-1508214751196-bcfd4ca60f91", "photo-1502823403499-6ccfcf4fb453", "photo-1548142813-c348350df52b",
            "photo-1514315384763-ba401779410f", "photo-1524250502761-1ac6f2e30d43", "photo-1506152983158-b4a74a01c721", "photo-1535295972055-1c762f4483e5"
        ]
    },
    {
        "group": "hannam_feminine",
        "groupName": "한남동 페미닌 & 슬림 니트",
        "category": "fashion",
        "baseVibes": {"여성스러움": 98, "청순": 90, "세련": 86, "내추럴": 74, "러블리": 75, "고양이상": 42, "힙": 30},
        "baseElements": ["슬림한 실루엣", "보트넥 니트", "여성스러운 스타일", "골드 이어링", "우아한 네크라인"],
        "handles": ["@hannam_mood", "@cashmere_yuna", "@boatneck_jiwoo", "@silky_grace", "@terrace_seoyeon", "@elegance_kate", "@knit_atelier", "@hannam_flow"],
        "titles": [
            "여리여리 오프숄더 니트 & 쇄골 실루엣", "슬림 보트넥 캐시미어 & 골드 터치", "아이보리 골지 니트 & 실크 스커트",
            "한남동 카페 테라스 감성 룩", "목선이 예뻐 보이는 소프트 니트웨어", "가녀린 실루엣을 강조하는 페미닌 코디",
            "은은한 광택의 실크 블라우스 룩", "여성미를 극대화하는 슬림 드레이프"
        ],
        "descriptions": [
            "한남동 카페 테라스 감성의 포근한 아이보리 니트와 가녀린 목선 강조",
            "우아한 보트넥 라인과 은은한 14K 골드 이어링의 완벽한 조화",
            "부드럽게 몸을 감싸는 골지 니트와 유려하게 흐르는 실크 텍스처",
            "여유로운 주말 오후의 감성을 담은 차분하고 우아한 OOTD",
            "쇄골과 어깨선이 돋보이는 디자인으로 페미닌한 매력을 배가",
            "슬림하지만 부담스럽지 않은 피팅감으로 완성한 세련된 페미닌 룩",
            "빛의 각도에 따라 고급스럽게 흐르는 실크 소재감의 매력",
            "절제된 아름다움과 품격 있는 여성스러움을 동시에 전달하는 스타일"
        ],
        "localImg": "/images/feminine_knit.jpg",
        "unsplashPool": [
            "photo-1464863979621-258859e62245", "photo-1434389677669-e08b4cac3105", "photo-1535632066927-ab7c9ab60908",
            "photo-1522075469751-3a6694fb2f61", "photo-1534751516642-a1714f5a5078", "photo-1541257710737-06d667133a53", "photo-1542206395-9feb3edaa68d"
        ]
    },
    {
        "group": "y2k_street",
        "groupName": "홍대 Y2K 힙 & 스트리트",
        "category": "fashion",
        "baseVibes": {"힙": 99, "세련": 86, "고양이상": 82, "러블리": 60, "청순": 30, "여성스러움": 65, "내추럴": 35},
        "baseElements": ["트렌디 액세서리", "크롭 실루엣", "카고 데님", "힙한 무드", "슬림 실루엣"],
        "handles": ["@new_kitsch", "@hongdae_rebel", "@street_winter", "@silver_momo", "@cyber_y2k", "@acid_pop", "@glam_street", "@pixel_club"],
        "titles": [
            "Y2K 힙 글램 & 홍대 스트리트 크롭 룩", "실버 체인 주얼리 & 로우라이즈 카고", "레트로 퓨처리즘 메탈릭 스타일링",
            "당당한 MZ 힙스터 스트리트 OOTD", "크롭 자켓 & 스포티 스니커즈 매칭", "네온 나이트 홍대 플래시 포토",
            "키치하고 과감한 Y2K 글램 룩", "트렌디한 실버 선글라스 포인트 룩"
        ],
        "descriptions": [
            "레트로 퓨처리즘 감성의 실버 쥬얼리와 당당한 MZ 스트리트 스타일링",
            "여유로운 카고 핏과 타이트한 크롭 탑의 힙한 대비가 돋보이는 룩",
            "밀레니엄 감성을 현대적으로 재해석한 메탈릭 & 실버 액세서리",
            "거리 위에서 나만의 독보적인 아우라를 드러내는 당당한 포즈",
            "스포티함과 힙한 무드를 절묘하게 믹스매치한 감각적인 코디",
            "플래시 촬영으로 더욱 극대화되는 도발적이고 매력적인 비주얼",
            "정형화된 틀을 벗어나 자유로운 개성을 표현한 키치 글램",
            "트렌드를 이끄는 아이코닉한 디테일과 유니크한 스타일링 감각"
        ],
        "localImg": "/images/y2k_trendy.jpg",
        "unsplashPool": [
            "photo-1488426862026-3ee34a7d66df", "photo-1509783236416-c9ad59bae472", "photo-1540569014015-19a7be504e3a",
            "photo-1546961329-78bef0414d7c", "photo-1530785602389-0759fbee8576", "photo-1529680459049-bf0126405781", "photo-1533618561606-3b2f07d89959"
        ]
    },
    {
        "group": "clean_girl",
        "groupName": "슬릭 로우번 & 클린 걸",
        "category": "hair",
        "baseVibes": {"세련": 96, "내추럴": 94, "청순": 74, "여성스러움": 72, "고양이상": 65, "힙": 70, "러블리": 35},
        "baseElements": ["슬릭 헤어", "로우번", "결점 없는 베이스", "또렷한 브로우", "뉴트럴 립"],
        "handles": ["@clean_seoul", "@sleek_bun", "@glass_skin_lab", "@pure_dew", "@gallery_nude", "@minimal_bun", "@chic_sculpt", "@neat_line"],
        "titles": [
            "갤러리 감성 슬릭 로우번 & 클린 걸 스킨", "단정한 가르마 & 모던 슬릭 번", "투명한 결점 커버 & 결 브로우",
            "군더더기 없는 도회적 클린 미니멀", "슬릭 로우번 & 골드 미니 후프", "아트 갤러리 감성 담백한 비주얼",
            "빛나는 결광 피부 & 정돈된 잔머리", "시크하고 차분한 올드머니 슬릭 룩"
        ],
        "descriptions": [
            "가르마를 단정히 정돈한 슬릭 로우번과 자연광에 빛나는 무결점 이슬 피부",
            "얼굴 윤곽을 깔끔하게 드러내며 지적이고 모던한 인상을 주는 헤어 스타일",
            "한 올 한 올 눈썹 결을 살리고 피부결을 정교하게 다듬은 베이스 메이크업",
            "과장 없는 담백함으로 진정한 고급스러움을 연출하는 클린 걸 무드",
            "작은 골드 링 귀걸이 하나로 완벽한 포인트를 준 미니멀리즘",
            "차분한 전시 공간과 어우러지는 감각적이고 정제된 스타일",
            "피부 본연의 건강한 윤기를 살리고 헤어를 완벽하게 정돈한 룩",
            "신경 쓰지 않은 듯 완벽하게 계산된 단아하고 세련된 분위기"
        ],
        "localImg": "/images/clean_lowbun.jpg",
        "unsplashPool": [
            "photo-1544005313-94ddf0286df2", "photo-1519085360753-af0119f7cbe7", "photo-1531384441138-2736e62e0919",
            "photo-1526080652727-5b77f74eacd2", "photo-1516589178581-6cd7833ae3b2", "photo-1509967419530-da38b4704bc6", "photo-1522337660859-02fbefca4702"
        ]
    },
    {
        "group": "balletcore",
        "groupName": "발레코어 로맨틱 & 쉬폰",
        "category": "fashion",
        "baseVibes": {"러블리": 99, "여성스러움": 96, "청순": 90, "내추럴": 45, "세련": 65, "고양이상": 35, "힙": 45},
        "baseElements": ["쉬폰 소재", "리본 디테일", "반묶음 웨이브", "핑크 블러셔", "여성스러운 스타일"],
        "handles": ["@ballet_blossom", "@ribbon_fairy", "@chiffon_rose", "@tulle_yujin", "@dreamy_sora", "@pink_ballerina", "@pastel_grace", "@fairy_veil"],
        "titles": [
            "발레코어 핑크 리본 & 여리여리 쉬폰 드레스", "파스텔 튤 스커트 & 새틴 리본 타이", "로맨틱 반묶음 & 레이스 디테일",
            "동화 속 무드의 발레코어 에스테틱", "여리여리한 페어리 핑크 메이크업", "우아한 발레리나 실루엣 코디",
            "몽환적인 파스텔 핑크 무드", "은은한 플로럴 자수 & 리본 악세서리"
        ],
        "descriptions": [
            "동화 같은 로맨틱 무드의 발레코어 실루엣과 여리여리한 파스텔 핑크 터치",
            "걸을 때마다 가볍게 흩날리는 튤 소재와 사랑스러운 리본 타이 포인트",
            "부드러운 물결 웨이브에 핑크 리본을 더해 완성한 요정 같은 헤어",
            "로맨틱한 감성과 여성스러운 디테일이 극대화된 발레코어 스타일링",
            "뽀얀 핑크빛 뺨과 맑은 눈망울을 연출하는 몽환적인 뷰티 룩",
            "목선과 쇄골을 부드럽게 드러내는 발레 넥라인과 스커트의 조화",
            "파스텔 톤의 아늑한 공간에서 피어나는 사랑스럽고 따뜻한 감성",
            "섬세한 레이스와 리본 장식으로 소녀적인 감성을 우아하게 재해석"
        ],
        "localImg": "/images/balletcore.jpg",
        "unsplashPool": [
            "photo-1502823403499-6ccfcf4fb453", "photo-1514315384763-ba401779410f", "photo-1524250502761-1ac6f2e30d43",
            "photo-1535295972055-1c762f4483e5", "photo-1506152983158-b4a74a01c721", "photo-1548142813-c348350df52b", "photo-1508214751196-bcfd4ca60f91"
        ]
    },
    {
        "group": "geek_chic",
        "groupName": "성수 긱시크 & 모던 셔츠",
        "category": "fashion",
        "baseVibes": {"세련": 97, "힙": 95, "내추럴": 80, "고양이상": 70, "청순": 45, "여성스러움": 60, "러블리": 40},
        "baseElements": ["무테 안경", "오버사이즈 셔츠", "와이드 슬랙스", "긱시크 무드", "슬림 실루엣"],
        "handles": ["@archive_seongsu", "@geek_archive", "@rimless_mood", "@smart_seoul", "@stripe_muse", "@modern_leica", "@concept_sofi", "@trendy_frame"],
        "titles": [
            "성수 긱시크 무테 안경 & 오버 스트라이프 셔츠", "지적인 무드의 긱시크 핀턱 와이드 슬랙스", "클래식 레트로 안경 & 매니시 코디",
            "성수동 편집숍 감성 힙스터 OOTD", "단정함과 힙함이 공존하는 긱시크 룩", "스트라이프 셔츠 & 레더 토트백",
            "트렌디한 무테 안경 & 내추럴 메이크업", "정갈한 실루엣의 지적인 어번 룩"
        ],
        "descriptions": [
            "성수동 아카이브 감성의 무테 안경과 클래식 블루 스트라이프 셔츠 믹스매치",
            "체형을 멋스럽게 커버하는 와이드 슬랙스와 단정한 벨트 라인 포인트",
            "지적이고 스마트한 분위기를 풍기는 2026 트렌드 긱시크의 대표 스타일링",
            "빈티지 필름 카메라와 함께 연출한 세련된 도회적 아카이브 룩",
            "남성복의 테일러링 요소를 페미닌하게 풀어낸 세련된 감각",
            "고급스러운 가죽 가방과 클래식 스니커즈로 마침표를 찍은 코디",
            "과한 색조 대신 지적인 분위기를 극대화하는 담백한 내추럴 페이스",
            "트렌디하면서도 시대를 타지 않는 확고한 나만의 취향이 담긴 룩"
        ],
        "localImg": "/images/geek_chic.jpg",
        "unsplashPool": [
            "photo-1506794778202-cad84cf45f1d", "photo-1507003211169-0a1dd7228f2d", "photo-1539571696357-5a69c17a67c6",
            "photo-1515886657613-9f3515b0c78f", "photo-1496440737103-cd596325d314", "photo-1542206395-9feb3edaa68d", "photo-1541257710737-06d667133a53"
        ]
    },
    {
        "group": "hippie_curl",
        "groupName": "젤리 히피펌 & 잔머리 컬",
        "category": "hair",
        "baseVibes": {"러블리": 96, "힙": 90, "내추럴": 85, "청순": 65, "여성스러움": 72, "고양이상": 45, "세련": 58},
        "baseElements": ["내추럴 히피펌", "잔머리 텍스처", "자유로운 컬", "컬러 니트 베스트", "풍성한 볼륨"],
        "handles": ["@sunny_curly", "@hippie_jelly", "@retro_perm", "@freckle_joy", "@volume_breeze", "@curly_danbi", "@vintage_wave", "@boho_chuu"],
        "titles": [
            "통통 튀는 젤리 히피펌 & 잔머리 컬링", "사랑스러운 뽀글이 히피 웨이브 펌", "풍성한 볼륨감의 레트로 젤리 컬",
            "야외 테라스 햇살 아래 생기 히피 룩", "잔머리까지 컬을 살린 감성 히피 헤어", "컬러풀 니트 베스트 & 빈티지 컬",
            "자유롭고 발랄한 보헤미안 히피 무드", "볼륨 걱정 없는 풍성한 텍스처 펌"
        ],
        "descriptions": [
            "풍성한 볼륨감과 레트로한 매력이 돋보이는 사랑스러운 히피펌 컬링",
            "뿌리부터 탄력 있게 살아나는 물결 컬로 귀엽고 발랄한 인상 연출",
            "모발이 얇거나 숱이 적은 분들에게도 입체적인 볼륨을 선사하는 펌",
            "햇살 좋은 카페 테라스에서 기분 좋은 에너지를 발산하는 데일리 룩",
            "이마 라인을 따라 자연스럽게 흐르는 꼬불꼬불한 잔머리 디테일",
            "레트로한 감성의 손뜨개 니트와 찰떡같이 어울리는 히피 헤어",
            "얽매이지 않는 자유분방함과 사랑스러움이 공존하는 매력적인 스타일",
            "손질이 간편하고 컬 크림 하나만으로도 스타일리시하게 완성되는 헤어"
        ],
        "localImg": "/images/hippie_curl.jpg",
        "unsplashPool": [
            "photo-1521572267360-ee0c2909d518", "photo-1519699047748-de8e457a634e", "photo-1529680459049-bf0126405781",
            "photo-1530785602389-0759fbee8576", "photo-1533618561606-3b2f07d89959", "photo-1526080652727-5b77f74eacd2", "photo-1516589178581-6cd7833ae3b2"
        ]
    }
]

dataset = []
img_counter = 1

for g in style_groups:
    for i in range(8):
        item_id = f"img-{img_counter}"
        img_counter += 1
        
        # Determine image URL: first item uses high-res local image, subsequent items cycle through curated pool
        if i == 0:
            img_url = g["localImg"]
        else:
            unsplash_id = g["unsplashPool"][(i - 1) % len(g["unsplashPool"])]
            img_url = f"https://images.unsplash.com/{unsplash_id}?auto=format&fit=crop&crop=faces&w=600&q=80"
        
        # Slight variation in vibe scores so each photo feels nuanced
        item_vibes = {}
        for k, v in g["baseVibes"].items():
            delta = ((i * 3 + img_counter * 5) % 9) - 4
            item_vibes[k] = max(20, min(99, v + delta))
            
        dataset.append({
            "id": item_id,
            "styleGroup": g["group"],
            "groupName": g["groupName"],
            "category": g["category"],
            "title": g["titles"][i],
            "influencer": g["handles"][i],
            "imageUrl": img_url,
            "vibes": item_vibes,
            "elements": g["baseElements"],
            "description": g["descriptions"][i]
        })

print(f"Generated {len(dataset)} items across {len(style_groups)} style groups!")

# Write to discoveryImages.js
with open("src/data/discoveryImages.js", "w", encoding="utf-8") as f:
    f.write("// Autogenerated comprehensive catalog with 88 curated Korean influencer photos\n")
    f.write("export const DISCOVERY_IMAGES = " + json.dumps(dataset, ensure_ascii=False, indent=2) + ";\n")

print("Saved to src/data/discoveryImages.js successfully!")
