import React, { useState } from 'react';
import { 
  Camera, 
  Sparkles, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight, 
  Share2, 
  Upload, 
  Trash2, 
  RotateCcw,
  CheckCircle2,
  Calendar,
  AlertCircle,
  ShieldCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function GlowUpLog({ 
  dnaData,
  beforePhoto,
  onUploadBefore,
  targetPhoto,
  onUploadTarget,
  afterPhoto,
  onUploadAfter,
  selectedImages = [],
  onGoToProject,
  onGoToDiscovery
}) {
  const [activeDayTab, setActiveDayTab] = useState('all');
  const [diaryNote, setDiaryNote] = useState('페이스라인 컷 이후로 이목구비가 훨씬 또렷해 보이고, 수분 밸런스가 잡혀서 주변에서 피부 결 좋아졌다는 소리를 듣고 있어요.');
  const [isSaved, setIsSaved] = useState(false);

  // File upload handlers
  const handleBeforeUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      onUploadBefore(url);
      confetti({ particleCount: 50, spread: 60 });
    }
  };

  const handleTargetUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      onUploadTarget(url);
      confetti({ particleCount: 40, spread: 50 });
    }
  };

  const handleAfterUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      onUploadAfter(url);
      confetti({ particleCount: 70, spread: 70 });
    }
  };

  const handleSaveDiary = () => {
    setIsSaved(true);
    confetti({ particleCount: 60, spread: 70 });
    setTimeout(() => setIsSaved(false), 2500);
  };

  // Progression calculation based on uploaded photos
  const styleMatchProgression = [
    { label: '본연의 결 정돈도', before: beforePhoto ? 68 : 50, current: afterPhoto ? 92 : 75, diff: afterPhoto ? '+24%' : '+7%' },
    { label: '이목구비 입체 윤곽', before: beforePhoto ? 62 : 45, current: afterPhoto ? 88 : 72, diff: afterPhoto ? '+26%' : '+10%' },
    { label: '추구미 무드 일치도', before: beforePhoto ? 55 : 40, current: afterPhoto ? 94 : 70, diff: afterPhoto ? '+39%' : '+15%' },
    { label: '헤어 & 스타일링 조화', before: beforePhoto ? 58 : 42, current: afterPhoto ? 89 : 71, diff: afterPhoto ? '+31%' : '+13%' },
  ];

  return (
    <div className="max-w-5xl mx-auto pb-36 font-sans">
      
      {/* Top Editorial Header Banner */}
      <div className="border-b border-stone-200 pb-6 mb-7">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-black text-white">
            07. GLOW-UP ARCHIVE
          </span>
          <span className="text-[11px] text-stone-500 font-semibold tracking-wider uppercase">
            BEFORE & AFTER TRANSFORMATION TRACKER
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-black mb-1.5">
              비포 / 애프터 외형 변화 아카이브
            </h1>
            <p className="text-xs sm:text-sm text-stone-600 max-w-2xl leading-relaxed">
              사전에 정해진 가짜 사진이 아닌, <strong>실제 나의 사진을 직접 등록하여 30일간의 변화</strong>를 추적하세요.<br className="hidden sm:inline" />
              시작 전 비포(Before), 지향하는 목표(Target), 완주 후 애프터(After) 사진을 비교 분석합니다.
            </p>
          </div>

          {/* Quick Step Status Pill */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-stone-100 text-stone-700 border border-stone-200">
              비포 등록: <strong className={beforePhoto ? "text-black font-extrabold" : "text-stone-400"}>
                {beforePhoto ? "완료됨 ✓" : "미등록"}
              </strong>
            </span>
          </div>
        </div>
      </div>

      {/* Guide Banner before starting 30-Day Consulting Roadmap */}
      {!beforePhoto && (
        <div className="mb-7 p-4 sm:p-5 bg-stone-50 rounded-2xl border-2 border-dashed border-stone-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-fade-in">
          <div className="flex items-start sm:items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-black text-white flex items-center justify-center shrink-0">
              <Camera className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-xs font-bold text-black">
                  30일 컨설팅 로드맵 시작 전 필수 단계
                </span>
                <span className="text-[10px] bg-black text-white px-2 py-0.2 rounded font-bold">
                  STEP 01
                </span>
              </div>
              <p className="text-xs text-stone-600">
                30일 후 나의 변화를 정확히 비교하기 위해, <strong>현재 얼굴 중심의 비포(Before) 사진</strong>을 먼저 등록해주세요.
              </p>
            </div>
          </div>
          <span className="text-[11px] text-stone-500 font-semibold self-end sm:self-center shrink-0">
            아래 비포 슬롯에 사진 첨부 ⬇
          </span>
        </div>
      )}

      {/* 3-COLUMN BEFORE / TARGET / AFTER DECK */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
        
        {/* 1. BEFORE SLOT (Day 1 시작 전 내 모습) */}
        <div className={`bg-white rounded-3xl p-5 sm:p-6 border transition-all ${
          !beforePhoto 
            ? 'border-2 border-black shadow-sm ring-2 ring-black/5' 
            : 'border-stone-200 shadow-xs'
        }`}>
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-extrabold text-black uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-black" />
              01. 비포 (BEFORE)
            </span>
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
              beforePhoto ? 'bg-black text-white' : 'bg-stone-100 text-stone-600'
            }`}>
              {beforePhoto ? '등록 완료' : '필수 등록'}
            </span>
          </div>

          <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-stone-100 border border-stone-200 relative mb-4 flex flex-col items-center justify-center group">
            {beforePhoto ? (
              <>
                <img
                  src={beforePhoto}
                  alt="My Before Photo"
                  className="w-full h-full object-cover"
                />
                {/* Overlay actions on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <label className="px-3 py-1.5 rounded-xl bg-white text-black text-xs font-bold cursor-pointer hover:bg-stone-100 shadow-md">
                    사진 교체
                    <input type="file" accept="image/*" onChange={handleBeforeUpload} className="hidden" />
                  </label>
                  <button
                    onClick={() => onUploadBefore(null)}
                    className="p-1.5 rounded-xl bg-black/80 text-white hover:bg-black shadow-md"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </>
            ) : (
              <label className="w-full h-full flex flex-col items-center justify-center p-6 text-center cursor-pointer hover:bg-stone-200/50 transition-colors">
                <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center mb-3 shadow-xs border border-stone-200">
                  <Camera className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-black mb-1">
                  + 비포 사진 업로드
                </span>
                <p className="text-[11px] text-stone-500 leading-snug">
                  클릭하여 시작 전 내 얼굴 사진을 등록하세요 (정면/측면 권장)
                </p>
                <input type="file" accept="image/*" onChange={handleBeforeUpload} className="hidden" />
              </label>
            )}
          </div>

          <div className="space-y-1 text-xs text-stone-600">
            <p className="font-bold text-black">DAY 1 시작 기준점</p>
            <p className="text-[11px] text-stone-500">
              {beforePhoto ? '성공적으로 비포 사진이 등록되었습니다.' : '정면 자연광 또는 거울 셀카 사진을 첨부해주세요.'}
            </p>
          </div>

          {/* CTA Button to proceed directly to 30-Day Project when Before is uploaded */}
          {beforePhoto && (
            <button
              onClick={onGoToProject}
              className="mt-4 w-full py-2.5 rounded-xl bg-black text-white hover:bg-stone-800 text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-xs"
            >
              <span>30일 로드맵 시작하기</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* 2. TARGET SLOT (내가 지향하는 추구미 목표 레퍼런스) */}
        <div className="bg-white rounded-3xl p-5 sm:p-6 border border-stone-200 shadow-xs">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-extrabold text-black uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-black" />
              02. 목표 (TARGET)
            </span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-stone-100 text-stone-700">
              추구미 레퍼런스
            </span>
          </div>

          <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-stone-100 border border-stone-200 relative mb-4 flex flex-col items-center justify-center group">
            {targetPhoto ? (
              <>
                <img
                  src={targetPhoto}
                  alt="Target Aesthetic Goal"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <label className="px-3 py-1.5 rounded-xl bg-white text-black text-xs font-bold cursor-pointer hover:bg-stone-100 shadow-md">
                    사진 교체
                    <input type="file" accept="image/*" onChange={handleTargetUpload} className="hidden" />
                  </label>
                  <button
                    onClick={() => onUploadTarget(null)}
                    className="p-1.5 rounded-xl bg-black/80 text-white hover:bg-black shadow-md"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </>
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center mb-3 shadow-xs border border-stone-200">
                  <Sparkles className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-black mb-1">
                  목표 추구미 이미지
                </span>
                <p className="text-[11px] text-stone-500 leading-snug mb-3">
                  내가 닮고 싶은 워너비 스타일 사진을 등록하거나 아카이브에서 가져오세요.
                </p>

                <div className="flex flex-col gap-2 w-full">
                  <label className="w-full py-1.5 px-3 rounded-lg bg-black text-white text-xs font-bold cursor-pointer hover:bg-stone-800 text-center">
                    + 직접 사진 업로드
                    <input type="file" accept="image/*" onChange={handleTargetUpload} className="hidden" />
                  </label>
                  <button
                    onClick={onGoToDiscovery}
                    className="w-full py-1.5 px-3 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold"
                  >
                    추구미 아카이브 선택
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="space-y-1 text-xs text-stone-600">
            <p className="font-bold text-black">
              {dnaData ? dnaData.archetype : '지향하는 추구미 목표'}
            </p>
            <p className="text-[11px] text-stone-500">
              {dnaData?.formula ? `공식: ${dnaData.formula}` : '워너비 얼굴형과 메이크업 분위기를 대조합니다.'}
            </p>
          </div>
        </div>

        {/* 3. AFTER SLOT (Day 30 완주 후 파이널 사진) */}
        <div className="bg-white rounded-3xl p-5 sm:p-6 border border-stone-200 shadow-xs">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-extrabold text-black uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              03. 애프터 (AFTER)
            </span>
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
              afterPhoto ? 'bg-black text-white' : 'bg-stone-100 text-stone-500'
            }`}>
              {afterPhoto ? '완주 기록됨' : 'D-30 완주 후'}
            </span>
          </div>

          <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-stone-100 border border-stone-200 relative mb-4 flex flex-col items-center justify-center group">
            {afterPhoto ? (
              <>
                <img
                  src={afterPhoto}
                  alt="My After Photo"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <label className="px-3 py-1.5 rounded-xl bg-white text-black text-xs font-bold cursor-pointer hover:bg-stone-100 shadow-md">
                    사진 교체
                    <input type="file" accept="image/*" onChange={handleAfterUpload} className="hidden" />
                  </label>
                  <button
                    onClick={() => onUploadAfter(null)}
                    className="p-1.5 rounded-xl bg-black/80 text-white hover:bg-black shadow-md"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </>
            ) : (
              <label className="w-full h-full flex flex-col items-center justify-center p-6 text-center cursor-pointer hover:bg-stone-200/50 transition-colors">
                <div className="w-12 h-12 rounded-full bg-white text-stone-400 flex items-center justify-center mb-3 shadow-xs border border-stone-200">
                  <Camera className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-stone-700 mb-1">
                  + 파이널 애프터 사진 업로드
                </span>
                <p className="text-[11px] text-stone-500 leading-snug">
                  30일 프로젝트를 완주한 후 청담 샵 스타일링 또는 화보 사진을 등록하세요.
                </p>
                <input type="file" accept="image/*" onChange={handleAfterUpload} className="hidden" />
              </label>
            )}
          </div>

          <div className="space-y-1 text-xs text-stone-600">
            <p className="font-bold text-black">DAY 30 나의 시그니처 룩</p>
            <p className="text-[11px] text-stone-500">
              {afterPhoto ? '비포 대비 정밀 일치도 분석이 완료되었습니다.' : '30일 루틴 완료 후 사진을 첨부하여 성장도를 비교합니다.'}
            </p>
          </div>
        </div>

      </div>

      {/* STYLE MATCH PROGRESSION DASHBOARD */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
          <div>
            <span className="text-[10px] font-black uppercase tracking-wider text-stone-400 flex items-center gap-1.5 mb-1">
              <TrendingUp className="w-3.5 h-3.5 text-black" />
              STYLE MATCH PROGRESSION
            </span>
            <h3 className="text-base sm:text-lg font-extrabold text-black">
              워너비 스타일과의 정밀 일치도 변화 지표
            </h3>
          </div>
          <span className="text-xs font-bold px-3 py-1.5 rounded-lg bg-stone-100 text-black border border-stone-200 self-start sm:self-auto">
            {afterPhoto ? '평균 +29.7% 일치도 향상' : beforePhoto ? '비포 데이터 분석 완료 (D-30 진행 중)' : '사진 등록 대기 중'}
          </span>
        </div>

        <div className="space-y-4">
          {styleMatchProgression.map((item) => (
            <div key={item.label} className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-xs sm:text-sm text-black">{item.label}</span>
                <div className="flex items-center gap-2 text-xs font-semibold">
                  <span className="text-stone-400">시작 ({item.before}%)</span>
                  <ArrowRight className="w-3 h-3 text-stone-400" />
                  <span className="font-extrabold text-black">현재 ({item.current}%)</span>
                  <span className="font-black text-black bg-white px-2 py-0.5 rounded border border-stone-300 text-[11px]">
                    {item.diff}
                  </span>
                </div>
              </div>

              {/* Progress track */}
              <div className="w-full h-2.5 bg-stone-200 rounded-full overflow-hidden relative">
                <div
                  className="h-full bg-stone-400 absolute left-0"
                  style={{ width: `${item.before}%` }}
                />
                <div
                  className="h-full bg-black rounded-full transition-all duration-700 relative"
                  style={{ width: `${item.current}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 30-Day Glow-Up Diary & Notes */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs mb-8">
        <h3 className="text-base font-extrabold text-black mb-2">
          30일 Glow-Up 소감 및 데일리 메모
        </h3>
        <p className="text-xs text-stone-500 mb-4">
          루틴을 실행하며 느낀 피부결, 모발, 메이크업의 변화를 솔직하게 기록하세요.
        </p>

        <textarea
          value={diaryNote}
          onChange={(e) => setDiaryNote(e.target.value)}
          rows={3}
          className="w-full p-4 rounded-2xl border border-stone-200 bg-stone-50 text-xs sm:text-sm text-black focus:outline-none focus:ring-2 focus:ring-black mb-3 leading-relaxed"
          placeholder="오늘의 메이크업 핏이나 피부 느낌을 자유롭게 적어보세요..."
        />

        <div className="flex items-center justify-between">
          <span className="text-xs text-stone-500 font-medium">
            {isSaved ? '✓ 성공적으로 저장되었습니다!' : '기록 내용은 다음 맞춤형 로드맵에 반영됩니다.'}
          </span>
          <button
            onClick={handleSaveDiary}
            className="px-5 py-2.5 rounded-xl bg-black hover:bg-stone-800 text-white text-xs font-bold transition-colors"
          >
            기록 저장하기
          </button>
        </div>
      </div>

    </div>
  );
}
