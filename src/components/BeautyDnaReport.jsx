import { asset } from '../utils/assetUrl';
import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  RefreshCcw, 
  Activity, 
  ChevronRight, 
  ShieldCheck,
  Zap,
  CheckCircle2
} from 'lucide-react';

export default function BeautyDnaReport({ 
  dnaData, 
  onGoToProject, 
  onGoToClinic, 
  onResetDiscovery 
}) {
  if (!dnaData) {
    return (
      <div className="text-center py-20 px-4">
        <p className="text-stone-500 mb-4 text-xs font-semibold">아직 분석된 추구미 진단 데이터가 없습니다.</p>
        <button
          onClick={onResetDiscovery}
          className="px-5 py-2.5 rounded-xl bg-black text-white text-xs font-bold"
        >
          레퍼런스 수집하러 가기
        </button>
      </div>
    );
  }

  const { vibes, keyElements, archetype, insight, formula } = dnaData;

  return (
    <div className="max-w-4xl mx-auto pb-32">
      
      {/* Top Banner (Editorial B&W) */}
      <div className="border-b border-stone-200 pb-6 mb-7">
        <div className="flex items-center gap-2 mb-2.5">
          <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-black text-white">
            03. ME:BE GAP & CHUGUMI DIAGNOSIS
          </span>
          <span className="text-[11px] text-stone-600 font-semibold tracking-wider uppercase">
            CHEONGDAM AESTHETIC EVALUATION
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-black mb-2">
          나만의 추구미 정밀 진단서
        </h1>
        <p className="text-xs sm:text-sm text-stone-600">
          선택하신 레퍼런스들의 골격, 눈매, 피부결 중복 데이터를 정밀 분석하여 도출된 당신의 공식 추구미 진단 결과입니다.
        </p>
      </div>

      {/* Main Archetype Diagnosis Card (High-End Pure Black & White) */}
      <div className="bg-black text-white rounded-3xl p-6 sm:p-10 shadow-luxury mb-8 border border-stone-800">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-stone-800">
          <span className="text-xs font-bold tracking-wider uppercase text-stone-400 flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-white" />
            공식 진단 아이덴티티 (AESTHETIC IDENTITY)
          </span>
          <span className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-stone-300 font-bold border border-white/10">
            신뢰도 98.6%
          </span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-2">
          {archetype}
        </h2>
        <div className="text-sm sm:text-base text-stone-300 font-semibold mb-6">
          핵심 수렴 공식: <span className="text-white underline decoration-stone-500 underline-offset-4">{formula}</span>
        </div>

        {/* AI Insight Statement */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 mb-8">
          <p className="text-[10px] text-stone-400 uppercase tracking-wider font-bold mb-1.5 flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-white" />
            CHEONGDAM CLINICAL INSIGHT
          </p>
          <p className="text-sm sm:text-base text-stone-100 leading-relaxed font-medium">
            “{insight}”
          </p>
        </div>

        {/* Spectrum Bars */}
        <div className="space-y-3.5">
          <p className="text-[11px] font-bold tracking-wider text-stone-400 uppercase">
            AESTHETIC SPECTRUM (추구미 지향 지수)
          </p>
          {vibes.map((item, index) => (
            <div key={item.name} className="space-y-1">
              <div className="flex justify-between text-xs font-medium">
                <span className={index === 0 ? "text-white font-bold" : "text-stone-400"}>
                  {item.name}
                </span>
                <span className={index === 0 ? "text-white font-bold" : "text-stone-500"}>
                  {item.score}%
                </span>
              </div>
              <div className="h-2 bg-stone-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-white transition-all duration-1000 rounded-full"
                  style={{ width: `${item.score}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ME:BE GAP ANALYSIS (도달가능미 vs 추구미 격차 분석) */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-black shadow-xs mb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[10px] bg-black text-white px-2.5 py-0.5 rounded font-black uppercase tracking-wider">
            ME : BE GAP ANALYSIS
          </span>
          <span className="text-xs font-bold text-stone-800">
            도달가능미(ME)와 추구미(BE)의 격차 축소 분석
          </span>
        </div>

        <p className="text-xs text-stone-600 leading-relaxed mb-6">
          ME:BE 아뜰리에의 본질은 도달 불가능한 워너비를 맹목적으로 쫓는 것이 아니라, <strong>내 본연의 골격과 자산(도달가능미: ME)</strong>을 바탕으로 <strong>이상적으로 지향하는 모습(추구미: BE)</strong> 사이의 격차를 좁혀가는 데 있습니다.
        </p>

        {/* 2-Column Real Photo Me vs Be Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {/* ME: 도달가능미 Card (User Real Photo) */}
          <div className="p-4 sm:p-5 rounded-2xl bg-stone-50 border border-stone-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-black text-black uppercase tracking-wider">
                  ME · 현재의 도달가능미
                </span>
                <span className="text-xs font-extrabold text-stone-800 bg-white px-2.5 py-0.5 rounded-md border border-stone-200">
                  {userBeforePhoto && faceScanData ? `현재 지수 ${faceScanData.score}점` : '미진단 (사진 필요)'}
                </span>
              </div>

              {/* Photo & Biometric telemetry */}
              <div className="flex items-center gap-3.5 mb-3.5">
                {userBeforePhoto ? (
                  <div className="relative shrink-0">
                    <img
                      src={userBeforePhoto}
                      alt="내 얼굴 분석 사진"
                      className="w-16 h-20 rounded-xl object-cover border border-stone-300 shadow-xs"
                    />
                    <span className="absolute -bottom-1.5 -right-1 bg-black text-white text-[9px] font-black px-1.5 py-0.2 rounded">
                      ME
                    </span>
                  </div>
                ) : (
                  <div 
                    onClick={onGoToFaceScan}
                    className="w-16 h-20 rounded-xl bg-stone-100 border border-dashed border-stone-400 flex flex-col items-center justify-center cursor-pointer hover:bg-stone-200 transition-colors shrink-0 p-1 text-center group"
                  >
                    <span className="text-[10px] font-bold text-stone-600 group-hover:text-black">+ 사진 등록</span>
                    <span className="text-[8px] text-stone-400">클릭 이동</span>
                  </div>
                )}

                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold text-stone-900 mb-0.5">
                    내 본연의 안면 골격 &amp; 피부 베이스
                  </p>
                  {userBeforePhoto && faceScanData ? (
                    <>
                      <p className="text-[11px] text-stone-600 leading-tight">
                        {faceScanData.faceShape || '내추럴 밸런스형'}
                      </p>
                      <p className="text-[10px] text-stone-500 mt-1 font-mono">
                        비율: {faceScanData.ratio} · 턱선: {faceScanData.jawAngle}
                      </p>
                    </>
                  ) : (
                    <p className="text-[11px] text-stone-500 leading-tight">
                      01. 내 얼굴 분석 탭에서 정면 사진을 등록하면 내 실제 골격 데이터가 계측됩니다.
                    </p>
                  )}
                </div>
              </div>

              <p className="text-[11px] text-stone-500 leading-relaxed">
                {userBeforePhoto && faceScanData 
                  ? (faceScanData.comment || '회원님의 본연 골격을 바탕으로 처방이 완료되었습니다.') 
                  : '사진 등록 전에는 도달가능미(ME) 점수가 산출되지 않습니다. 01단계에서 사진을 등록하여 격차를 확인하세요.'}
              </p>
            </div>

            {!userBeforePhoto && (
              <button
                onClick={onGoToFaceScan}
                className="mt-3 w-full py-2 rounded-lg bg-black hover:bg-stone-800 text-white text-[11px] font-bold transition-colors text-center"
              >
                01단계 내 사진 등록하고 정밀 스캔하기 ➔
              </button>
            )}
          </div>

          {/* BE: 추구미 Card (Selected Wannabe Photo) */}
          <div className="p-4 sm:p-5 rounded-2xl bg-black text-white border border-stone-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-black text-white uppercase tracking-wider">
                  BE · 지향하는 추구미
                </span>
                <span className="text-xs font-extrabold text-stone-200 bg-white/15 px-2.5 py-0.5 rounded-md border border-white/20">
                  목표 지수 96점
                </span>
              </div>

              {/* Wannabe Photo & Archetype */}
              <div className="flex items-center gap-3.5 mb-3.5">
                <div className="relative shrink-0">
                  <img
                    src={selectedImages?.[0]?.imageUrl || asset('/images/korean_stars/shin_se_kyung.jpg')}
                    alt="추구미 레퍼런스"
                    className="w-16 h-20 rounded-xl object-cover border border-white/20 shadow-xs"
                  />
                  <span className="absolute -bottom-1.5 -right-1 bg-white text-black text-[9px] font-black px-1.5 py-0.2 rounded">
                    BE
                  </span>
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold text-white mb-0.5">
                    {archetype} (Aspirational Identity)
                  </p>
                  <p className="text-[11px] text-stone-300 leading-tight">
                    {selectedImages?.[0]?.name ? `${selectedImages[0].name} 무드` : '워너비 아우라'}
                  </p>
                  <p className="text-[10px] text-stone-400 mt-1">
                    정돈된 수분 결 · 슬릭 턱선 · 가로 확장 눈매
                  </p>
                </div>
              </div>

              <p className="text-[11px] text-stone-400 leading-relaxed">
                정돈된 수분 결, 갸름하게 정리된 턱선과 또렷한 눈매 각도로 완성되는 회원님의 궁극적 시그니처 룩입니다.
              </p>
            </div>
          </div>
        </div>

        {/* GAP Convergence Action Steps */}
        <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-extrabold text-black">
              ⚡ 32%p 격차를 줄이기 위한 3단계 수렴 로드맵
            </span>
            <span className="text-xs font-bold text-emerald-600">
              최종 수렴 예상치: 93.8% 일치
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
            <div className="p-3 bg-white rounded-xl border border-stone-200">
              <span className="text-[10px] text-stone-400 font-bold block">1단계: 베이스 결 교정 (+11%p)</span>
              <p className="font-bold text-black mt-0.5">속건조 수분 패팩 & 장벽 세팅</p>
              <p className="text-[10px] text-stone-500 mt-1">두꺼운 커버 대신 투명한 톤업</p>
            </div>
            <div className="p-3 bg-white rounded-xl border border-stone-200">
              <span className="text-[10px] text-stone-400 font-bold block">2단계: 페이스라인 커트 (+12%p)</span>
              <p className="font-bold text-black mt-0.5">청담 살롱 사이드뱅 레이어드</p>
              <p className="text-[10px] text-stone-500 mt-1">광대 및 턱선 여백 30% 축소</p>
            </div>
            <div className="p-3 bg-white rounded-xl border border-stone-200">
              <span className="text-[10px] text-stone-400 font-bold block">3단계: 청담 전문 시술 (+9%p)</span>
              <p className="font-bold text-black mt-0.5">인모드 윤곽 & 눈매 듀얼트임</p>
              <p className="text-[10px] text-stone-500 mt-1">골격 비대칭 교정 및 15도 상승</p>
            </div>
          </div>
        </div>
      </div>

      {/* Repetitive Key Elements Grid */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-base font-extrabold text-black">
              반복 감지된 핵심 추구미 디테일
            </h3>
            <p className="text-xs text-stone-500">
              선택한 인스타 레퍼런스들 속에서 공통적으로 추출된 피부결, 눈매, 헤어라인 요소입니다.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {keyElements.map((elem, idx) => (
            <div 
              key={idx} 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-black transition-colors"
            >
              <span className="text-lg mb-1 block">{elem.emoji}</span>
              <p className="text-xs sm:text-sm font-bold text-black">{elem.title}</p>
              <p className="text-[10px] text-stone-500 mt-0.5">{elem.category}</p>
            </div>
          ))}
        </div>
      </div>

      {/* DIRECT BRIDGE TO PLASTIC SURGERY & CLINIC PROCEDURES */}
      <div className="mb-8 p-6 bg-stone-50 rounded-3xl border border-stone-200">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[10px] bg-black text-white px-2 py-0.5 rounded font-bold uppercase">
            MEDICAL SOLUTION
          </span>
          <span className="text-xs font-bold text-stone-800">
            추구미 완성을 위한 청담 성형외과 & 피부과 솔루션 제안
          </span>
        </div>
        <p className="text-xs text-stone-600 leading-relaxed mb-4">
          회원님의 골격 구조와 {archetype} 지향점에 따라, 홈케어 외에 병행 시 효과가 극대화되는 청담 전문의 추천 시술입니다.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 flex items-center justify-between">
            <div>
              <span className="text-[10px] text-stone-400 font-bold block">페이스라인 타이트닝</span>
              <p className="text-xs font-bold text-black">울쎄라 300샷 or 인모드 윤곽</p>
              <p className="text-[11px] text-stone-500">청담 르네상스 성형외과</p>
            </div>
            <span className="text-xs font-bold text-red-600">VIP 18% OFF</span>
          </div>

          <div className="p-3.5 bg-white rounded-xl border border-stone-200 flex items-center justify-between">
            <div>
              <span className="text-[10px] text-stone-400 font-bold block">눈매 가로 확장</span>
              <p className="text-xs font-bold text-black">15도 캣아이 듀얼트임</p>
              <p className="text-[11px] text-stone-500">청담 아이디성형외과</p>
            </div>
            <span className="text-xs font-bold text-red-600">VIP 17% OFF</span>
          </div>
        </div>

        <button
          onClick={onGoToClinic}
          className="w-full py-2.5 rounded-xl bg-white border border-stone-300 hover:border-black text-black font-bold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-2xs"
        >
          <Activity className="w-3.5 h-3.5" />
          <span>성형외과 & 피부과 전체 시술 둘러보고 상담 예약하기</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Bottom CTA Block */}
      <div className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500">
            NEXT ACTION PLAN
          </span>
          <h3 className="text-lg font-bold text-black mt-0.5">
            이 추구미를 실현하기 위한 30일 컨설팅 로드맵
          </h3>
          <p className="text-xs text-stone-500">
            피부 기초부터 청담 헤어살롱 예약, 메이크업 교정, 프로필 촬영까지 체계적으로 설계되었습니다.
          </p>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button
            onClick={onResetDiscovery}
            className="px-4 py-2.5 rounded-xl border border-stone-200 text-stone-700 text-xs font-semibold hover:bg-stone-100 transition-colors flex items-center justify-center gap-1"
          >
            <RefreshCcw className="w-3.5 h-3.5" />
            <span>재선택</span>
          </button>
          
          <button
            onClick={onGoToProject}
            className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-black text-white text-xs font-bold hover:bg-stone-800 transition-colors flex items-center justify-center gap-1.5 shadow-xs"
          >
            <span>30일 로드맵 실행</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

    </div>
  );
}
