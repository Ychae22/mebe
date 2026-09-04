import React, { useState, useMemo } from 'react';
import { CLINIC_PROCEDURES } from '../data/clinicProcedures';
import { 
  Activity, 
  Sparkles, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  ChevronRight, 
  ShieldCheck, 
  Calendar, 
  ArrowUpRight,
  TrendingUp,
  Percent
} from 'lucide-react';

export default function ClinicSection({ onOpenBooking, dnaData }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: '전체 메디컬 시술' },
    { id: 'lifting', label: '페이스라인 & 리프팅' },
    { id: 'eyes', label: '눈매 교정 & 트임' },
    { id: 'skin', label: '피부 재생 & 스킨부스터' },
    { id: 'dimension', label: '입체감 (코 & 립)' }
  ];

  const filteredProcedures = useMemo(() => {
    if (selectedCategory === 'all') return CLINIC_PROCEDURES;
    return CLINIC_PROCEDURES.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="max-w-5xl mx-auto pb-32">
      
      {/* Top Header Banner (Clean Editorial B&W) */}
      <div className="border-b border-stone-200 pb-8 mb-8">
        <div className="flex items-center gap-2 mb-2.5">
          <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-black text-white">
            05. MEDICAL PROCEDURES
          </span>
          <span className="text-[11px] text-stone-600 font-semibold tracking-wider uppercase flex items-center gap-1">
            <Activity className="w-3.5 h-3.5" />
            CHEONGDAM CLINICAL AESTHETICS & SURGERY
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-black mb-3">
          추구미 골격 분석 기반 성형외과 & 피부과 시술 매칭
        </h1>
        <p className="text-xs sm:text-sm text-stone-500 max-w-2xl leading-relaxed">
          화장품과 헤어스타일링만으로 해결하기 어려운 골격, 비대칭, 피부 탄력 저하를 해결하기 위해 청담·압구정 최상위 성형외과 및 피부과 전문의와 1:1 시술 솔루션을 연결합니다.
        </p>

        {/* Personalized DNA Matching Note */}
        {dnaData && (
          <div className="mt-5 p-4 bg-stone-50 rounded-2xl border border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-xs font-bold shrink-0">
                AI
              </div>
              <div>
                <p className="text-xs font-bold text-black">
                  회원님의 추구미 [{dnaData.archetype}] 맞춤 시술 권장
                </p>
                <p className="text-[11px] text-stone-500">
                  샤프한 턱선과 또렷한 이목구비 골격을 위해 [울쎄라 리프팅]과 [15도 캣아이 듀얼트임]이 최적 매칭되었습니다.
                </p>
              </div>
            </div>
            <span className="text-xs font-semibold text-black bg-white px-3 py-1.5 rounded-full border border-stone-200 self-start sm:self-auto shrink-0">
              매칭 일치도 94.2%
            </span>
          </div>
        )}
      </div>

      {/* Category Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none mb-6">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              selectedCategory === cat.id
                ? 'bg-black text-white shadow-xs'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Procedures Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-10">
        {filteredProcedures.map((proc) => (
          <div
            key={proc.id}
            className="p-5 sm:p-6 bg-white rounded-2xl border border-stone-200 hover:border-black transition-all duration-200 flex flex-col justify-between shadow-2xs hover:shadow-sm"
          >
            <div>
              {/* Category & Badge */}
              <div className="flex items-center justify-between gap-2 mb-2.5">
                <span className="text-[10px] bg-stone-100 text-stone-700 px-2 py-0.5 rounded-md font-bold">
                  {proc.categoryName}
                </span>
                <span className="text-[10px] text-black font-extrabold bg-stone-100 border border-stone-200 px-2 py-0.5 rounded-md">
                  ★ {proc.rating} ({proc.reviews})
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="font-extrabold text-base text-black mb-1.5 leading-snug">
                {proc.title}
              </h3>
              <p className="text-xs text-stone-500 leading-relaxed mb-4">
                {proc.description}
              </p>

              {/* Clinic & Doctor Info */}
              <div className="p-3 bg-stone-50 rounded-xl space-y-1.5 mb-4 text-[11px] border border-stone-100">
                <div className="flex items-center gap-2 text-stone-700 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-black shrink-0" />
                  <span>{proc.hospital} · {proc.doctor}</span>
                </div>
                <div className="flex items-center gap-2 text-stone-500">
                  <MapPin className="w-3.5 h-3.5 shrink-0" />
                  <span>{proc.location}</span>
                </div>
                <div className="flex items-center gap-2 text-stone-500">
                  <Clock className="w-3.5 h-3.5 shrink-0" />
                  <span>회복: {proc.downtime}</span>
                </div>
              </div>

              {/* Target Face Shape Tag */}
              <div className="text-[11px] text-stone-600 mb-4 flex items-baseline gap-1">
                <span className="font-bold text-black">권장 대상:</span>
                <span>{proc.targetFaceShape}</span>
              </div>
            </div>

            {/* Price & CTA */}
            <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
              <div>
                <p className="text-[10px] text-stone-400 line-through">
                  정가 {proc.originalPrice.toLocaleString()}원
                </p>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-xs font-bold text-red-600">
                    {proc.discountRate}
                  </span>
                  <span className="text-base font-black text-black">
                    {proc.price.toLocaleString()}원
                  </span>
                </div>
              </div>

              <button
                onClick={() => onOpenBooking({
                  name: `${proc.hospital} [${proc.title}] 1:1 상담`,
                  category: 'clinic',
                  price: proc.deposit,
                  deposit: proc.deposit,
                  originalPrice: proc.price
                })}
                className="px-4 py-2 rounded-xl bg-black text-white text-xs font-bold hover:bg-stone-800 transition-colors flex items-center gap-1 shadow-xs"
              >
                <span>상담 예약</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Monetization & Partnership Transparency Card */}
      <div className="bg-stone-900 text-white rounded-3xl p-6 sm:p-8 relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="text-[11px] font-bold text-stone-400 uppercase tracking-widest block mb-1">
              VIP CLINIC PARTNERSHIP
            </span>
            <h3 className="text-lg sm:text-xl font-bold mb-2">
              청담·압구정 공식 제휴 의료기관 혜택 안내
            </h3>
            <p className="text-xs text-stone-300 max-w-xl leading-relaxed">
              ME:BE 플랫폼을 통해 예약 시 1:1 전담 실장 배정 및 상담비 면제, 시술 시 최대 25% VIP 제휴 할인가가 즉시 적용됩니다. 예약금(2~5만원)은 시술 진행 시 전액 차감됩니다.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="p-3 bg-white/10 rounded-2xl text-center border border-white/10">
              <p className="text-[10px] text-stone-400">제휴 병원</p>
              <p className="text-base font-black text-white">12개소</p>
            </div>
            <div className="p-3 bg-white/10 rounded-2xl text-center border border-white/10">
              <p className="text-[10px] text-stone-400">누적 상담 만족도</p>
              <p className="text-base font-black text-white">99.4%</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
