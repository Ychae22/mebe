import React, { useState } from 'react';
import { COMMERCE_CATALOG } from '../data/commerceCatalog';
import { ShoppingBag, Calendar, Star, Tag, Sparkles, Check, ArrowRight } from 'lucide-react';

export default function ShopAndBook({ onAddToCart, onOpenBooking }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: '전체 추천', icon: '✨' },
    { id: 'beauty', label: '화장품 (Beauty)', icon: '💄' },
    { id: 'hair', label: '헤어살롱 (Hair)', icon: '💇' },
    { id: 'care', label: '케어 & 컬러 (Care)', icon: '💅' },
    { id: 'fashion', label: '패션 (Fashion)', icon: '👗' },
    { id: 'photo', label: '스튜디오 (Photo)', icon: '📸' },
  ];

  // Combine items for all
  const getAllItems = () => {
    return [
      ...COMMERCE_CATALOG.beauty.map(i => ({ ...i, type: 'shop' })),
      ...COMMERCE_CATALOG.hair.map(i => ({ ...i, type: 'book' })),
      ...COMMERCE_CATALOG.care.map(i => ({ ...i, type: 'book' })),
      ...COMMERCE_CATALOG.fashion.map(i => ({ ...i, type: 'shop' })),
      ...COMMERCE_CATALOG.photo.map(i => ({ ...i, type: 'book' })),
    ];
  };

  const currentItems = activeCategory === 'all'
    ? getAllItems()
    : COMMERCE_CATALOG[activeCategory]?.map(i => ({
        ...i,
        type: ['hair', 'care', 'photo'].includes(activeCategory) ? 'book' : 'shop'
      })) || [];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 pb-32">
      {/* Header Banner */}
      <div className="border-b border-stone-200 pb-7 mb-7">
        <div className="flex items-center gap-2 mb-2.5">
          <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-black text-white">
            06. SALONS & COMMERCE
          </span>
          <span className="text-[11px] text-stone-600 font-semibold tracking-wider uppercase flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-black" />
            CHEONGDAM CURATED SELECTION & BOOKING
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-black mb-2">
          청담 살롱 & 외형 솔루션 원스톱 커머스
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 max-w-2xl leading-relaxed">
          추구미 진단 결과에 최적화된 청담 프리미엄 헤어살롱, 퍼스널 스타일링 샵, 전문 촬영 스튜디오 예약 및 에센셜 아이템을 번거로운 검색 없이 다이렉트로 연결합니다.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              activeCategory === cat.id
                ? 'bg-black text-white shadow-xs'
                : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-50'
            }`}
          >
            <span>{cat.icon}</span>
            <span>{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
        {currentItems.map((item) => {
          const isBooking = item.type === 'book';

          return (
            <div
              key={item.id}
              className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Image Container */}
                <div className="aspect-[4/3] w-full overflow-hidden relative bg-stone-100">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {item.badge && (
                    <span className="absolute top-3 left-3 text-[10px] font-bold px-2 py-0.5 rounded-full bg-black/85 text-white backdrop-blur-xs">
                      {item.badge}
                    </span>
                  )}
                  {item.discount && (
                    <span className="absolute top-3 right-3 text-[10px] font-black px-2 py-0.5 rounded-full bg-black text-white shadow-xs">
                      {item.discount} OFF
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  {/* DNA Match Tag */}
                  <div className="inline-flex items-center gap-1 text-[11px] font-bold text-black bg-stone-100 border border-stone-200 px-2 py-0.5 rounded-lg mb-2">
                    <Sparkles className="w-3 h-3 text-black" />
                    <span>{item.dnaMatch}</span>
                  </div>

                  <p className="text-xs text-stone-500 font-medium truncate">
                    {item.brand || item.location || item.subCategory}
                  </p>
                  <h3 className="font-extrabold text-sm sm:text-base text-black line-clamp-1 mb-1">
                    {item.name}
                  </h3>
                  {item.serviceName && (
                    <p className="text-xs text-stone-600 line-clamp-1 mb-2 font-medium">
                      "{item.serviceName}"
                    </p>
                  )}

                  {/* Rating & Reviews */}
                  <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-3">
                    <div className="flex items-center text-black">
                      <Star className="w-3.5 h-3.5 fill-black text-black" />
                      <span className="font-bold text-black ml-1">{item.rating}</span>
                    </div>
                    <span>·</span>
                    <span>리뷰 {item.reviewsCount?.toLocaleString()}개</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg font-extrabold text-black">
                      {item.price.toLocaleString()}원
                    </span>
                    {item.originalPrice && (
                      <span className="text-xs text-stone-400 line-through">
                        {item.originalPrice.toLocaleString()}원
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Button Footer */}
              <div className="p-5 pt-0">
                {isBooking ? (
                  <button
                    onClick={() => onOpenBooking(item)}
                    className="w-full py-2.5 rounded-xl bg-black hover:bg-stone-800 text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>실시간 청담 살롱 예약하기</span>
                  </button>
                ) : (
                  <button
                    onClick={() => onAddToCart(item)}
                    className="w-full py-2.5 rounded-xl bg-white border border-stone-300 hover:bg-stone-100 text-black text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>장바구니 담기</span>
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Platform Business Insight Card */}
      <div className="bg-stone-900 text-white rounded-3xl p-6 sm:p-8 relative overflow-hidden border border-stone-800">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-stone-200 text-xs font-semibold mb-3 border border-white/10">
              <Tag className="w-3.5 h-3.5 text-white" />
              <span>PLATFORM MONETIZATION</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold font-serif mb-2 text-white">
              “욕망의 발견에서 실제 결제까지, 플랫폼 안에서 완성됩니다.”
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed max-w-2xl">
              뷰티 화장품·패션 커머스 판매 수수료(15~20%)와 프리미엄 헤어살롱·스튜디오 실시간 예약 중개 수수료(10~15%)가 결합되어, 사용자의 뷰티 프로젝트 전 여정을 수익으로 전환합니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
