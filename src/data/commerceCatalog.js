import { asset } from '../utils/assetUrl';
export const COMMERCE_CATALOG = {
  beauty: [
    {
      id: 'prod-1',
      category: 'beauty',
      subCategory: '스킨케어',
      brand: 'ÉLIXIR DE ROSÉ',
      name: '하이드라 글로우 워터 앰플 (50ml)',
      price: 34000,
      originalPrice: 42000,
      discount: '19%',
      rating: 4.9,
      reviewsCount: 1420,
      imageUrl: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=500&q=80',
      dnaMatch: '청순 / 광채 피부 추천',
      badge: 'BEST'
    },
    {
      id: 'prod-2',
      category: 'beauty',
      subCategory: '베이스',
      brand: 'NUDE GLOW',
      name: '누디 씬 글로우 쿠션 SPF50+ PA++++',
      price: 38000,
      originalPrice: 45000,
      discount: '15%',
      rating: 4.8,
      reviewsCount: 980,
      imageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=500&q=80',
      dnaMatch: '세련 / 결점 없는 피부',
      badge: 'MD PICK'
    },
    {
      id: 'prod-3',
      category: 'beauty',
      subCategory: '아이메이크업',
      brand: 'LUMIÈRE STUDIO',
      name: '소프트 뉴트럴 10구 아이섀도우 팔레트',
      price: 32000,
      originalPrice: 38000,
      discount: '15%',
      rating: 4.9,
      reviewsCount: 2310,
      imageUrl: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=500&q=80',
      dnaMatch: '고양이상 / 또렷한 눈매',
      badge: 'TREND'
    },
    {
      id: 'prod-4',
      category: 'beauty',
      subCategory: '립메이크업',
      brand: 'MELT IN DEW',
      name: '글레이즈 듀 틴트 #03 로즈페탈',
      price: 21000,
      originalPrice: 24000,
      discount: '12%',
      rating: 4.9,
      reviewsCount: 3102,
      imageUrl: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=500&q=80',
      dnaMatch: '러블리 / 핑크 립 포인트',
      badge: 'BEST'
    }
  ],
  hair: [
    {
      id: 'salon-1',
      category: 'hair',
      location: '서울 강남구 청담동',
      name: '살롱 드 블랑 청담 (수석 실장 민아)',
      serviceName: '페이스라인 레이어드 컷 + 프리미엄 클리닉',
      price: 65000,
      originalPrice: 85000,
      discount: '23%',
      rating: 4.95,
      reviewsCount: 840,
      imageUrl: asset('/images/layered_hair.jpg'),
      dnaMatch: '긴 레이어드 헤어 완벽 구현',
      badge: '예약마감임박'
    },
    {
      id: 'salon-2',
      category: 'hair',
      location: '서울 성동구 성수동',
      name: '어반 텍스처 성수 (원장 도현)',
      serviceName: '소프트 슬릭 에어리 펌 & 질감 디자인 컷',
      price: 140000,
      originalPrice: 175000,
      discount: '20%',
      rating: 4.92,
      reviewsCount: 620,
      imageUrl: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=500&q=80',
      dnaMatch: '세련된 볼륨 / 내추럴 웨이브',
      badge: '인기디자이너'
    }
  ],
  care: [
    {
      id: 'care-1',
      category: 'care',
      location: '서울 성동구 뚝섬로',
      name: '뮤트 컬러 랩 성수 본점',
      serviceName: '1:1 VIP 퍼스널컬러 & 뷰티 파우치 정밀 처방',
      price: 110000,
      originalPrice: 130000,
      discount: '15%',
      rating: 4.98,
      reviewsCount: 1540,
      imageUrl: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=500&q=80',
      dnaMatch: '나만의 착붙 메이크업 톤 찾기',
      badge: '만족도 99%'
    },
    {
      id: 'care-2',
      category: 'care',
      location: '서울 용산구 한남동',
      name: '르네 누디 네일 아틀리에 한남',
      serviceName: '시그니처 누드 시럽 그라데이션 & 큐티클 스파',
      price: 55000,
      originalPrice: 65000,
      discount: '15%',
      rating: 4.9,
      reviewsCount: 430,
      imageUrl: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=500&q=80',
      dnaMatch: '여성스럽고 단정한 손끝 연출',
      badge: '프라이빗 룸'
    }
  ],
  fashion: [
    {
      id: 'fash-1',
      category: 'fashion',
      brand: 'ATELIER DE FLORE',
      name: '소프트 파인울 슬림 보트넥 니트 (오트밀)',
      price: 78000,
      originalPrice: 98000,
      discount: '20%',
      rating: 4.88,
      reviewsCount: 520,
      imageUrl: asset('/images/feminine_knit.jpg'),
      dnaMatch: '슬림 실루엣 / 페미닌 무드',
      badge: 'WEEKLY TOP'
    },
    {
      id: 'fash-2',
      category: 'fashion',
      brand: 'MAISON ORE',
      name: '미니멀 베이직 14K 골드 후프 이어링',
      price: 52000,
      originalPrice: 65000,
      discount: '20%',
      rating: 4.94,
      reviewsCount: 780,
      imageUrl: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=500&q=80',
      dnaMatch: '세련된 주얼리 포인트',
      badge: '자체제작'
    }
  ],
  photo: [
    {
      id: 'photo-1',
      category: 'photo',
      location: '서울 용산구 한남대로',
      name: '무브먼트 시그니처 프로필 스튜디오',
      serviceName: '뷰티 아이덴티티 프로필 화보 (헤어&메이크업+보정 3컷)',
      price: 180000,
      originalPrice: 220000,
      discount: '18%',
      rating: 4.99,
      reviewsCount: 890,
      imageUrl: asset('/images/profile_studio.jpg'),
      dnaMatch: '30일 뷰티 프로젝트 완주 기념 화보',
      badge: '셀럽 협찬'
    }
  ]
};
