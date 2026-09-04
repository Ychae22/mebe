import { asset } from '../utils/assetUrl';
import React from 'react';
import { 
  Scan,
  Sparkles, 
  FileText, 
  CalendarCheck, 
  ShoppingBag, 
  Camera, 
  Activity, 
  MessageSquare, 
  ShieldCheck, 
  ChevronRight,
  ExternalLink,
  Crown
} from 'lucide-react';

export const NAV_ITEMS = [
  { id: 'faceScan', label: '01. 내 얼굴 분석', sub: 'ME Face Scan', icon: Scan, badge: '도달가능미' },
  { id: 'discovery', label: '02. 추구미 아카이브', sub: 'BE Discovery', icon: Sparkles },
  { id: 'dna', label: '03. 추구미 진단', sub: 'ME:BE Gap Report', icon: FileText },
  { id: 'project', label: '04. 30일 컨설팅 로드맵', sub: 'Action Roadmap', icon: CalendarCheck },
  { id: 'clinic', label: '05. 성형 & 피부과 시술', sub: 'Medical Procedures', icon: Activity, badge: '청담 제휴' },
  { id: 'shop', label: '06. 청담 살롱 & 케어', sub: 'Salons & Commerce', icon: ShoppingBag },
  { id: 'glowup', label: '07. 비포 / 애프터 기록', sub: 'Glow-Up Archive', icon: Camera }
];

export default function Sidebar({ 
  activeTab, 
  setActiveTab, 
  onOpenConsultant, 
  onOpenPro, 
  cartCount = 0,
  onOpenCart 
}) {
  return (
    <aside className="w-64 bg-white border-r border-stone-200 h-screen sticky top-0 flex flex-col justify-between shrink-0 select-none z-30">
      
      {/* Brand Header */}
      <div>
        <div className="p-6 border-b border-stone-100">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-black text-white flex items-center justify-center font-black text-xs tracking-tighter shadow-xs">
              ME:BE
            </div>
            <div>
              <div className="flex items-center gap-1">
                <h1 className="font-extrabold text-base tracking-tight text-black leading-none">
                  ME:BE
                </h1>
                <span className="text-[9px] font-bold text-stone-400 uppercase tracking-widest">
                  ATELIER
                </span>
              </div>
              <p className="text-[9px] text-stone-500 tracking-wider mt-1 font-semibold">
                도달가능미(ME)에서 추구미(BE)로
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="p-3 space-y-1">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;

            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-left transition-all ${
                  isActive
                    ? 'bg-black text-white font-bold shadow-xs'
                    : 'text-stone-600 hover:text-black hover:bg-stone-50 font-medium'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-stone-400'}`} />
                  <div>
                    <p className="text-xs tracking-tight">{item.label}</p>
                    <p className={`text-[10px] font-normal ${isActive ? 'text-stone-300' : 'text-stone-400'}`}>
                      {item.sub}
                    </p>
                  </div>
                </div>

                {item.badge && (
                  <span className={`text-[9px] px-1.5 py-0.2 rounded font-bold ${
                    isActive ? 'bg-white text-black' : 'bg-stone-100 text-stone-800'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Sidebar Footer (Director & Concierge Card) */}
      <div className="p-4 border-t border-stone-100 space-y-2.5 bg-stone-50/70">
        
        {/* 1:1 Assigned Director */}
        <div className="p-3 bg-white rounded-2xl border border-stone-200 shadow-2xs">
          <div className="flex items-center gap-2.5 mb-2">
            <div className="relative">
              <img
                src={asset("/images/korean_stars/karina.jpg")}
                alt="김유진 실장"
                className="w-8 h-8 rounded-full object-cover border border-stone-200"
              />
              <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-500 ring-2 ring-white" />
            </div>
            <div>
              <p className="text-[11px] font-bold text-black">김유진 수석 디렉터</p>
              <p className="text-[10px] text-stone-600 font-medium">청담 추구미 컨설팅 전담 배정</p>
            </div>
          </div>

          <button
            onClick={onOpenConsultant}
            className="w-full py-1.5 rounded-lg bg-black text-white text-[11px] font-bold hover:bg-stone-800 transition-colors flex items-center justify-center gap-1.5"
          >
            <MessageSquare className="w-3 h-3" />
            <span>1:1 추구미 상담 연결</span>
          </button>
        </div>

        {/* Cart Quick Button if items exist */}
        {cartCount > 0 && (
          <button
            onClick={onOpenCart}
            className="w-full py-2 px-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold flex items-center justify-between transition-colors"
          >
            <div className="flex items-center gap-1.5">
              <ShoppingBag className="w-3.5 h-3.5 text-stone-600" />
              <span>장바구니</span>
            </div>
            <span className="px-1.5 py-0.2 bg-black text-white rounded-full text-[10px] font-bold">
              {cartCount}
            </span>
          </button>
        )}

        <div className="text-[10px] text-stone-600 text-center pt-1 font-medium">
          © 2026 CHEONGDAM ATELIER
        </div>
      </div>

    </aside>
  );
}
