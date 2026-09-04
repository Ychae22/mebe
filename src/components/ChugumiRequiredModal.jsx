import React from 'react';
import { Sparkles, X, ArrowRight, ShieldCheck, Compass } from 'lucide-react';

export default function ChugumiRequiredModal({ isOpen, onClose, onGoToDiscovery }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fade-in">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-stone-200 relative animate-scale-up text-center">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-500 hover:text-black flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Icon */}
        <div className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center mx-auto mb-4 shadow-sm">
          <Compass className="w-7 h-7" />
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800 text-[11px] font-bold mb-3 border border-stone-200">
          <Sparkles className="w-3 h-3 text-black" />
          <span>AESTHETIC DIAGNOSIS REQUIRED</span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-extrabold text-black tracking-tight mb-2">
          추구미 진단을 먼저 완료해주세요
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6">
          30일 컨설팅 로드맵은 회원님이 무의식중에 지향하는 골격·눈매·분위기(추구미) 데이터를 기반으로 1:1 맞춤 설계됩니다.<br /><br />
          먼저 <strong>[02. 추구미 아카이브]</strong>에서 마음에 드는 인스타 레퍼런스를 3~7장 수집하고 진단을 완료해주세요.
        </p>

        {/* Action Buttons */}
        <div className="space-y-2">
          <button
            onClick={() => {
              onClose();
              onGoToDiscovery();
            }}
            className="w-full py-3 rounded-xl bg-black hover:bg-stone-800 text-white font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-xs"
          >
            <span>02. 추구미 아카이브로 이동하기</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold text-xs transition-colors"
          >
            다음에 하기
          </button>
        </div>

      </div>
    </div>
  );
}
