import React from 'react';
import { X, Check, Calendar, ArrowRight, Sparkles, User, PlusCircle } from 'lucide-react';
import { PROJECT_TEMPLATES } from '../data/projectTemplates';

export default function ProjectSelectorModal({ 
  isOpen, 
  onClose, 
  activeProjectId, 
  onSelectProject, 
  onOpenConsultant 
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-editorial-black/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[92vh] animate-scale-up">
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-stone-200 flex items-center justify-between bg-stone-50">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800 text-[11px] font-bold mb-1 border border-stone-200">
              <Sparkles className="w-3 h-3 text-black" />
              <span>MULTI-PROJECT DECK</span>
            </div>
            <h2 className="text-lg sm:text-xl font-serif font-bold text-editorial-black">
              원하는 30일 뷰티 프로젝트 선택 & 전환
            </h2>
            <p className="text-xs text-stone-500">
              한 사람당 하나로 제한되지 않습니다. 내 스케줄과 목표에 맞추어 언제든 원하는 프로젝트로 변경하거나 추가할 수 있습니다.
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-400 hover:text-stone-700 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Project Cards Grid */}
        <div className="flex-1 overflow-y-auto p-5 space-y-3.5 bg-stone-50/60">
          {PROJECT_TEMPLATES.map((tmpl) => {
            const isActive = activeProjectId === tmpl.id;

            // count missions
            let missionCount = 0;
            tmpl.weeks.forEach(w => missionCount += w.missions.length);

            return (
              <div
                key={tmpl.id}
                onClick={() => {
                  onSelectProject(tmpl.id);
                  onClose();
                }}
                className={`p-4 sm:p-5 rounded-3xl border-2 transition-all cursor-pointer flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between bg-white ${
                  isActive
                    ? 'border-black ring-4 ring-stone-100 shadow-md'
                    : 'border-stone-200 hover:border-stone-400 hover:shadow-sm'
                }`}
              >
                {/* Left: Image & Info */}
                <div className="flex items-start sm:items-center gap-4">
                  <div className="w-16 h-20 sm:w-20 sm:h-24 rounded-2xl overflow-hidden shrink-0 border border-stone-200 relative">
                    <img
                      src={tmpl.coverImage}
                      alt={tmpl.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-1 right-1 bg-black/70 backdrop-blur-xs text-white text-[9px] px-1.5 py-0.2 rounded-md font-bold">
                      {tmpl.dDay}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] bg-stone-100 text-stone-700 px-2 py-0.5 rounded-full font-bold border border-stone-200">
                        {tmpl.category}
                      </span>
                      {isActive && (
                        <span className="text-[10px] bg-black text-white px-2 py-0.5 rounded-full font-bold shadow-2xs">
                          현재 진행 중
                        </span>
                      )}
                    </div>
                    <h3 className="font-bold text-sm sm:text-base text-editorial-black mb-1">
                      {tmpl.title}
                    </h3>
                    <p className="text-xs text-stone-500 line-clamp-1 mb-2">
                      {tmpl.description}
                    </p>

                    {/* Consultant Tag */}
                    <div className="flex items-center gap-2 text-[11px] text-stone-600">
                      <img
                        src={tmpl.consultant.avatar}
                        alt={tmpl.consultant.name}
                        className="w-5 h-5 rounded-full object-cover border border-stone-200"
                      />
                      <span>전담 디렉터: <strong className="text-stone-800">{tmpl.consultant.name}</strong></span>
                      <span className="text-stone-300">·</span>
                      <span>총 {missionCount}개 맞춤 미션</span>
                    </div>
                  </div>
                </div>

                {/* Right Action */}
                <div className="self-end sm:self-center shrink-0">
                  {isActive ? (
                    <div className="flex items-center gap-1 text-xs font-bold text-black bg-stone-100 px-3 py-1.5 rounded-full border border-stone-200">
                      <Check className="w-3.5 h-3.5 stroke-[3] text-black" />
                      <span>선택됨</span>
                    </div>
                  ) : (
                    <button
                      className="px-4 py-2 rounded-full bg-editorial-black text-white text-xs font-bold hover:bg-stone-800 transition-colors flex items-center gap-1 shadow-xs"
                    >
                      <span>이 프로젝트로 전환</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer: Consultant Connect Option */}
        <div className="p-4 bg-white border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-stone-600">
            <User className="w-4 h-4 text-black" />
            <span>원하는 맞춤형 프로젝트가 없으신가요? 1:1 컨설턴트에게 직접 맞춤 설계를 요청하세요.</span>
          </div>
          <button
            onClick={() => {
              onClose();
              onOpenConsultant();
            }}
            className="w-full sm:w-auto px-4 py-2 rounded-full border border-stone-300 bg-white hover:bg-stone-100 text-black text-xs font-bold transition-all flex items-center justify-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>1:1 뷰티 컨설턴트와 맞춤 프로젝트 설계하기</span>
          </button>
        </div>

      </div>
    </div>
  );
}
