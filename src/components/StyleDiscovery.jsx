import { asset } from '../utils/assetUrl';
import React, { useMemo } from 'react';
import { DISCOVERY_IMAGES } from '../data/discoveryImages';
import { Sparkles, Check, RotateCcw, ArrowRight, SlidersHorizontal } from 'lucide-react';

export default function StyleDiscovery({ 
  selectedIds = [], 
  onToggleSelect, 
  onAnalyzeDna, 
  onQuickScenarioSelect 
}) {
  const filteredImages = DISCOVERY_IMAGES;

  // Selected images
  const selectedImages = useMemo(() => {
    return DISCOVERY_IMAGES.filter(img => selectedIds.includes(img.id));
  }, [selectedIds]);

  // Repeated Elements & Vibe Stacking Engine
  const accumulatedStats = useMemo(() => {
    if (selectedImages.length === 0) return null;

    // Count element repetitions
    const elementCounts = {};
    selectedImages.forEach(img => {
      (img.elements || []).forEach(elem => {
        elementCounts[elem] = (elementCounts[elem] || 0) + 1;
      });
    });

    const sortedElements = Object.entries(elementCounts)
      .map(([name, count]) => ({
        name,
        count,
        percent: Math.round((count / selectedImages.length) * 100)
      }))
      .sort((a, b) => b.count - a.count);

    // Calculate aggregated vibes
    const vibeTotals = {};
    selectedImages.forEach(img => {
      Object.entries(img.vibes || {}).forEach(([k, v]) => {
        vibeTotals[k] = (vibeTotals[k] || 0) + v;
      });
    });

    const sortedVibes = Object.entries(vibeTotals)
      .map(([name, total]) => ({
        name,
        score: Math.round(total / selectedImages.length)
      }))
      .sort((a, b) => b.score - a.score);

    const top1 = sortedVibes[0] || { name: '소프트 퓨어', score: 90 };
    const chugumiName = top1.name;

    return {
      elements: sortedElements,
      vibes: sortedVibes,
      chugumiName,
      topVibeString: sortedVibes.slice(0, 3).map(v => `${v.name} ${v.score}%`).join(' · ')
    };
  }, [selectedImages]);

  return (
    <div className="max-w-6xl mx-auto pb-44">
      
      {/* Top Editorial Header (Clean White & Black) */}
      <div className="border-b border-stone-200 pb-7 mb-7">
        <div className="flex items-center gap-2 mb-2.5">
          <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-black text-white">
            02. BE DISCOVERY ARCHIVE
          </span>
          <span className="text-[11px] text-stone-600 font-semibold tracking-wider uppercase">
            CHEONGDAM PRIVATE CONSULTING LAB
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-black mb-2 leading-tight">
              당신이 지향하는 추구미 아카이브
            </h1>
            <p className="text-xs sm:text-sm text-stone-600 max-w-2xl leading-relaxed">
              경직된 기사 사진 대신, 실제 인스타그램 피드와 일상 속 자연스러운 매력의 레퍼런스를 수집하세요.<br className="hidden sm:inline" />
              선택이 중첩될수록 당신이 무의식중에 지향하는 골격·눈매·분위기(추구미)가 실시간으로 분석됩니다.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs text-stone-600 font-semibold">
              수집된 레퍼런스: <strong className="text-black font-extrabold text-sm">{selectedIds.length}</strong>개
            </span>
            {selectedIds.length > 0 && (
              <button
                onClick={() => onToggleSelect('clear')}
                className="px-3 py-1.5 rounded-lg text-xs text-stone-600 hover:text-black border border-stone-200 hover:bg-stone-100 transition-colors flex items-center gap-1 font-semibold"
              >
                <RotateCcw className="w-3 h-3 text-stone-400" />
                <span>초기화</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Quick Scenario Chips (Refined 6 Aesthetic Archetypes) */}
      <div className="mb-6 p-3.5 bg-stone-50 rounded-2xl border border-stone-200 flex flex-wrap items-center justify-between gap-2.5">
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1.5 text-xs font-bold text-stone-800 mr-1">
            <SlidersHorizontal className="w-3.5 h-3.5 text-black" />
            <span>스타일별 큐레이션:</span>
          </div>
          <button
            onClick={() => onQuickScenarioSelect('wonyoung')}
            className="px-3 py-1.5 rounded-lg text-xs bg-white border border-stone-200 hover:border-black text-stone-800 font-semibold transition-all shadow-2xs"
          >
            소프트 퓨어 (수지·신세경·민지)
          </button>
          <button
            onClick={() => onQuickScenarioSelect('haerin')}
            className="px-3 py-1.5 rounded-lg text-xs bg-white border border-stone-200 hover:border-black text-stone-800 font-semibold transition-all shadow-2xs"
          >
            모던 시크 (해린·한소희·카리나·제니)
          </button>
          <button
            onClick={() => onQuickScenarioSelect('iu')}
            className="px-3 py-1.5 rounded-lg text-xs bg-white border border-stone-200 hover:border-black text-stone-800 font-semibold transition-all shadow-2xs"
          >
            스위트 페미닌 (아이유·나연·사나·하니)
          </button>
          <button
            onClick={() => onQuickScenarioSelect('jungwon')}
            className="px-3 py-1.5 rounded-lg text-xs bg-white border border-stone-200 hover:border-black text-stone-800 font-semibold transition-all shadow-2xs"
          >
            에포트리스 내추럴 (고윤정·김지원·김고은)
          </button>
        </div>
      </div>

      {/* REAL-TIME ACCUMULATED AESTHETIC DASHBOARD (Clean Luxury White & Black) */}
      {accumulatedStats ? (
        <div className="mb-7 p-5 bg-white rounded-2xl border-2 border-black shadow-sm animate-fade-in">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3 pb-3 border-b border-stone-100">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] bg-black text-white px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                  REAL-TIME IDENTIFIED
                </span>
                <h3 className="text-base font-extrabold text-black">
                  실시간 도출된 추구미: <span className="underline decoration-2 underline-offset-4">{accumulatedStats.chugumiName}</span>
                </h3>
              </div>
              <p className="text-xs text-stone-500">
                선택하신 {selectedImages.length}명의 인스타 레퍼런스에서 공통적으로 추출된 핵심 추구미 요소입니다.
              </p>
            </div>

            <div className="text-xs font-semibold text-stone-700 bg-stone-100 px-3 py-1.5 rounded-lg border border-stone-200">
              분위기 수렴도: <strong>{accumulatedStats.topVibeString}</strong>
            </div>
          </div>

          {/* Repeated Elements Tags */}
          <div className="flex flex-wrap gap-2 pt-1">
            {accumulatedStats.elements.map((elem, idx) => {
              const isTop = idx < 3;
              return (
                <div
                  key={elem.name}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs transition-all ${
                    isTop
                      ? 'bg-black text-white font-bold'
                      : 'bg-stone-100 text-stone-800 font-medium'
                  }`}
                >
                  <span>#{elem.name}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded ${
                    isTop ? 'bg-white/20 text-white' : 'bg-white text-stone-600 font-bold border border-stone-200'
                  }`}>
                    {elem.count}회 중복 ({elem.percent}%)
                  </span>
                  {idx === 0 && <span className="text-[10px] text-amber-300">★ 1순위</span>}
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="mb-7 p-6 bg-stone-50 rounded-2xl border border-stone-200 text-center">
          <p className="text-xs font-semibold text-stone-700 mb-1">
            아직 선택된 레퍼런스가 없습니다. (0개 선택됨)
          </p>
          <p className="text-[11px] text-stone-500">
            마음에 드는 사진을 3~7장 이상 터치하시면, 공통분모를 계산하여 당신만의 추구미 리포트를 도출해 드립니다.
          </p>
        </div>
      )}

      {/* Grid of 57 Instagram Daily Aesthetic Faces */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
        {filteredImages.map((img) => {
          const isSelected = selectedIds.includes(img.id);

          return (
            <div
              key={img.id}
              onClick={() => onToggleSelect(img.id)}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-200 border-2 bg-white flex flex-col justify-between ${
                isSelected
                  ? 'border-black ring-2 ring-black/10 scale-[1.02] shadow-md'
                  : 'border-stone-200 hover:border-stone-400 hover:shadow-xs'
              }`}
            >
              {/* Photo Container */}
              <div className="aspect-[4/5] w-full overflow-hidden relative bg-stone-100">
                <img
                  src={img.imageUrl}
                  alt={img.title}
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = asset('/images/korean_stars/bae_suzy.jpg');
                  }}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Instagram Handle Overlay Pill */}
                <div className="absolute bottom-2.5 left-2.5">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md text-white border border-white/20">
                    {img.handle || `@${img.name}`}
                  </span>
                </div>

                {/* Checkbox Badge */}
                <div className="absolute top-2.5 right-2.5">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                    isSelected
                      ? 'bg-black text-white shadow-md scale-110'
                      : 'bg-white/90 backdrop-blur-sm text-stone-400 border border-stone-300 group-hover:border-black shadow-xs'
                  }`}>
                    <Check className={`w-4 h-4 stroke-[3] ${isSelected ? 'opacity-100' : 'opacity-0'}`} />
                  </div>
                </div>
              </div>

              {/* Card Footer (Instagram Feed Aesthetic) */}
              <div className="p-3 bg-white border-t border-stone-100 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <p className="font-extrabold text-xs text-black truncate">
                      {img.name}
                    </p>
                    <span className="text-[9px] text-stone-600 font-bold whitespace-nowrap bg-stone-100 px-1.5 py-0.5 rounded">
                      {img.style}
                    </span>
                  </div>

                  <p className="text-[11px] text-stone-600 line-clamp-1 mb-2 font-medium">
                    {img.title}
                  </p>
                </div>

                {/* Element Tags */}
                <div className="flex flex-wrap gap-1">
                  {(img.elements || []).slice(0, 2).map((elem) => (
                    <span
                      key={elem}
                      className="text-[10px] px-1.5 py-0.5 rounded bg-stone-100 text-stone-700 font-medium"
                    >
                      #{elem}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Floating Bottom Sticky Bar for Next Step */}
      {selectedIds.length > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 md:left-[calc(50%+8rem)] z-40 w-[90%] max-w-xl animate-scale-up">
          <div className="bg-black text-white px-5 py-3.5 rounded-2xl shadow-2xl flex items-center justify-between gap-3 border border-stone-800">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-bold">
                {selectedIds.length}개 레퍼런스 수집 완료
              </span>
            </div>

            <button
              onClick={onAnalyzeDna}
              className="px-5 py-2.5 rounded-xl bg-white text-black font-extrabold text-xs hover:bg-stone-200 transition-all flex items-center gap-1.5 shadow-xs"
            >
              <span>추구미 진단서 확인</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
