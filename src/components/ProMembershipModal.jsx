import React, { useState } from 'react';
import { X, Crown, Check, Sparkles, ArrowRight, Zap, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ProMembershipModal({ isOpen, onClose, isSubscribed, onSubscribe }) {
  const [subscribedNow, setSubscribedNow] = useState(false);

  if (!isOpen) return null;

  const handleStartTrial = () => {
    setSubscribedNow(true);
    confetti({ particleCount: 120, spread: 80, origin: { y: 0.5 } });
    setTimeout(() => {
      onSubscribe();
      setSubscribedNow(false);
      onClose();
    }, 1800);
  };

  const planFeatures = [
    { name: 'Beauty DNA 기본 취향 분석', free: true, pro: true },
    { name: '30 / 60 / 90일 맞춤형 Beauty Project', free: '30일만 제공', pro: '무제한 풀코스 제공' },
    { name: 'AI 심층 스타일링 리포트 & 처방', free: '요약본만', pro: '전문가급 정밀 리포트' },
    { name: '카메라 기반 AI 옷장 & 파우치 화장품 분석', free: false, pro: true },
    { name: '제휴 청담/성수 살롱·스튜디오 상시 15% 할인', free: false, pro: true },
    { name: '월간 Beauty Report (취향 변화 추적 & 트렌드)', free: false, pro: true },
    { name: '우선 예약 및 신상 뷰티 브랜드 팝업 초대', free: false, pro: true },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fade-in">
      <div className="bg-stone-900 text-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-stone-800 relative">
        
        {/* Glowing Background Orbs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-stone-400 hover:text-white hover:bg-white/10 transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        {subscribedNow ? (
          <div className="p-8 py-16 text-center">
            <div className="w-16 h-16 rounded-full bg-white/10 text-white flex items-center justify-center mx-auto mb-4 animate-bounce border border-white/20">
              <Crown className="w-9 h-9 fill-current" />
            </div>
            <h3 className="text-2xl font-bold font-serif mb-2">ME:BE VIP 회원이 되셨습니다!</h3>
            <p className="text-xs text-stone-300 mb-6">
              7일간 무료 체험 후 월 7,900원이 청구됩니다. 언제든 해지 가능합니다.
            </p>
            <div className="inline-flex items-center gap-1 text-xs text-stone-200 bg-white/10 px-3 py-1 rounded-full border border-white/10">
              <Sparkles className="w-3.5 h-3.5" />
              <span>모든 30/60/90일 프로젝트 & 청담 제휴 최대 32% 할인이 즉시 해금되었습니다.</span>
            </div>
          </div>
        ) : (
          <div className="p-6 sm:p-8 relative z-10 max-h-[85vh] overflow-y-auto">
            {/* Crown Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-stone-200 text-xs font-bold mb-3">
              <Crown className="w-3.5 h-3.5 fill-current text-white" />
              <span>ME:BE VIP MEMBERSHIP</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-2 text-white">
              원하는 모습에 더 완벽하고 빠르게
            </h2>
            <p className="text-xs sm:text-sm text-stone-400 mb-6 leading-relaxed">
              단 한 번의 살롱 예약 할인만으로도 구독료를 회수할 수 있는 올인원 뷰티 멤버십.
            </p>

            {/* Price Box */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 mb-6 flex items-center justify-between">
              <div>
                <p className="text-xs text-stone-400 font-medium">첫 7일 무료 체험 후</p>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-2xl sm:text-3xl font-serif font-black text-white">월 7,900원</span>
                  <span className="text-xs text-stone-500 line-through">정가 14,900원</span>
                </div>
              </div>
              <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-white text-black shadow-xs">
                47% SAVE
              </span>
            </div>

            {/* Feature Comparison */}
            <div className="space-y-2.5 mb-6 text-xs">
              {planFeatures.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between py-1.5 border-b border-white/5 last:border-0">
                  <span className="text-stone-300 flex-1 pr-2">{item.name}</span>
                  <div className="flex items-center gap-1 text-right font-medium">
                    {typeof item.pro === 'boolean' ? (
                      <Check className="w-4 h-4 text-emerald-400 stroke-[3]" />
                    ) : (
                      <span className="text-stone-200 font-semibold">{item.pro}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Guarantee / CTA */}
            <div className="space-y-3">
              <button
                onClick={handleStartTrial}
                className="w-full py-3.5 rounded-full bg-white hover:bg-stone-150 text-black font-bold text-xs sm:text-sm shadow-md hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-black" />
                <span>{isSubscribed ? '이미 VIP 이용 중' : '7일 무료 체험 시작하기'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-stone-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>언제든 1초 만에 위약금 없이 즉시 해지 가능</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
