import { asset } from '../utils/assetUrl';
import React, { useState, useMemo } from 'react';
import confetti from 'canvas-confetti';
import { 
  CheckCircle2, 
  Circle, 
  Sparkles, 
  Calendar as CalendarIcon, 
  ChevronDown, 
  ChevronUp, 
  ShoppingBag, 
  ArrowUpRight, 
  Trophy, 
  ExternalLink,
  Clock,
  Activity,
  MessageSquare,
  LayoutGrid,
  List,
  Check,
  Zap,
  ShieldCheck,
  Gift,
  Tag,
  Percent
} from 'lucide-react';

export default function BeautyProjectRoadmap({ 
  project, 
  allProjects = [],
  onSelectProject,
  onOpenProjectSelector,
  onOpenConsultant,
  onToggleMission, 
  onOpenBooking, 
  onAddToCart,
  onGoToGlowUp 
}) {
  const [viewMode, setViewMode] = useState('calendar'); // 'calendar' | 'list'
  const [selectedDay, setSelectedDay] = useState(1); // Default Day 1 (Start)
  const [selectedPhaseFilter, setSelectedPhaseFilter] = useState('all'); // 'all' | 1 | 2 | 3 | 4
  const [openWeeks, setOpenWeeks] = useState({ 1: true, 2: true, 3: true, 4: true });
  const [localCompletedDays, setLocalCompletedDays] = useState({}); // Initial 0 completed
  const [isPackageExpanded, setIsPackageExpanded] = useState(false);

  const toggleWeek = (wNum) => {
    setOpenWeeks(prev => ({ ...prev, [wNum]: !prev[wNum] }));
  };

  // Build full 30-day comprehensive timeline
  const full30Days = useMemo(() => {
    const days = [];
    const missionByDay = {};

    (project.weeks || []).forEach(w => {
      (w.missions || []).forEach(m => {
        missionByDay[m.day] = { ...m, weekNumber: w.weekNumber, weekTheme: w.theme };
      });
    });

    for (let d = 1; d <= 30; d++) {
      if (missionByDay[d]) {
        days.push(missionByDay[d]);
      } else {
        const weekNumber = Math.min(Math.ceil(d / 7), 4);
        let category = '루틴';
        let title = '';
        let desc = '';
        let actionType = 'routine';
        let relatedItem = null;

        if (d <= 7) {
          // Week 1: Base & Skin
          if (d === 2) {
            category = '페이스케어';
            title = '저녁 림프 순환 & 턱선 괄사 마사지 10분';
            desc = '턱밑 림프절과 승모근 라인을 부드럽게 이완하여 아침 붓기를 사전 차단합니다.';
          } else if (d === 4) {
            category = '살롱예약';
            title = '얼굴형 맞춤 페이스라인 컷 & 헤어살롱 스케줄 예약';
            desc = '광대와 턱선을 보완하는 청담 수석 실장의 1:1 커트 상담을 예약합니다.';
            actionType = 'book';
            relatedItem = { category: 'hair', name: '살롱 드 블랑 청담 (페이스라인 컷)', price: 65000, tag: '헤어살롱 예약' };
          } else if (d === 6) {
            category = '스킨케어';
            title = '수분 앰플 3회 레이어링 & 야간 수면팩 케어';
            desc = '속건조를 완전히 밀폐하여 다음 날 매끄러운 피부 결을 형성합니다.';
            actionType = 'shop';
            relatedItem = { category: 'beauty', name: '하이드라 워터 앰플 (50ml)', price: 34000, tag: '화장품' };
          } else {
            category = '루틴';
            title = 'W1 피부 결 & 수분 밸런스 셀프 체크';
            desc = '7일간의 기초 루틴 후 피부 당김과 결 정돈 상태를 점검하고 셀카로 기록합니다.';
          }
        } else if (d <= 14) {
          // Week 2: Contour & Makeup
          if (d === 8) {
            category = '윤곽케어';
            title = '아침 붓기 컷팅 페이스 스트레칭 & 아이 마사지';
            desc = '눈 주변 혈점을 지압하여 눈매 붓기를 빠르게 제거하고 또렷함을 확보합니다.';
          } else if (d === 10) {
            category = '메디컬상담';
            title = '청담 피부과 맞춤 윤곽 & 스킨부스터 1:1 상담';
            desc = '골격 비대칭 및 탄력 저하를 보완하기 위한 전문의 시술 플랜을 점검합니다.';
            actionType = 'clinic';
          } else if (d === 11) {
            category = '치크/블러셔';
            title = '양 볼 생기 수채화 톤온톤 치크 블렌딩';
            desc = '얼굴형에 맞춰 광대 중앙부터 관자놀이 방향으로 은은하게 연결합니다.';
            actionType = 'shop';
            relatedItem = { category: 'beauty', name: '소프트 크림 블러셔 #01 내추럴', price: 22000, tag: '화장품' };
          } else if (d === 13) {
            category = '아이메이크업';
            title = '눈매 가로 확장 음영 라이너 & 삼각존 채우기';
            desc = '눈꼬리 각도를 조절하여 이상적인 비율의 눈매 라인을 교정합니다.';
          } else {
            category = '루틴';
            title = 'W2 메이크업 조화도 중간 점검 & 피드백';
            desc = '완성된 베이스와 눈매의 조화를 자연광 아래에서 확인하고 디렉터와 공유합니다.';
          }
        } else if (d <= 21) {
          // Week 3: Salon & Clinic
          if (d === 15) {
            category = '헤어살롱';
            title = '예약된 청담 살롱 방문 & 페이스라인 컷 시술';
            desc = '얼굴형을 가장 작고 입체적으로 보이게 하는 맞춤 기장 커트를 완성합니다.';
            actionType = 'book';
            relatedItem = { category: 'hair', name: '살롱 드 블랑 청담 (페이스라인 컷)', price: 65000, tag: '헤어살롱 예약' };
          } else if (d === 17) {
            category = '바디라인';
            title = '승모근 다운 & 일자 쇄골 스트레칭 15분';
            desc = '어깨와 목선을 곧게 펴주어 어떤 옷을 입어도 단정한 실루엣을 만듭니다.';
          } else if (d === 18) {
            category = '립케어';
            title = '도톰한 입술 볼륨을 위한 립 스크럽 & 플럼핑';
            desc = '각질 없는 매끈한 립 라인에 수분을 공급하여 볼륨감을 채웁니다.';
            actionType = 'shop';
            relatedItem = { category: 'beauty', name: '글레이즈 듀 틴트 #01 누디코랄', price: 21000, tag: '화장품' };
          } else if (d === 20) {
            category = '홈살롱';
            title = '살롱 딥 프로틴 헤어 마스크 모발 영양 공급';
            desc = '찰랑이는 모발 텍스처를 유지하기 위해 스팀 타월과 함께 영양을 채웁니다.';
          } else {
            category = '루틴';
            title = 'W3 살롱 헤어스타일 유지 & 눈매 밸런스 체크';
            desc = '커트 후 스타일링 재현도를 셀프로 테스트하고 최종 화보 컨셉을 확정합니다.';
          }
        } else {
          // Week 4: Climax & Profile Shoot
          if (d === 22) {
            category = '스튜디오예약';
            title = '인생 화보 스튜디오 촬영 일정 & 의상 3착 확정';
            desc = '나의 추구미를 가장 극대화할 수 있는 스튜디오 콘셉트와 착장을 점검합니다.';
            actionType = 'book';
            relatedItem = { category: 'studio', name: '스튜디오 무드인 성수 (내추럴 뷰티 프로필)', price: 180000, tag: '프로필 촬영' };
          } else if (d === 23) {
            category = '스타일링';
            title = '화보 촬영용 메이크업 컬러 & 헤어 악세서리 피팅';
            desc = '조명 아래에서 가장 고급스럽게 표현되는 톤온톤 무드를 최종 테스트합니다.';
          } else if (d === 24) {
            category = '집중케어';
            title = 'D-6 피부 긴급 진정 & 수분 앰플 팩 집중 공급';
            desc = '피부 트러블을 예방하고 최상의 컨디션을 위해 저염식과 수분 섭취를 유지합니다.';
          } else if (d === 25) {
            category = '페이스라인';
            title = '청담 에스테틱 페이스 윤곽 림프 집중 테라피';
            desc = '촬영 전 얼굴 라인을 매끄럽게 정돈하기 위해 붓기를 집중적으로 배출합니다.';
          } else if (d === 26) {
            category = '디테일';
            title = '네일 케어 & 헤어 잔머리 픽싱 디테일 점검';
            desc = '클로즈업 샷에서도 완벽하도록 손끝과 잔머리 한 올까지 단정하게 정리합니다.';
          } else if (d === 27) {
            category = '수면관리';
            title = 'D-1 최상의 컨디션을 위한 8시간 숙면 & 수분 충전';
            desc = '촬영 전날 밤 자극적인 케어는 피하고 진정 수분 팩으로 마무리 후 일찍 취침합니다.';
          } else if (d === 29) {
            category = '셀렉트';
            title = '화보 촬영 원본 셀렉 & 1차 정밀 보정 요청';
            desc = '내 추구미가 가장 자연스럽게 돋보이는 베스트 컷 3장을 선정합니다.';
          } else if (d === 30) {
            category = '파이널완주';
            title = '30일 비포/애프터 Glow-Up 리포트 확인 & 완주 인증';
            desc = 'Day 1부터 달라진 나의 피부결, 눈매, 분위기 전체 변화를 아카이브에 영구 기록합니다.';
            actionType = 'glowup';
          }
        }

        days.push({
          id: `routine-d${d}`,
          day: d,
          category,
          title,
          desc,
          completed: localCompletedDays[d] || false,
          actionType,
          relatedItem,
          weekNumber,
          weekTheme: `WEEK ${weekNumber}`
        });
      }
    }

    return days;
  }, [project, localCompletedDays]);

  // Is day completed helper
  const isDayCompleted = (dayObj) => {
    if (dayObj.id && dayObj.id.startsWith('routine-d')) {
      return !!localCompletedDays[dayObj.day];
    }
    return !!dayObj.completed;
  };

  // Toggle mission completion for any day
  const handleToggleDayMission = (dayObj) => {
    const wasCompleted = isDayCompleted(dayObj);
    if (!wasCompleted) {
      confetti({
        particleCount: 55,
        spread: 60,
        origin: { y: 0.7 }
      });
    }

    if (dayObj.id && dayObj.id.startsWith('routine-d')) {
      setLocalCompletedDays(prev => ({
        ...prev,
        [dayObj.day]: !prev[dayObj.day]
      }));
    } else {
      onToggleMission(dayObj.id);
    }
  };

  // Current selected day object
  const currentDayMission = useMemo(() => {
    return full30Days.find(d => d.day === selectedDay) || full30Days[0];
  }, [full30Days, selectedDay]);

  // Filtered days for calendar/list
  const displayedDays = useMemo(() => {
    if (selectedPhaseFilter === 'all') return full30Days;
    return full30Days.filter(d => d.weekNumber === Number(selectedPhaseFilter));
  }, [full30Days, selectedPhaseFilter]);

  // Total completed days count
  const completedDaysCount = full30Days.filter(d => isDayCompleted(d)).length;
  const completionPercent = Math.round((completedDaysCount / 30) * 100);

  const consultant = project.consultant || {
    name: '김유진 수석 실장',
    role: '청담 살롱 아티스트 & 비주얼 디렉터',
    avatar: asset('/images/korean_stars/karina.jpg'),
    badge: '1:1 전담 디렉터',
    status: '실시간 피드백 진행 중'
  };

  return (
    <div className="max-w-5xl mx-auto pb-36 font-sans">
      
      {/* 1. MULTI-PROJECT SWITCHER BAR (Clean High-End Monochrome) */}
      <div className="mb-7 bg-white p-3.5 sm:p-4 rounded-2xl border border-stone-200 shadow-xs">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 mb-3">
          <div className="flex items-center gap-2 text-xs font-bold text-black">
            <Sparkles className="w-3.5 h-3.5 text-black" />
            <span>내 진행 프로젝트 서재 (Multi-Project Deck)</span>
            <span className="text-[11px] text-stone-500 font-medium">· 언제든 프로젝트 자유 전환</span>
          </div>
          <button
            onClick={onOpenProjectSelector}
            className="text-xs text-black hover:text-stone-700 font-bold flex items-center gap-1 bg-stone-50 hover:bg-stone-100 px-3 py-1.5 rounded-lg border border-stone-200 transition-colors"
          >
            <span>+ 전체 프로젝트 둘러보기</span>
            <ArrowUpRight className="w-3 h-3 text-stone-600" />
          </button>
        </div>

        {/* Project Quick Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {allProjects.map((p) => {
            const isActive = p.id === project.id;
            return (
              <button
                key={p.id}
                onClick={() => onSelectProject && onSelectProject(p.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-black text-white font-bold shadow-xs'
                    : 'bg-stone-50 text-stone-600 border border-stone-200 hover:bg-stone-100 hover:text-black'
                }`}
              >
                <span>{p.shortTitle || p.title}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${
                  isActive ? 'bg-white/20 text-white font-bold' : 'bg-stone-200 text-stone-600'
                }`}>
                  {p.dDay || 'D-30'}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Top Header Banner */}
      <div className="border-b border-stone-200 pb-6 mb-7">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-black text-white">
            04. ACTION ROADMAP
          </span>
          <span className="text-[11px] text-stone-500 font-semibold tracking-wider uppercase">
            CHEONGDAM 30-DAY MASTER PLAN
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-black mb-1.5">
              {project.title}
            </h1>
            <p className="text-xs sm:text-sm text-stone-600 max-w-2xl leading-relaxed">
              {project.description}
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs text-stone-600 font-semibold">
              30일 완주 현황: <strong className="text-black font-extrabold">{completedDaysCount} / 30일</strong> ({completionPercent}%)
            </span>
          </div>
        </div>
      </div>

      {/* 3. PRIMARY VIEW: 30-DAY MASTER CALENDAR (SHOWN FIRST!) */}
      <div className="bg-white rounded-3xl border border-stone-200 p-5 sm:p-7 shadow-xs mb-8">
        
        {/* Calendar Top Control Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-stone-100 mb-5">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-black text-white flex items-center justify-center">
              <CalendarIcon className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-extrabold text-black tracking-tight">
                30일 마스터 컨설팅 캘린더
              </h2>
              <p className="text-xs text-stone-500">
                Day 1 기초 세팅부터 Day 30 최종 화보 촬영까지 30일간의 전체 일정을 한눈에 확인하세요.
              </p>
            </div>
          </div>

          {/* View Toggle Buttons */}
          <div className="flex items-center gap-1.5 p-1 bg-stone-100 rounded-xl border border-stone-200 shrink-0">
            <button
              onClick={() => setViewMode('calendar')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                viewMode === 'calendar'
                  ? 'bg-black text-white shadow-xs'
                  : 'text-stone-600 hover:text-black'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>전체 달력 뷰</span>
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                viewMode === 'list'
                  ? 'bg-black text-white shadow-xs'
                  : 'text-stone-600 hover:text-black'
              }`}
            >
              <List className="w-3.5 h-3.5" />
              <span>주차별 리스트 뷰</span>
            </button>
          </div>
        </div>

        {/* Phase Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-5 scrollbar-none">
          <button
            onClick={() => setSelectedPhaseFilter('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
              selectedPhaseFilter === 'all'
                ? 'bg-stone-900 text-white font-bold'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            전체 30일 조망
          </button>
          <button
            onClick={() => setSelectedPhaseFilter(1)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
              selectedPhaseFilter === 1
                ? 'bg-stone-900 text-white font-bold'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            W1. 기초 & 베이스 (Day 1~7)
          </button>
          <button
            onClick={() => setSelectedPhaseFilter(2)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
              selectedPhaseFilter === 2
                ? 'bg-stone-900 text-white font-bold'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            W2. 윤곽 & 메이크업 (Day 8~14)
          </button>
          <button
            onClick={() => setSelectedPhaseFilter(3)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
              selectedPhaseFilter === 3
                ? 'bg-stone-900 text-white font-bold'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            W3. 청담 살롱 & 케어 (Day 15~21)
          </button>
          <button
            onClick={() => setSelectedPhaseFilter(4)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
              selectedPhaseFilter === 4
                ? 'bg-stone-900 text-white font-bold'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            W4. 피니시 & 화보 (Day 22~30)
          </button>
        </div>

        {/* 30-DAY INTERACTIVE CALENDAR GRID */}
        {viewMode === 'calendar' ? (
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2.5 mb-7">
            {displayedDays.map((d) => {
              const isSelected = selectedDay === d.day;
              const completed = isDayCompleted(d);
              const isToday = d.day === 1;

              return (
                <div
                  key={d.day}
                  onClick={() => setSelectedDay(d.day)}
                  className={`p-3 rounded-2xl border text-left cursor-pointer transition-all flex flex-col justify-between min-h-[92px] relative ${
                    isSelected
                      ? 'border-2 border-black bg-stone-50/90 shadow-sm scale-[1.02] ring-2 ring-black/5'
                      : completed
                        ? 'border-stone-200 bg-white hover:border-stone-400'
                        : 'border-stone-200 bg-white hover:border-black/60 hover:bg-stone-50/50'
                  }`}
                >
                  {/* Top Bar inside cell: Day number + Today / Check indicator */}
                  <div className="flex items-center justify-between gap-1 mb-1.5">
                    <span className={`text-xs font-black font-mono tracking-tight ${
                      isSelected ? 'text-black font-black' : 'text-stone-800'
                    }`}>
                      D-{d.day < 10 ? `0${d.day}` : d.day}
                    </span>

                    <div className="flex items-center gap-1">
                      {isToday && (
                        <span className="text-[9px] bg-black text-white px-1.5 py-0.2 rounded font-black tracking-tight leading-tight">
                          TODAY
                        </span>
                      )}
                      {completed ? (
                        <div className="w-4 h-4 rounded-full bg-black text-white flex items-center justify-center">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                      ) : (
                        <div className="w-3.5 h-3.5 rounded-full border border-stone-300" />
                      )}
                    </div>
                  </div>

                  {/* Micro Category Pill */}
                  <div className="mb-1">
                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                      isSelected 
                        ? 'bg-black text-white' 
                        : 'bg-stone-100 text-stone-700'
                    }`}>
                      {d.category}
                    </span>
                  </div>

                  {/* Mission Title snippet */}
                  <p className={`text-[11px] leading-snug line-clamp-2 ${
                    completed ? 'text-stone-400 line-through' : 'text-stone-800 font-medium'
                  }`}>
                    {d.title}
                  </p>
                </div>
              );
            })}
          </div>
        ) : (
          /* LIST VIEW */
          <div className="space-y-2.5 mb-7">
            {displayedDays.map((d) => {
              const isSelected = selectedDay === d.day;
              const completed = isDayCompleted(d);
              const isToday = d.day === 1;

              return (
                <div
                  key={d.day}
                  onClick={() => setSelectedDay(d.day)}
                  className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                    isSelected
                      ? 'border-2 border-black bg-stone-50 shadow-xs'
                      : 'border-stone-200 bg-white hover:border-stone-300'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleToggleDayMission(d);
                      }}
                      className="text-stone-400 hover:text-black transition-colors shrink-0"
                    >
                      {completed ? (
                        <CheckCircle2 className="w-5 h-5 text-black" />
                      ) : (
                        <Circle className="w-5 h-5 text-stone-300 hover:text-stone-500" />
                      )}
                    </button>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-xs font-mono font-black text-black">DAY {d.day}</span>
                        {isToday && (
                          <span className="text-[9px] bg-black text-white px-1.5 py-0.2 rounded font-black">TODAY</span>
                        )}
                        <span className="text-[10px] bg-stone-100 text-stone-700 px-2 py-0.2 rounded font-bold">
                          {d.category}
                        </span>
                      </div>
                      <p className={`text-xs sm:text-sm font-bold truncate ${completed ? 'line-through text-stone-400' : 'text-black'}`}>
                        {d.title}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedDay(d.day)}
                    className="text-xs font-bold px-3 py-1 rounded-lg border border-stone-200 hover:border-black text-black bg-white shrink-0"
                  >
                    상세보기
                  </button>
                </div>
              );
            })}
          </div>
        )}

        {/* 4. SELECTED DAY INSPECTOR / DETAIL FOCUS CARD */}
        {currentDayMission && (
          <div className="p-5 sm:p-6 bg-stone-50 rounded-2xl border border-stone-200 animate-fade-in">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              
              {/* Left Details */}
              <div className="space-y-2 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-black font-mono px-2.5 py-0.5 rounded-full bg-black text-white">
                    DAY {currentDayMission.day}
                  </span>
                  {currentDayMission.day === 1 && (
                    <span className="text-xs font-black px-2.5 py-0.5 rounded-full bg-stone-200 text-black">
                      TODAY'S PRIORITY
                    </span>
                  )}
                  <span className="text-xs font-bold text-stone-700 bg-white px-2.5 py-0.5 rounded-full border border-stone-200">
                    #{currentDayMission.category}
                  </span>
                  <span className="text-xs text-stone-500 font-medium">
                    {currentDayMission.weekTheme || `WEEK ${currentDayMission.weekNumber}`}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-black">
                  {currentDayMission.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-2xl">
                  {currentDayMission.desc}
                </p>

                {/* Consultant Coaching Note */}
                <div className="mt-3 p-3.5 bg-white rounded-xl border border-stone-200 flex items-start gap-2.5">
                  <img
                    src={consultant.avatar}
                    alt={consultant.name}
                    className="w-7 h-7 rounded-full object-cover border border-stone-200 shrink-0 mt-0.5"
                  />
                  <div>
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="text-xs font-bold text-black">{consultant.name}</span>
                      <span className="text-[10px] text-stone-500 font-medium">1:1 코칭 가이드</span>
                    </div>
                    <p className="text-xs text-stone-700 leading-relaxed">
                      “회원님의 지향 추구미 완성에 있어 D-{currentDayMission.day} 과정은 필수 관문입니다. 루틴 실행 후 궁금한 점은 언제든 1:1 상담창에 남겨주세요.”
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Action Controls */}
              <div className="flex flex-col sm:flex-row md:flex-col gap-2 shrink-0 md:min-w-[200px]">
                {/* Complete Checkbox Button */}
                <button
                  onClick={() => handleToggleDayMission(currentDayMission)}
                  className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                    isDayCompleted(currentDayMission)
                      ? 'bg-black text-white'
                      : 'bg-white border border-stone-300 hover:border-black text-stone-900 shadow-2xs'
                  }`}
                >
                  <Check className="w-4 h-4" />
                  <span>
                    {isDayCompleted(currentDayMission) ? '미션 완료됨 (취소)' : '미션 완료 체크'}
                  </span>
                </button>

                {/* Contextual Action Button */}
                {currentDayMission.actionType === 'shop' && currentDayMission.relatedItem && (
                  <button
                    onClick={() => onAddToCart(currentDayMission.relatedItem)}
                    className="w-full py-2.5 px-4 rounded-xl bg-black text-white hover:bg-stone-800 text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>{currentDayMission.relatedItem.price.toLocaleString()}원 제품 구매</span>
                  </button>
                )}

                {currentDayMission.actionType === 'book' && currentDayMission.relatedItem && (
                  <button
                    onClick={() => onOpenBooking(currentDayMission.relatedItem)}
                    className="w-full py-2.5 px-4 rounded-xl bg-black text-white hover:bg-stone-800 text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <CalendarIcon className="w-3.5 h-3.5" />
                    <span>청담 살롱 예약하기</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                )}

                {currentDayMission.actionType === 'clinic' && (
                  <button
                    onClick={() => onOpenBooking({
                      name: '청담 성형외과 & 피부과 전문의 1:1 진료 상담',
                      category: 'clinic',
                      price: 30000
                    })}
                    className="w-full py-2.5 px-4 rounded-xl bg-black text-white hover:bg-stone-800 text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <Activity className="w-3.5 h-3.5" />
                    <span>전문의 시술 상담 예약</span>
                  </button>
                )}

                {currentDayMission.actionType === 'glowup' && (
                  <button
                    onClick={onGoToGlowUp}
                    className="w-full py-2.5 px-4 rounded-xl bg-black text-white hover:bg-stone-800 text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>최종 Glow-Up 리포트</span>
                  </button>
                )}

                {/* 1:1 Consultant Chat Button */}
                <button
                  onClick={onOpenConsultant}
                  className="w-full py-2 px-3 rounded-xl border border-stone-200 bg-white hover:bg-stone-100 text-stone-700 text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-stone-500" />
                  <span>1:1 디렉터에게 질문</span>
                </button>
              </div>

            </div>
          </div>
        )}

      </div>

      {/* 5. OVERALL PROGRESS & METRICS (STRICT MONOCHROME - ZERO PINK) */}
      <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-xs mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
          <div>
            <span className="text-[10px] font-black uppercase tracking-wider text-stone-400 flex items-center gap-1.5 mb-1">
              <Trophy className="w-3.5 h-3.5 text-black" />
              OVERALL PROJECT PROGRESS
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-black text-black">
                {completionPercent}%
              </span>
              <span className="text-xs text-stone-500 font-semibold">
                ({completedDaysCount} / 30일 루틴 완료)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="px-3.5 py-2 rounded-xl bg-stone-100 border border-stone-200">
              <p className="text-[10px] text-stone-500 font-bold uppercase">현재 단계</p>
              <p className="text-xs font-extrabold text-black">WEEK 1 — BASE</p>
            </div>
            <div className="px-3.5 py-2 rounded-xl bg-stone-100 border border-stone-200">
              <p className="text-[10px] text-stone-500 font-bold uppercase">남은 기간</p>
              <p className="text-xs font-extrabold text-black">{project.dDay || 'D-26'}</p>
            </div>
          </div>
        </div>

        {/* Clean Sleek Black Progress Bar */}
        <div className="w-full h-2.5 bg-stone-100 rounded-full overflow-hidden p-0.5 border border-stone-200">
          <div
            className="h-full rounded-full bg-black transition-all duration-700 ease-out"
            style={{ width: `${Math.max(completionPercent, 4)}%` }}
          />
        </div>
      </div>

      {/* 6. CHEONGDAM ROADMAP AFFILIATED ALL-IN-ONE 4-IN-1 VIP PACKAGE CARD */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-black shadow-sm mb-8 relative overflow-hidden">
        {/* Top Header Badge & Title */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 pb-5 border-b border-stone-200">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-md bg-black text-white flex items-center gap-1">
                <Gift className="w-3 h-3" />
                CHEONGDAM VIP BUNDLE
              </span>
              <span className="text-[11px] font-bold text-black bg-stone-100 px-2 py-0.5 rounded-md border border-stone-200">
                로드맵 등록 회원 전용 32% 특별 할인 패키지
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-black tracking-tight">
              청담 로드맵 제휴 4-in-1 올인원 VIP 패키지
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
              30일 로드맵 일정에 맞춰 <strong className="text-black font-extrabold">[전문의 시술 + 페이스라인 컷 + 1:1 수석 디렉터 + 인생 화보 프로필]</strong>을 단일 번들로 묶어 정가 대비 <strong className="text-black font-extrabold">45만원 할인</strong>된 VIP 패키지가로 제공합니다.
            </p>
          </div>

          {/* Pricing Box */}
          <div className="sm:text-right bg-stone-50 p-4 rounded-2xl border border-stone-200 shrink-0">
            <div className="flex sm:justify-end items-center gap-2 mb-1">
              <span className="text-xs text-stone-400 line-through">개별 정가 1,390,000원</span>
              <span className="text-xs font-black px-2 py-0.5 bg-black text-white rounded-md">
                32% VIP SAVE
              </span>
            </div>
            <div className="flex sm:justify-end items-baseline gap-1.5">
              <span className="text-2xl sm:text-3xl font-black text-black font-mono">
                940,000
              </span>
              <span className="text-xs font-bold text-stone-600">원</span>
            </div>
            <p className="text-[11px] text-stone-500 mt-1">
              슬롯 확정 예약금 <strong className="text-black">50,000원</strong> 선결제 (방문 시 전액 차감)
            </p>
          </div>
        </div>

        {/* 4 Bundle Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider block mb-1">
                01. 전문의 시술
              </span>
              <h4 className="font-extrabold text-xs sm:text-sm text-black mb-1">
                청담 피부과/성형외과 맞춤 시술
              </h4>
              <p className="text-[11px] text-stone-600 leading-relaxed mb-3">
                울쎄라 300샷 or 쥬베룩 볼륨 4cc 중 내 골격/피부 진단에 맞춘 전문의 시술 1회
              </p>
            </div>
            <div className="pt-2.5 border-t border-stone-200 flex items-center justify-between text-[11px]">
              <span className="text-stone-500">개별 정가</span>
              <span className="font-bold text-stone-800">750,000원</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider block mb-1">
                02. 살롱 헤어
              </span>
              <h4 className="font-extrabold text-xs sm:text-sm text-black mb-1">
                살롱 드 블랑 페이스라인 컷
              </h4>
              <p className="text-[11px] text-stone-600 leading-relaxed mb-3">
                중안부 보완 맞춤 레이어드 컷 + 청담 두피 스팀 헤드스파 40분 케어
              </p>
            </div>
            <div className="pt-2.5 border-t border-stone-200 flex items-center justify-between text-[11px]">
              <span className="text-stone-500">개별 정가</span>
              <span className="font-bold text-stone-800">160,000원</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider block mb-1">
                03. 1:1 디렉팅
              </span>
              <h4 className="font-extrabold text-xs sm:text-sm text-black mb-1">
                수석 비주얼 디렉터 4주 전담
              </h4>
              <p className="text-[11px] text-stone-600 leading-relaxed mb-3">
                주차별 1:1 사진 진단 및 실시간 메신저 피드백, 제휴 병원 사전 차트 인계
              </p>
            </div>
            <div className="pt-2.5 border-t border-stone-200 flex items-center justify-between text-[11px]">
              <span className="text-stone-500">개별 정가</span>
              <span className="font-bold text-stone-800">280,000원</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider block mb-1">
                04. 인생 화보
              </span>
              <h4 className="font-extrabold text-xs sm:text-sm text-black mb-1">
                스튜디오 무드인 성수 프로필
              </h4>
              <p className="text-[11px] text-stone-600 leading-relaxed mb-3">
                3착 의상 촬영, 전체 원본 파일 제공 + 수석 실장 최고급 정밀 보정 3장
              </p>
            </div>
            <div className="pt-2.5 border-t border-stone-200 flex items-center justify-between text-[11px]">
              <span className="text-stone-500">개별 정가</span>
              <span className="font-bold text-stone-800">200,000원</span>
            </div>
          </div>
        </div>

        {/* Benefits Guarantee Bar & Action Buttons */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-4 border-t border-stone-200">
          <div className="flex items-center gap-3 text-xs text-stone-600">
            <div className="w-8 h-8 rounded-xl bg-stone-100 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4 text-black" />
            </div>
            <div>
              <p className="font-bold text-black">ME:BE 아뜰리에 VIP 개런티</p>
              <p className="text-[11px] text-stone-500">로드맵 30일 일정에 맞춰 병원/살롱 스케줄 원스톱 조율 · 사전 진단 리포트 원장 인계</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <button
              onClick={() => onOpenBooking({
                name: '청담 로드맵 제휴 올인원 4-in-1 VIP 패키지 [성형/피부 + 헤어 + 디렉터 + 화보]',
                category: 'package',
                price: 50000,
                deposit: 50000,
                originalPrice: 940000,
                regularPrice: 1390000,
                discountRate: '32% VIP 패키지 특가'
              })}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-black text-white text-xs font-black hover:bg-stone-800 transition-all flex items-center justify-center gap-2 shadow-md hover:scale-[1.01]"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span>올인원 VIP 패키지 예약하기 (예약금 50,000원)</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* 7. 1:1 ASSIGNED CONSULTANT CARD (PURE LUXURY BLACK & WHITE - ZERO PINK) */}
      <div className="bg-black text-white rounded-3xl p-6 sm:p-7 shadow-luxury mb-8 border border-stone-800 relative overflow-hidden">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 relative z-10">
          <div className="flex items-center gap-4">
            <div className="relative shrink-0">
              <img
                src={consultant.avatar}
                alt={consultant.name}
                className="w-14 h-14 rounded-2xl object-cover border border-white/20 shadow-md"
              />
              <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 ring-2 ring-black" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] bg-white/10 text-white border border-white/20 px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider">
                  {consultant.badge}
                </span>
                <span className="text-xs text-stone-300 font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  실시간 처방 대기 중
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-0.5">
                1:1 전담 디렉터: {consultant.name}
              </h3>
              <p className="text-xs text-stone-400">
                {consultant.role}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={onOpenConsultant}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-white text-black font-bold text-xs hover:bg-stone-200 transition-colors flex items-center justify-center gap-1.5 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-black" />
              <span>1:1 실시간 처방 & 피드백</span>
            </button>
            <button
              onClick={() => onOpenBooking && onOpenBooking({
                name: `${consultant.name} 1:1 청담 살롱 프라이빗 컨설팅`,
                category: 'consulting',
                price: 80000
              })}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
            >
              <CalendarIcon className="w-3.5 h-3.5" />
              <span>오프라인 살롱 예약</span>
            </button>
          </div>
        </div>
      </div>

      {/* 7. 4-WEEK ACCORDION ROADMAP (FULL DETAILS) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-extrabold text-black">
            4주 주차별 상세 미션 아카이브
          </h2>
          <span className="text-xs text-stone-500 font-medium">클릭하여 주차별 세부 내용 접기/펼치기</span>
        </div>

        {project.weeks.map((week) => {
          const isOpen = openWeeks[week.weekNumber];
          const weekMissions = week.missions;
          const completedCount = weekMissions.filter(m => m.completed).length;

          return (
            <div 
              key={week.weekNumber} 
              className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-2xs"
            >
              {/* Week Header */}
              <div
                onClick={() => toggleWeek(week.weekNumber)}
                className="p-5 cursor-pointer bg-white hover:bg-stone-50 transition-colors flex items-center justify-between border-b border-stone-100"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-lg bg-black text-white text-xs font-bold flex items-center justify-center font-mono">
                    W{week.weekNumber}
                  </span>
                  <div>
                    <h3 className="font-bold text-sm sm:text-base text-black">
                      {week.theme}
                    </h3>
                    <p className="text-xs text-stone-500 line-clamp-1">{week.summary}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-stone-100 text-stone-700 border border-stone-200">
                    {completedCount} / {weekMissions.length}
                  </span>
                  {isOpen ? <ChevronUp className="w-4 h-4 text-stone-500" /> : <ChevronDown className="w-4 h-4 text-stone-500" />}
                </div>
              </div>

              {/* Week Missions List */}
              {isOpen && (
                <div className="p-4 sm:p-5 divide-y divide-stone-100 space-y-4 bg-stone-50/40">
                  {weekMissions.map((mission) => (
                    <div
                      key={mission.id}
                      className={`pt-4 first:pt-0 flex flex-col sm:flex-row sm:items-start justify-between gap-4 transition-colors ${
                        mission.completed ? 'opacity-75' : ''
                      }`}
                    >
                      {/* Checkbox & Mission Title */}
                      <div className="flex items-start gap-3 flex-1">
                        <button
                          onClick={() => {
                            if (!mission.completed) {
                              confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
                            }
                            onToggleMission(mission.id);
                          }}
                          className="mt-0.5 text-stone-400 hover:text-black transition-colors shrink-0"
                        >
                          {mission.completed ? (
                            <CheckCircle2 className="w-5 h-5 text-black" />
                          ) : (
                            <Circle className="w-5 h-5 text-stone-300 hover:text-stone-500" />
                          )}
                        </button>

                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-stone-200 text-stone-800 font-mono">
                              DAY {mission.day}
                            </span>
                            <span className="text-[11px] font-bold text-stone-600">
                              #{mission.category}
                            </span>
                          </div>
                          <h4 className={`text-sm font-bold ${mission.completed ? 'line-through text-stone-400' : 'text-black'}`}>
                            {mission.title}
                          </h4>
                          <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                            {mission.desc}
                          </p>
                        </div>
                      </div>

                      {/* Directly linked Action Button */}
                      <div className="sm:self-center pl-8 sm:pl-0 flex-shrink-0">
                        {mission.actionType === 'shop' && mission.relatedItem && (
                          <button
                            onClick={() => onAddToCart(mission.relatedItem)}
                            className="w-full sm:w-auto px-4 py-2 rounded-xl text-xs font-bold bg-black hover:bg-stone-800 text-white transition-all flex items-center justify-center gap-1.5 shadow-xs"
                          >
                            <ShoppingBag className="w-3.5 h-3.5" />
                            <span>{mission.relatedItem.price.toLocaleString()}원 구매</span>
                          </button>
                        )}

                        {mission.actionType === 'book' && mission.relatedItem && (
                          <button
                            onClick={() => onOpenBooking(mission.relatedItem)}
                            className="w-full sm:w-auto px-4 py-2 rounded-xl text-xs font-bold bg-black hover:bg-stone-800 text-white transition-all flex items-center justify-center gap-1.5 shadow-xs"
                          >
                            <CalendarIcon className="w-3.5 h-3.5" />
                            <span>바로 예약하기</span>
                          </button>
                        )}

                        {mission.actionType === 'glowup' && (
                          <button
                            onClick={onGoToGlowUp}
                            className="w-full sm:w-auto px-4 py-2 rounded-xl text-xs font-bold bg-black text-white hover:bg-stone-800 transition-all flex items-center justify-center gap-1.5 shadow-xs"
                          >
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>최종 리포트</span>
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
}
