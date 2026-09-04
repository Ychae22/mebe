import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CartModal({ isOpen, onClose, cartItems, onRemoveItem, onClearCart }) {
  const [isOrdered, setIsOrdered] = useState(false);

  if (!isOpen) return null;

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);
  const totalDiscount = Math.round(totalPrice * 0.15); // Mock 15% VIP discount
  const finalPrice = Math.max(0, totalPrice - totalDiscount);

  const handleCheckout = () => {
    setIsOrdered(true);
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    setTimeout(() => {
      onClearCart();
      setIsOrdered(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl max-w-md w-full overflow-hidden shadow-2xl border border-editorial-border flex flex-col max-h-[85vh]">
        
        {/* Header */}
        <div className="p-5 border-b border-stone-100 flex items-center justify-between bg-stone-50">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-black" />
            <h3 className="font-bold text-base text-stone-900">ME:BE 셀렉트 장바구니</h3>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-stone-100 text-stone-700">
              {cartItems.length}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {isOrdered ? (
          <div className="p-8 text-center py-16">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-xl font-bold text-stone-900 mb-1">주문이 완료되었습니다!</h4>
            <p className="text-xs text-stone-600 mb-4">
              Beauty DNA 맞춤 패키지가 1~2일 내에 정성껏 배송됩니다.
            </p>
            <span className="text-[11px] text-stone-700 bg-stone-100 p-2.5 rounded-xl block border border-stone-200">
              ✨ 뷰티 프로젝트 미션 달성에 필요한 전용 가이드북이 함께 동봉됩니다.
            </span>
          </div>
        ) : cartItems.length === 0 ? (
          <div className="p-12 text-center text-stone-500">
            <ShoppingBag className="w-12 h-12 stroke-[1.5] text-stone-300 mx-auto mb-3" />
            <p className="text-sm font-medium mb-1">장바구니가 비어 있습니다.</p>
            <p className="text-xs text-stone-400">프로젝트 미션 추천 상품을 담아보세요.</p>
          </div>
        ) : (
          <>
            {/* Items List */}
            <div className="p-5 overflow-y-auto divide-y divide-stone-100 flex-1">
              {cartItems.map((item, idx) => (
                <div key={idx} className="py-3.5 first:pt-0 flex items-center gap-3">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-14 h-14 rounded-2xl object-cover border border-stone-200"
                  />
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-bold text-black bg-stone-100 border border-stone-200 px-1.5 py-0.5 rounded">
                      {item.dnaMatch || 'DNA 추천'}
                    </span>
                    <h4 className="font-bold text-xs text-stone-900 truncate mt-0.5">{item.name}</h4>
                    <p className="text-xs font-serif font-black text-stone-800 mt-1">
                      {item.price.toLocaleString()}원
                    </p>
                  </div>
                  <button
                    onClick={() => onRemoveItem(idx)}
                    className="p-1.5 rounded-full text-stone-300 hover:text-red-500 hover:bg-stone-100 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            {/* Price Calculation Footer */}
            <div className="p-5 bg-stone-50 border-t border-stone-200/80 space-y-2">
              <div className="flex justify-between text-xs text-stone-500">
                <span>총 상품금액</span>
                <span>{totalPrice.toLocaleString()}원</span>
              </div>
              <div className="flex justify-between text-xs text-black font-semibold">
                <span>AI 뷰티 프로젝트 특별 제휴 할인 (15%)</span>
                <span>-{totalDiscount.toLocaleString()}원</span>
              </div>
              <div className="flex justify-between text-xs text-stone-500">
                <span>배송비</span>
                <span className="font-bold text-black">무료 배송</span>
              </div>
              <div className="pt-2 border-t border-stone-200 flex justify-between items-baseline">
                <span className="text-xs font-bold text-stone-800">최종 결제 금액</span>
                <span className="text-lg font-black font-serif text-editorial-black">
                  {finalPrice.toLocaleString()}원
                </span>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full mt-2 py-3 rounded-xl bg-black hover:bg-stone-800 text-white text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-1.5 shadow-xs"
              >
                <span>토스 / 네이버페이 즉시 결제</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
