import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import StyleDiscovery from './components/StyleDiscovery';
import BeautyDnaReport from './components/BeautyDnaReport';
import BeautyProjectRoadmap from './components/BeautyProjectRoadmap';
import ClinicSection from './components/ClinicSection';
import ShopAndBook from './components/ShopAndBook';
import GlowUpLog from './components/GlowUpLog';
import BookingModal from './components/BookingModal';
import CartModal from './components/CartModal';
import ProMembershipModal from './components/ProMembershipModal';
import BeautyConsultantModal from './components/BeautyConsultantModal';
import ProjectSelectorModal from './components/ProjectSelectorModal';
import ChugumiRequiredModal from './components/ChugumiRequiredModal';
import MeFaceAnalysis from './components/MeFaceAnalysis';
import { DISCOVERY_IMAGES } from './data/discoveryImages';
import { PROJECT_TEMPLATES } from './data/projectTemplates';
import confetti from 'canvas-confetti';
import { Sparkles, CheckCircle2, ShoppingBag, Menu, X, ArrowRight, Activity, Scan } from 'lucide-react';

export default function App() {
  // Navigation: Default to 01. 내 얼굴 분석 (ME Face Scan)
  const [activeTab, setActiveTab] = useState('faceScan');
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  // Biometric Face Scan Data (ME)
  const [faceScanData, setFaceScanData] = useState(null);

  // Initial Discovery Selection is COMPLETELY EMPTY (0 selected!)
  const [selectedImageIds, setSelectedImageIds] = useState([]);

  // Calculated DNA State
  const [dnaData, setDnaData] = useState(null);

  // Multi-Project Deck State
  const [userProjects, setUserProjects] = useState(PROJECT_TEMPLATES);
  const [activeProjectId, setActiveProjectId] = useState(PROJECT_TEMPLATES[0].id);
  const activeProject = userProjects.find(p => p.id === activeProjectId) || userProjects[0];

  // Modals
  const [isConsultantModalOpen, setIsConsultantModalOpen] = useState(false);
  const [isProjectSelectorOpen, setIsProjectSelectorOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isProModalOpen, setIsProModalOpen] = useState(false);
  const [isProSubscribed, setIsProSubscribed] = useState(false);
  const [bookingTargetItem, setBookingTargetItem] = useState(null);

  // Commerce & Booking State
  const [cartItems, setCartItems] = useState([
    {
      id: 'prod-1',
      name: '하이드라 워터 앰플 (50ml)',
      price: 34000,
      imageUrl: '/images/korean_stars/bae_suzy.jpg',
      dnaMatch: '수분 베이스 솔루션'
    }
  ]);
  const [bookings, setBookings] = useState([]);

  // User Uploaded Photos for Before / Target / After (Glow-Up Tracker)
  const [userBeforePhoto, setUserBeforePhoto] = useState(null);
  const [userTargetPhoto, setUserTargetPhoto] = useState(null);
  const [userAfterPhoto, setUserAfterPhoto] = useState(null);
  const [isChugumiRequiredModalOpen, setIsChugumiRequiredModalOpen] = useState(false);

  // Toast notification
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  // Safe Navigation with Auto-Validation
  const handleNavigateTab = (tabId) => {
    if (tabId === 'dna' && selectedImageIds.length === 0 && !dnaData) {
      showToast('✨ 추구미(BE) 아카이브에서 워너비 레퍼런스를 먼저 1개 이상 선택해주세요.');
      setActiveTab('discovery');
      return;
    }
    if (tabId === 'project') {
      // 1. Check if 추구미 has been diagnosed or selected
      if (selectedImageIds.length === 0 && !dnaData) {
        setIsChugumiRequiredModalOpen(true);
        return;
      }
      // 2. Check if Before photo has been uploaded
      if (!userBeforePhoto) {
        showToast('📸 30일 컨설팅 로드맵 시작 전, 01단계 내 얼굴 사진(ME)을 먼저 등록해주세요.');
        setActiveTab('faceScan');
        return;
      }
    }
    setActiveTab(tabId);
  };

  // Toggle image selection
  const handleToggleSelect = (id) => {
    if (id === 'clear') {
      setSelectedImageIds([]);
      return;
    }
    setSelectedImageIds(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  // Quick scenario selection
  const handleQuickScenarioSelect = (type) => {
    let targetIds = [];
    if (type === 'wonyoung') {
      targetIds = ['face-1', 'face-2', 'face-3', 'face-4', 'face-5', 'face-6', 'face-8'];
      showToast('🌸 소프트 퓨어 (수지·신세경·민지·윤아) 레퍼런스 선택 완료');
    } else if (type === 'haerin') {
      targetIds = ['face-11', 'face-12', 'face-13', 'face-14', 'face-15', 'face-16', 'face-18'];
      showToast('🐱 모던 시크 (해린·한소희·카리나·제니) 레퍼런스 선택 완료');
    } else if (type === 'iu') {
      targetIds = ['face-21', 'face-22', 'face-23', 'face-24', 'face-25', 'face-26', 'face-27'];
      showToast('🍑 스위트 페미닌 (아이유·나연·사나·하니) 레퍼런스 선택 완료');
    } else if (type === 'jungwon') {
      targetIds = ['face-31', 'face-32', 'face-33', 'face-34', 'face-35', 'face-36', 'face-37'];
      showToast('☕ 에포트리스 내추럴 (고윤정·김지원·김고은·김태리) 레퍼런스 선택 완료');
    }
    setSelectedImageIds(targetIds);
  };

  // Analyze DNA Engine based on stacked repetitions
  const handleAnalyzeDna = () => {
    const selected = DISCOVERY_IMAGES.filter(img => selectedImageIds.includes(img.id));
    if (selected.length === 0) {
      showToast('⚠️ 레퍼런스를 최소 1개 이상 선택해주세요.');
      return;
    }

    // Calculate aggregated vibes across 6 refined aesthetic axes
    const totals = {
      '소프트 퓨어': 0,
      '모던 시크': 0,
      '스위트 페미닌': 0,
      '에포트리스 내추럴': 0,
      '클래식 글램': 0,
      '아방가르드 힙': 0
    };

    selected.forEach(img => {
      Object.entries(img.vibes || {}).forEach(([k, v]) => {
        if (totals[k] !== undefined) {
          totals[k] += v;
        }
      });
    });

    const vibes = Object.entries(totals)
      .map(([name, sum]) => ({
        name,
        score: Math.min(99, Math.max(15, Math.round(sum / selected.length)))
      }))
      .sort((a, b) => b.score - a.score);

    const top1 = vibes[0];
    const top2 = vibes[1];

    let archetype = '소프트 퓨어 (Soft Pure)';
    let insight = '맑고 깨끗한 수분 베이스와 정돈된 본연의 결로, 단아하고 청초한 이미지를 지향합니다.';

    if (top1.name === '모던 시크') {
      archetype = '모던 시크 (Modern Chic)';
      insight = '날렵한 15도 캣아이와 도회적인 음영으로, 세련되고 카리스마 넘치는 아우라를 지향합니다.';
    } else if (top1.name === '스위트 페미닌') {
      archetype = '스위트 페미닌 (Sweet Feminine)';
      insight = '은은한 피치 치크와 생기 넘치는 립으로, 사랑스럽고 우아한 무드를 지향합니다.';
    } else if (top1.name === '에포트리스 내추럴') {
      archetype = '에포트리스 내추럴 (Effortless Natural)';
      insight = '인위적인 과함을 덜어내고 실크 세미매트 스킨과 정돈된 결 브로우로, 고급스러운 내추럴 무드를 지향합니다.';
    } else if (top1.name === '클래식 글램') {
      archetype = '클래식 글램 (Classic Glam)';
      insight = '또렷한 이목구비와 우아한 볼륨 웨이브로, 시선을 사로잡는 여신 실루엣을 지향합니다.';
    } else if (top1.name === '아방가르드 힙') {
      archetype = '아방가르드 힙 (Avant-Garde Hip)';
      insight = '칼각 슬릭 단발과 개성 있는 포인트로, 트렌드를 앞서가는 감각적인 무드를 지향합니다.';
    }

    const formula = `${top1.name} (${top1.score}%) × ${top2.name} (${top2.score}%)`;

    // Extract REAL repeated style elements
    const elementFrequency = {};
    selected.forEach(img => {
      (img.elements || []).forEach(elem => {
        elementFrequency[elem] = (elementFrequency[elem] || 0) + 1;
      });
    });

    const emojiMap = {
      '헤어': '💇', '단발': '💇', '뱅': '💇',
      '피부': '✨', '베이스': '✨', '스킨': '✨',
      '눈매': '👁️', '아이': '👁️', '섀도우': '👁️', '캣아이': '👁️',
      '립': '💄', '틴트': '💄',
      '턱선': '📐', '윤곽': '📐', '골격': '📐', '실루엣': '👗'
    };

    const getEmoji = (name) => {
      for (const [k, em] of Object.entries(emojiMap)) {
        if (name.includes(k)) return em;
      }
      return '✨';
    };

    const keyElements = Object.entries(elementFrequency)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 6)
      .map(([title, count]) => ({
        emoji: getEmoji(title),
        title: `${title} (${count}회 중복)`,
        category: `${Math.round((count / selected.length) * 100)}% 일치도`
      }));

    // Auto switch to matching 30-day template
    let matchedTemplateId = 'proj-pure-glow';
    if (top1.name === '모던 시크') matchedTemplateId = 'proj-cateye-chic';
    else if (top1.name === '스위트 페미닌') matchedTemplateId = 'proj-lovely-juicy';
    else if (top1.name === '에포트리스 내추럴') matchedTemplateId = 'proj-classic-minimal';
    else if (top1.name === '클래식 글램' || top1.name === '아방가르드 힙') matchedTemplateId = 'proj-d30-reset';
    
    setActiveProjectId(matchedTemplateId);

    setDnaData({ vibes, archetype, insight, formula, keyElements });
    setActiveTab('dna');
    confetti({ particleCount: 70, spread: 70 });
  };

  // Multi-Project Mission Checkbox Toggle
  const handleToggleMission = (missionId) => {
    setUserProjects(prevProjects =>
      prevProjects.map(proj => {
        if (proj.id !== activeProjectId) return proj;
        return {
          ...proj,
          weeks: proj.weeks.map(week => ({
            ...week,
            missions: week.missions.map(m =>
              m.id === missionId ? { ...m, completed: !m.completed } : m
            )
          }))
        };
      })
    );
  };

  const handleSelectProject = (projId) => {
    setActiveProjectId(projId);
    const target = userProjects.find(p => p.id === projId);
    showToast(`📋 [${target?.shortTitle || '프로젝트'}]로 전환되었습니다.`);
  };

  const handleApplyConsultantProject = (consultant) => {
    showToast(`✨ ${consultant.name}님의 1:1 맞춤 피드백과 특별 처방이 반영되었습니다!`);
  };

  // Add to Cart
  const handleAddToCart = (item) => {
    setCartItems(prev => [...prev, item]);
    showToast(`🛍️ ${item.name} 상품이 장바구니에 담겼습니다.`);
  };

  // Remove from Cart
  const handleRemoveCartItem = (idx) => {
    setCartItems(prev => prev.filter((_, i) => i !== idx));
  };

  // Confirm Booking
  const handleConfirmBooking = (bookedItem) => {
    setBookings(prev => [...prev, bookedItem]);
    showToast(`🎉 ${bookedItem.name} 예약이 확정되었습니다! 담당 실장이 1:1 안내 연락을 드립니다.`);
  };

  // Subscribe PRO
  const handleSubscribePro = () => {
    setIsProSubscribed(true);
    showToast('👑 ME:BE VIP 멤버십 구독이 시작되었습니다!');
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-[#111111] font-sans antialiased flex">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-black text-white px-5 py-2.5 rounded-full text-xs font-bold shadow-2xl flex items-center gap-2 animate-fade-in border border-stone-800">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* DESKTOP FIXED SIDEBAR */}
      <div className="hidden md:block">
        <Sidebar
          activeTab={activeTab}
          setActiveTab={handleNavigateTab}
          onOpenConsultant={() => setIsConsultantModalOpen(true)}
          onOpenPro={() => setIsProModalOpen(true)}
          cartCount={cartItems.length}
          onOpenCart={() => setIsCartOpen(true)}
        />
      </div>

      {/* MOBILE DRAWER SIDEBAR */}
      {isMobileSidebarOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-xs" onClick={() => setIsMobileSidebarOpen(false)} />
          <div className="relative w-64 bg-white z-50 h-full shadow-2xl">
            <Sidebar
              activeTab={activeTab}
              setActiveTab={(tab) => {
                handleNavigateTab(tab);
                setIsMobileSidebarOpen(false);
              }}
              onOpenConsultant={() => {
                setIsConsultantModalOpen(true);
                setIsMobileSidebarOpen(false);
              }}
              onOpenPro={() => {
                setIsProModalOpen(true);
                setIsMobileSidebarOpen(false);
              }}
              cartCount={cartItems.length}
              onOpenCart={() => {
                setIsCartOpen(true);
                setIsMobileSidebarOpen(false);
              }}
            />
          </div>
        </div>
      )}

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col min-w-0 min-h-screen bg-[#FDFDFD]">
        
        {/* Top Minimal Utility Header */}
        <header className="h-16 px-5 sm:px-8 border-b border-stone-100 flex items-center justify-between bg-white sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsMobileSidebarOpen(true)}
              className="p-1.5 rounded-lg border border-stone-200 md:hidden hover:bg-stone-50"
            >
              <Menu className="w-4 h-4 text-black" />
            </button>

            <div className="flex items-center gap-2">
              <span className="font-extrabold text-xs sm:text-sm tracking-tight text-black">
                {activeTab === 'discovery' && '01. 추구미 아카이브'}
                {activeTab === 'dna' && '02. 추구미 진단'}
                {activeTab === 'project' && '03. 30일 컨설팅 로드맵'}
                {activeTab === 'clinic' && '04. 청담 성형 & 피부과 시술'}
                {activeTab === 'shop' && '05. 청담 살롱 & 쇼핑'}
                {activeTab === 'glowup' && '06. 비포 / 애프터 기록'}
              </span>
              <span className="hidden sm:inline text-stone-300">|</span>
              <span className="hidden sm:inline text-[11px] text-stone-600 font-medium">
                청담 프라이빗 외형 디자인 아뜰리에
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Direct Consultation Link */}
            <button
              onClick={() => setIsConsultantModalOpen(true)}
              className="text-xs font-bold px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-black transition-colors flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">1:1 디렉터 상담</span>
            </button>

            {/* Cart Icon */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 rounded-lg hover:bg-stone-100 text-stone-700 transition-colors"
            >
              <ShoppingBag className="w-4 h-4" />
              {cartItems.length > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-black text-white text-[9px] font-bold flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </button>
          </div>
        </header>

        {/* Content Body */}
        <main className="flex-1 p-5 sm:p-8 max-w-6xl w-full mx-auto">
          {activeTab === 'faceScan' && (
            <MeFaceAnalysis
              userBeforePhoto={userBeforePhoto}
              onPhotoUploaded={setUserBeforePhoto}
              faceScanData={faceScanData}
              onScanComplete={setFaceScanData}
              onGoToDiscovery={() => setActiveTab('discovery')}
            />
          )}

          {activeTab === 'discovery' && (
            <StyleDiscovery
              selectedIds={selectedImageIds}
              onToggleSelect={handleToggleSelect}
              onAnalyzeDna={handleAnalyzeDna}
              onQuickScenarioSelect={handleQuickScenarioSelect}
            />
          )}

          {activeTab === 'dna' && (
            <BeautyDnaReport
              dnaData={dnaData}
              userBeforePhoto={userBeforePhoto}
              faceScanData={faceScanData}
              selectedImages={DISCOVERY_IMAGES.filter(img => selectedImageIds.includes(img.id))}
              onGoToFaceScan={() => setActiveTab('faceScan')}
              onGoToProject={() => {
                if (!userBeforePhoto) {
                  showToast('📸 30일 컨설팅 로드맵 시작 전, 01단계 내 얼굴 사진(ME)을 먼저 등록해주세요.');
                  setActiveTab('faceScan');
                } else {
                  setActiveTab('project');
                }
              }}
              onGoToClinic={() => setActiveTab('clinic')}
              onResetDiscovery={() => setActiveTab('discovery')}
            />
          )}

          {activeTab === 'project' && (
            <BeautyProjectRoadmap
              project={activeProject}
              allProjects={userProjects}
              onSelectProject={handleSelectProject}
              onOpenProjectSelector={() => setIsProjectSelectorOpen(true)}
              onOpenConsultant={() => setIsConsultantModalOpen(true)}
              onToggleMission={handleToggleMission}
              onOpenBooking={(item) => setBookingTargetItem(item)}
              onAddToCart={handleAddToCart}
              onGoToGlowUp={() => setActiveTab('glowup')}
            />
          )}

          {activeTab === 'clinic' && (
            <ClinicSection
              onOpenBooking={(item) => setBookingTargetItem(item)}
              dnaData={dnaData}
            />
          )}

          {activeTab === 'shop' && (
            <ShopAndBook
              onAddToCart={handleAddToCart}
              onOpenBooking={(item) => setBookingTargetItem(item)}
            />
          )}

          {activeTab === 'glowup' && (
            <GlowUpLog 
              dnaData={dnaData} 
              beforePhoto={userBeforePhoto}
              onUploadBefore={setUserBeforePhoto}
              targetPhoto={userTargetPhoto}
              onUploadTarget={setUserTargetPhoto}
              afterPhoto={userAfterPhoto}
              onUploadAfter={setUserAfterPhoto}
              selectedImages={selectedImageIds}
              onGoToProject={() => setActiveTab('project')}
              onGoToDiscovery={() => setActiveTab('discovery')}
            />
          )}
        </main>

        {/* Minimal Clean Footer */}
        <footer className="border-t border-stone-200 bg-white py-8 text-center text-xs text-stone-500">
          <div className="max-w-4xl mx-auto px-4">
            <p className="font-extrabold text-sm text-black tracking-tight mb-1">
              ME:BE — CHEONGDAM ATELIER
            </p>
            <p className="text-[11px] text-stone-600 mb-3">
              “도달가능미(ME)에서 추구미(BE)로 — 당신의 고유 골격을 존중하며 청담 전문의 시술부터 30일 루틴까지 가장 안전하게 수렴시키는 프라이빗 외형 아뜰리에”
            </p>
            <p className="text-[10px] text-stone-600">
              © 2026 ME:BE Co., Ltd. All rights reserved. 의료법 준수 및 정품 정량 청담 제휴 병원 연계.
            </p>
          </div>
        </footer>

      </div>

      {/* Modals */}
      <BookingModal
        item={bookingTargetItem}
        onClose={() => setBookingTargetItem(null)}
        onConfirmBooking={handleConfirmBooking}
      />

      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={() => setCartItems([])}
      />

      <ProMembershipModal
        isOpen={isProModalOpen}
        onClose={() => setIsProModalOpen(false)}
        isSubscribed={isProSubscribed}
        onSubscribe={handleSubscribePro}
      />

      <BeautyConsultantModal
        isOpen={isConsultantModalOpen}
        onClose={() => setIsConsultantModalOpen(false)}
        dnaData={dnaData}
        activeProject={activeProject}
        onOpenBooking={(item) => setBookingTargetItem(item)}
        onApplyConsultantProject={handleApplyConsultantProject}
      />

      <ProjectSelectorModal
        isOpen={isProjectSelectorOpen}
        onClose={() => setIsProjectSelectorOpen(false)}
        activeProjectId={activeProjectId}
        onSelectProject={handleSelectProject}
        onOpenConsultant={() => setIsConsultantModalOpen(true)}
      />

      <ChugumiRequiredModal
        isOpen={isChugumiRequiredModalOpen}
        onClose={() => setIsChugumiRequiredModalOpen(false)}
        onGoToDiscovery={() => setActiveTab('discovery')}
      />

    </div>
  );
}
