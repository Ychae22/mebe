// 5 Rich, Distinct 30-Day Beauty Project Templates
import { asset } from '../utils/assetUrl';

const RAW_PROJECT_TEMPLATES = [
  {
    id: 'proj-pure-glow',
    title: '[소프트 퓨어] 수분 베이스 & 결 정돈 30일 컨설팅 로드맵',
    shortTitle: '소프트 퓨어 (수분 결 정돈)',
    category: '피부결 & 소프트 퓨어',
    targetArchetype: '소프트 퓨어 추구미 (Soft Pure)',
    durationDays: 30,
    dDay: 'D-30',
    coverImage: '/images/korean_stars/bae_suzy.jpg',
    description: '맑고 투명한 수분 밸런스와 정돈된 결을 바탕으로, 티 없이 맑은 퓨어 아우라를 완성하는 4주 여정',
    consultant: {
      name: '이정훈 디렉터',
      role: '메디컬 스킨케어 & 밸런스 코치',
      avatar: '/images/korean_stars/shin_se_kyung.jpg',
      badge: '스킨 솔루션 인증',
      status: '1:1 피드백 처방 완료'
    },
    weeks: [
      {
        weekNumber: 1,
        theme: 'BASE — 속건조 해결 & 투명 수분 레이어링',
        summary: '피부 장벽을 강화하고 각질을 잠재워 화장이 잘 먹는 맑은 바탕을 세팅합니다.',
        missions: [
          {
            id: 'pg-1',
            day: 1,
            category: '스킨케어',
            title: '고농축 히알루론산 7스킨 수분 패팩 루틴 시작',
            desc: '속건조를 해결하고 투명한 수분감을 끌어올리는 고보습 앰플 루틴을 시작합니다.',
            completed: false,
            actionType: 'shop',
            relatedItem: { category: 'beauty', name: '하이드라 워터 앰플 (50ml)', price: 34000, tag: '화장품' }
          },
          {
            id: 'pg-2',
            day: 3,
            category: '헤어',
            title: '찰랑이는 실크 모발을 위한 단백질 헤어팩',
            desc: '청순한 생머리의 핵심은 모발 윤기! 주 2회 고농축 살롱 헤어팩을 진행합니다.',
            completed: false,
            actionType: 'shop',
            relatedItem: { category: 'beauty', name: '살롱 실크 프로틴 헤어 마스크 (200ml)', price: 28000, tag: '헤어케어' }
          },
          {
            id: 'pg-3',
            day: 5,
            category: '살롱예약',
            title: '청담 맑은 두피 스파 & 모발 클리닉 예약',
            desc: '두피 열감을 내리고 흑발의 윤기를 극대화하는 청담 전문 헤어스파를 예약합니다.',
            completed: false,
            actionType: 'book',
            relatedItem: { category: 'hair', name: '에이바이봄 청담 (두피&모발 리페어)', price: 85000, tag: '헤어살롱 예약' }
          }
        ]
      },
      {
        weekNumber: 2,
        theme: 'SKIN TONE — 투명 세미글로우 베이스 & 내추럴 톤',
        summary: '두꺼운 파운데이션 대신 톤업 크림과 촉촉한 에센스 쿠션으로 맑음을 연출합니다.',
        missions: [
          {
            id: 'pg-4',
            day: 9,
            category: '베이스',
            title: '무결점 초경량 에센스 쿠션 베이스 피팅',
            desc: '두껍지 않게 피부 결만 살리는 초경량 에센스 쿠션으로 피부를 정돈합니다.',
            completed: false,
            actionType: 'shop',
            relatedItem: { category: 'beauty', name: '누디 씬 에센스 쿠션 SPF50+', price: 38000, tag: '화장품' }
          },
          {
            id: 'pg-5',
            day: 12,
            category: '립케어',
            title: '각질 없는 매끈한 플럼핑 누드 립 세팅',
            desc: '맑은 누디 틴트와 립 플럼퍼 오일로 도톰하고 촉촉한 립을 완성합니다.',
            completed: false,
            actionType: 'shop',
            relatedItem: { category: 'beauty', name: '글레이즈 듀 틴트 #01 누디코랄', price: 21000, tag: '화장품' }
          }
        ]
      },
      {
        weekNumber: 3,
        theme: 'EYE & BROW — 한 올 한 올 결 브로우 & 맑은 눈빛',
        summary: '진한 아이라인 대신 점막만 채우고 투명 마스카라로 청초한 눈망울을 만듭니다.',
        missions: [
          {
            id: 'pg-6',
            day: 16,
            category: '아이브로우',
            title: '본연의 결을 살리는 스크류 브로우 리프팅',
            desc: '눈썹 앞머리 결을 세워 자연스러운 첫사랑 인상을 연출합니다.',
            completed: false,
            actionType: 'shop',
            relatedItem: { category: 'beauty', name: '슬림 엣지 브로우 펜슬 #02 애쉬', price: 16000, tag: '화장품' }
          },
          {
            id: 'pg-7',
            day: 19,
            category: '퍼스널컬러',
            title: '소프트 퓨어 쿨/웜 톤온톤 1:1 컨설팅 점검',
            desc: '내 얼굴에 가장 투명하게 받는 채도와 명도를 컨설턴트와 재확인합니다.',
            completed: false,
            actionType: 'book',
            relatedItem: { category: 'consulting', name: '컬러유어즈 신사 (1:1 퍼스널 컬러 진단)', price: 90000, tag: '전문가 진단' }
          }
        ]
      },
      {
        weekNumber: 4,
        theme: 'FINISHING — 소프트 퓨어 시그니처 화보 완성',
        summary: '30일간 다듬어진 맑은 피부와 본연의 아름다움을 전문 스튜디오에서 기록합니다.',
        missions: [
          {
            id: 'pg-8',
            day: 28,
            category: '스튜디오',
            title: '소프트 퓨어 인생 뷰티 프로필 화보 촬영',
            desc: '자연광 스튜디오에서 나만의 맑고 청초한 인생 사진을 남깁니다.',
            completed: false,
            actionType: 'book',
            relatedItem: { category: 'studio', name: '스튜디오 무드인 성수 (내추럴 뷰티 프로필)', price: 180000, tag: '프로필 촬영' }
          }
        ]
      }
    ]
  },
  {
    id: 'proj-cateye-chic',
    title: '[도회적 캣아이 시크] 15도 엣지 아이 & 샤프 컨투어링 30일 프로젝트',
    shortTitle: '도회적 캣아이 (샤프 윤곽)',
    category: '눈매 & 도회미',
    targetArchetype: '도회적 캣아이 시크 추구미 (Urban Cat-eye Chic)',
    durationDays: 30,
    dDay: 'D-30',
    coverImage: '/images/korean_stars/han_so_hee.jpg',
    description: '날렵하게 올라간 15도 캣아이 라인과 슬릭 턱선, 뮤트 스모키 음영으로 세련된 차도녀 아우라를 완성하는 프로젝트',
    consultant: {
      name: '김유진 수석 실장',
      role: '전 청담 살롱 아티스트 & 아이 메이크업 디렉터',
      avatar: '/images/korean_stars/karina.jpg',
      badge: '아이돌 전담 디렉터',
      status: '1:1 눈매 라인 가이드 배정'
    },
    weeks: [
      {
        weekNumber: 1,
        theme: 'CONTOUR — 턱선 리프팅 & 붓기 컷팅 페이스라인',
        summary: '샤프한 캣아이의 기본은 또렷한 턱선! 괄사와 림프 순환으로 윤곽을 정리합니다.',
        missions: [
          {
            id: 'cc-1',
            day: 1,
            category: '페이스케어',
            title: '세라믹 괄사 페이스라인 & 턱선 마사지 14일 챌린지',
            desc: '턱선과 승모근 라인을 매일 저녁 10분간 정리하여 샤프한 V라인을 만듭니다.',
            completed: false,
            actionType: 'shop',
            relatedItem: { category: 'beauty', name: '프리미엄 로즈쿼츠 V라인 세라믹 괄사', price: 29000, tag: '뷰티 디바이스' }
          },
          {
            id: 'cc-2',
            day: 4,
            category: '살롱예약',
            title: '청담 윤곽 컷팅 & 슬릭 스트레이트 헤어 시술',
            desc: '턱선 라인을 날렵하게 드러내는 슬릭 펌 또는 페이스라인 레이어드를 예약합니다.',
            completed: false,
            actionType: 'book',
            relatedItem: { category: 'hair', name: '보이드 청담 (슬릭 스트레이트 & 페이스라인 컷)', price: 110000, tag: '헤어살롱 예약' }
          }
        ]
      },
      {
        weekNumber: 2,
        theme: 'EYE MAKEUP — 15도 캣아이 & 삼각존 음영 트임',
        summary: '눈 가로 길이를 극대화하고 눈꼬리를 아찔하게 올려 고혹적인 눈매를 연출합니다.',
        missions: [
          {
            id: 'cc-3',
            day: 8,
            category: '아이메이크업',
            title: '초밀착 슬릭 붓펜 15도 캣아이 라인 트레이닝',
            desc: '번짐 없는 워터프루프 붓펜 라이너로 내 눈매에 꼭 맞는 상승 윙 라인을 잡습니다.',
            completed: false,
            actionType: 'shop',
            relatedItem: { category: 'beauty', name: '울트라 슬릭 워터프루프 리퀴드 라이너 #01 딥블랙', price: 18000, tag: '화장품' }
          },
          {
            id: 'cc-4',
            day: 11,
            category: '아이섀도우',
            title: '뮤트 토프 브라운 삼각존 음영 블렌딩',
            desc: '뒤트임 효과를 주는 회갈색 섀도우로 그윽하고 도회적인 분위기를 부여합니다.',
            completed: false,
            actionType: 'shop',
            relatedItem: { category: 'beauty', name: '소프트 뉴트럴 10구 아이섀도우 팔레트', price: 32000, tag: '화장품' }
          }
        ]
      },
      {
        weekNumber: 3,
        theme: 'LIP & CHEEK — 모브 톤온톤 & 매트 오버립',
        summary: '과한 색조 대신 도회적인 분위기를 배가시키는 누디 모브 립과 쉐딩을 세팅합니다.',
        missions: [
          {
            id: 'cc-5',
            day: 18,
            category: '립메이크업',
            title: '볼륨감 넘치는 세미매트 누디 플럼 립',
            desc: '입술 산을 자연스럽게 확장하는 립라이너와 시크한 모브 틴트의 조화.',
            completed: false,
            actionType: 'shop',
            relatedItem: { category: 'beauty', name: '벨벳 매트 립 펜슬 & 틴트 듀오 #모브베이지', price: 26000, tag: '화장품' }
          }
        ]
      },
      {
        weekNumber: 4,
        theme: 'SIGNATURE CHIC — 도회적 무드 화보 촬영',
        summary: '완벽한 캣아이와 샤프한 턱선으로 완성된 시크 아우라를 기록합니다.',
        missions: [
          {
            id: 'cc-6',
            day: 29,
            category: '스튜디오',
            title: '하이엔드 에디토리얼 시크 화보 프로필',
            desc: '패션 매거진 화보처럼 흑백과 강렬한 조명으로 카리스마를 극대화합니다.',
            completed: false,
            actionType: 'book',
            relatedItem: { category: 'studio', name: '스튜디오 노르 성수 (매거진 룩북 촬영)', price: 220000, tag: '프로필 촬영' }
          }
        ]
      }
    ]
  },
  {
    id: 'proj-lovely-juicy',
    title: '[스위트 페미닌] 피치 톤온톤 치크 & 볼륨 립 30일 컨설팅 로드맵',
    shortTitle: '스위트 페미닌 (톤온톤 치크)',
    category: '색조 & 스위트 페미닌',
    targetArchetype: '스위트 페미닌 추구미 (Sweet Feminine)',
    durationDays: 30,
    dDay: 'D-30',
    coverImage: '/images/korean_stars/iu.jpg',
    description: '사랑스러운 애교살, 양 볼에 스며드는 생기 피치 블러셔, 반짝이는 볼륨 립으로 호감도를 극대화하는 30일 여정',
    consultant: {
      name: '박서연 원장',
      role: '퍼스널 컬러 & 이미지 브랜딩 디렉터',
      avatar: '/images/korean_stars/nayeon.jpg',
      badge: '이미지 메이킹 12년',
      status: '생기 코랄 컬러 팔레트 처방'
    },
    weeks: [
      {
        weekNumber: 1,
        theme: 'CHEEK — 수채화 피치 블러셔 & 생기 톤업',
        summary: '텁텁하지 않고 피부 속에서 우러나오는 듯한 맑은 복숭아빛 치크 테크닉을 익힙니다.',
        missions: [
          {
            id: 'lj-1',
            day: 2,
            category: '블러셔',
            title: '리퀴드 피치 치크 & 블렌딩 브러시 매칭',
            desc: '파우더 뭉침 없이 하루 종일 촉촉하게 유지되는 수채화 리퀴드 블러셔 루틴.',
            completed: false,
            actionType: 'shop',
            relatedItem: { category: 'beauty', name: '소프트 크림 블러셔 #피치샤벳', price: 22000, tag: '화장품' }
          },
          {
            id: 'lj-2',
            day: 6,
            category: '헤어스타일',
            title: '얼굴을 동글동글 작아 보이게 하는 시스루 뱅 컷',
            desc: '이마 중앙을 가볍게 커버하고 애교머리를 살려 러블리한 인상을 만듭니다.',
            completed: false,
            actionType: 'book',
            relatedItem: { category: 'hair', name: '꼼나나 청담 (러블리 시스루 뱅 & 뿌리볼륨펌)', price: 75000, tag: '헤어살롱 예약' }
          }
        ]
      },
      {
        weekNumber: 2,
        theme: 'EYES — 반짝이는 글리터 애교살 & 선한 눈매',
        summary: '눈매를 동그랗고 선하게 연출하는 삼각존 연장과 은은한 글리터 포인트.',
        missions: [
          {
            id: 'lj-3',
            day: 10,
            category: '아이메이크업',
            title: '입체 애교살 듀얼 펜슬 & 라이너',
            desc: '자연스러운 음영선과 은은한 쉬머 펄로 입체 눈매를 완성합니다.',
            completed: false,
            actionType: 'shop',
            relatedItem: { category: 'beauty', name: '언더아이 볼륨 듀얼 라이너 #샴페인피치', price: 19000, tag: '화장품' }
          }
        ]
      },
      {
        weekNumber: 3,
        theme: 'LIP — 도톰한 볼륨 젤리 코팅 립',
        summary: '도톰한 볼륨감과 싱그러운 과즙 컬러를 연출하는 듀이 틴트 레이어링.',
        missions: [
          {
            id: 'lj-4',
            day: 18,
            category: '립메이크업',
            title: '생기 코랄 틴트 & 플럼핑 글로스',
            desc: '입술 잔주름을 매끈하게 지워주는 볼륨 플럼핑 립.',
            completed: false,
            actionType: 'shop',
            relatedItem: { category: 'beauty', name: '쥬시 멜팅 립 #02 애플코랄', price: 19500, tag: '화장품' }
          }
        ]
      },
      {
        weekNumber: 4,
        theme: 'SWEET PROFILE — 스위트 페미닌 스튜디오 촬영',
        summary: '생기 넘치는 미소와 밝은 파스텔 톤으로 채운 화보를 기록합니다.',
        missions: [
          {
            id: 'lj-5',
            day: 30,
            category: '스튜디오',
            title: '컬러풀 컨셉 스튜디오 프로필 화보',
            desc: '따뜻한 파스텔 배경지에서 내 가장 환한 미소를 담아내는 촬영.',
            completed: false,
            actionType: 'book',
            relatedItem: { category: 'studio', name: '스튜디오 플로럴 신사 (과즙 컬러 프로필)', price: 170000, tag: '프로필 촬영' }
          }
        ]
      }
    ]
  },
  {
    id: 'proj-d30-reset',
    title: '[D-30 인생 화보 & 웨딩] 초단기 올인원 뷰티 체인지 프로젝트',
    shortTitle: 'D-30 인생화보 (급속 리셋)',
    category: '초단기 & 올인원',
    targetArchetype: '글램 여신 페미닌 추구미 (Glam Feminine)',
    durationDays: 30,
    dDay: 'D-30',
    coverImage: '/images/korean_stars/jang_won_young.jpg',
    description: '중요한 미팅, 화보 촬영, 웨딩, 프로필을 앞두고 피부 긴급 진정부터 청담 메이크업 샵 예약까지 30일 완성 올인원 프로젝트',
    consultant: {
      name: '최민서 총괄 원장',
      role: '청담 웨딩 & 화보 총괄 비주얼 디렉터',
      avatar: '/images/korean_stars/park_min_young.jpg',
      badge: 'TOP VIP 디렉터',
      status: 'D-30 일정별 집중 스케줄링 가동'
    },
    weeks: [
      {
        weekNumber: 1,
        theme: 'D-30: EMERGENCY BASE — 피부 긴급 리셋 & 결 정리',
        summary: '트러블 진정과 붓기 완화로 촬영용 최적의 피부 컨디션을 만듭니다.',
        missions: [
          {
            id: 'd30-1',
            day: 1,
            category: '스킨케어',
            title: '고농축 시카 PDRN 진정 앰플 집중 케어',
            desc: '피부 결점과 붉은기를 단기간에 가라앉히는 급속 진정 세럼 루틴.',
            completed: false,
            actionType: 'shop',
            relatedItem: { category: 'beauty', name: '시카 리페어 급속 진정 앰플 (30ml)', price: 39000, tag: '화장품' }
          },
          {
            id: 'd30-2',
            day: 5,
            category: '에스테틱',
            title: '청담 연예인 물광 아쿠아필 & 림프 케어',
            desc: '모공 피지와 각질을 정리해 조명 아래서 빛나는 도자기 스킨을 완성합니다.',
            completed: false,
            actionType: 'book',
            relatedItem: { category: 'skin', name: '더클리닉 청담 (물광 필링 & 림프 윤곽)', price: 120000, tag: '스킨케어 예약' }
          }
        ]
      },
      {
        weekNumber: 2,
        theme: 'D-20: HAIR & BROWS — 퍼펙트 헤어 볼륨 & 페이스라인',
        summary: '사진에서 얼굴이 작아 보이는 그레이스 웨이브와 깔끔한 눈썹 정리.',
        missions: [
          {
            id: 'd30-3',
            day: 12,
            category: '헤어살롱',
            title: '청담 여신 그레이스 S컬펌 & 톤다운 염색',
            desc: '조명 반사를 고려한 고급스러운 초코브라운 염색과 풍성한 웨이브 펌.',
            completed: false,
            actionType: 'book',
            relatedItem: { category: 'hair', name: '정샘물 인스피레이션 청담 (여신 웨이브 & 컬러)', price: 190000, tag: '헤어살롱 예약' }
          }
        ]
      },
      {
        weekNumber: 3,
        theme: 'D-10: DRESS & OUTFIT — 넥라인 실루엣 & 톤 매칭',
        summary: '목선과 쇄골 라인을 살려주는 의상 핏과 주얼리를 확정합니다.',
        missions: [
          {
            id: 'd30-4',
            day: 20,
            category: '스타일링',
            title: '스튜디오 촬영용 실크 블라우스 & 드레스 피팅',
            desc: '나의 체형과 추구미를 가장 돋보이게 하는 네크라인 의상을 셀렉합니다.',
            completed: false,
            actionType: 'shop',
            relatedItem: { category: 'style', name: '프리미엄 실크 스퀘어넥 블라우스', price: 78000, tag: '패션' }
          }
        ]
      },
      {
        weekNumber: 4,
        theme: 'D-DAY: PHOTO SHOOT — 청담 아티스트 헤메 & 화보',
        summary: '청담 아티스트의 풀메이크업을 받고 인생 화보를 성공적으로 완성합니다.',
        missions: [
          {
            id: 'd30-5',
            day: 30,
            category: '스튜디오',
            title: 'VIP 청담 헤어메이크업 + 프리미엄 뷰티 화보',
            desc: '일생 최고의 리즈 모습을 남기는 30일 완성 마침표.',
            completed: false,
            actionType: 'book',
            relatedItem: { category: 'studio', name: '스튜디오 오트 압구정 (VIP 프로필 패키지)', price: 290000, tag: '프로필 패키지' }
          }
        ]
      }
    ]
  },
  {
    id: 'proj-classic-minimal',
    title: '[에포트리스 내추럴] 실크 세미매트 & 결 브로우 30일 컨설팅 로드맵',
    shortTitle: '에포트리스 내추럴 (미니멀 결)',
    category: '내추럴 & 에포트리스',
    targetArchetype: '에포트리스 내추럴 추구미 (Effortless Natural)',
    durationDays: 30,
    dDay: 'D-30',
    coverImage: '/images/korean_stars/go_youn_jung.jpg',
    description: '과한 색조 없이 정돈된 실크 벨벳 스킨, 자연스러운 눈썹 결, 담백한 프렌치 시크 실루엣으로 완성하는 고급스러운 내추럴 여정',
    consultant: {
      name: '송지아 실장',
      role: '미니멀 스타일 & 내추럴 뷰티 에디터',
      avatar: '/images/korean_stars/kim_ji_won.jpg',
      badge: '트렌드 매거진 출신',
      status: '톤온톤 내추럴 스타일링 매칭'
    },
    weeks: [
      {
        weekNumber: 1,
        theme: 'BASE — 모공 블러 & 매끈한 깐달걀 세미매트',
        summary: '기름진 번들거림이 아닌, 실크처럼 보송하면서도 결이 살아있는 고급 피부를 완성합니다.',
        missions: [
          {
            id: 'cm-1',
            day: 1,
            category: '베이스',
            title: '모공 블러 프라이머 & 세미매트 벨벳 파운데이션',
            desc: '가볍게 밀착되어 요철을 커버하는 미니멀 스킨 메이크업 세팅.',
            completed: false,
            actionType: 'shop',
            relatedItem: { category: 'beauty', name: '실크 벨벳 매트 세럼 파운데이션 (30ml)', price: 42000, tag: '화장품' }
          }
        ]
      },
      {
        weekNumber: 2,
        theme: 'BROW — 인위적이지 않은 자연스러운 결 브로우',
        summary: '눈썹 숱과 본연의 골격을 살려 지적이고 차분한 인상을 연출합니다.',
        missions: [
          {
            id: 'cm-2',
            day: 9,
            category: '아이브로우',
            title: '클리어 브로우 세팅 젤로 모 결 살리기',
            desc: '뭉침 없이 눈썹 앞머리 결을 단정하게 고정시키는 투명 브로우 픽서.',
            completed: false,
            actionType: 'shop',
            relatedItem: { category: 'beauty', name: '클리어 결 세팅 브로우 픽서', price: 15000, tag: '화장품' }
          }
        ]
      },
      {
        weekNumber: 3,
        theme: 'HAIR — 성수동 감성 에어리 단발 레이어드',
        summary: '가볍게 흩날리는 텍스처로 턱선과 목선을 돋보이게 하는 미니멀 헤어컷.',
        missions: [
          {
            id: 'cm-3',
            day: 17,
            category: '헤어살롱',
            title: '성수동 에어리 레이어드 단발 & 태슬컷',
            desc: '자연스럽게 쓸어 넘길 수 있는 감성 레이어드 컷 시술.',
            completed: false,
            actionType: 'book',
            relatedItem: { category: 'hair', name: '로우맨션 성수 (에어리 태슬 단발 전문)', price: 70000, tag: '헤어살롱 예약' }
          }
        ]
      },
      {
        weekNumber: 4,
        theme: 'PORTRAIT — 담백한 성수 감성 흑백/자연광 포트레이트',
        summary: '군더더기 없는 담백함으로 내 본연의 분위기를 가장 잘 표현한 프로필 기록.',
        missions: [
          {
            id: 'cm-4',
            day: 28,
            category: '스튜디오',
            title: '성수동 자연광 미니멀 무드 포트레이트',
            desc: '인위적 보정 없이 빛과 그림자만으로 내 고유의 분위기를 담아냅니다.',
            completed: false,
            actionType: 'book',
            relatedItem: { category: 'studio', name: '아카이브 스튜디오 성수 (미니멀 자연광 프로필)', price: 160000, tag: '프로필 촬영' }
          }
        ]
      }
    ]
  }
];

// Export with asset helper
export const PROJECT_TEMPLATES = RAW_PROJECT_TEMPLATES.map(p => ({
  ...p,
  coverImage: asset(p.coverImage),
  consultant: p.consultant ? { ...p.consultant, avatar: asset(p.consultant.avatar) } : p.consultant
}));

export const DEFAULT_30_DAY_PROJECT = PROJECT_TEMPLATES[0];

