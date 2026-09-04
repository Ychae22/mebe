import React from 'react';
import { Sparkles, ShoppingBag, Calendar, Smartphone, Monitor, Crown } from 'lucide-react';

export default function Header({ 
  activeTab, 
  setActiveTab, 
  isMobileFrame, 
  setIsMobileFrame, 
  cartCount, 
  onOpenCart, 
  bookingCount, 
  onOpenProModal 
}) {
  const navTabs = [
    { id: 'discovery', label: '취향 탐색', icon: '✨' },
    { id: 'dna', label: 'Beauty DNA', icon: '🧬' },
    { id: 'project', label: '30일 프로젝트', icon: '🗓️' },
    { id: 'shop', label: '소비 연결 (Shop&Book)', icon: '🛍️' },
    { id: 'glowup', label: 'Glow-Up 로그', icon: '🌟' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-editorial-border transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div 
          onClick={() => setActiveTab('discovery')} 
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-beauty-500 to-beauty-300 flex items-center justify-center text-white shadow-glow group-hover:scale-105 transition-transform">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-serif font-bold text-xl tracking-wider text-editorial-black">ME:BE</span>
              <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-black text-white">ATELIER</span>
            </div>
            <p className="text-[9px] text-stone-500 tracking-tight -mt-0.5 hidden sm:block">도달가능미(ME)에서 추구미(BE)로</p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="hidden md:flex items-center gap-1 bg-stone-100/70 p-1 rounded-full border border-stone-200/60">
          {navTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-white text-editorial-black shadow-sm font-semibold'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/50'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Mobile Frame Toggle */}
          <button
            onClick={() => setIsMobileFrame(!isMobileFrame)}
            title={isMobileFrame ? "데스크톱 뷰로 전환" : "모바일 앱 프레임 뷰로 전환"}
            className="p-2 rounded-lg border border-stone-200 text-stone-600 hover:bg-stone-100 transition-colors flex items-center gap-1 text-xs"
          >
            {isMobileFrame ? (
              <>
                <Monitor className="w-4 h-4 text-beauty-600" />
                <span className="hidden sm:inline font-medium">데스크톱 뷰</span>
              </>
            ) : (
              <>
                <Smartphone className="w-4 h-4 text-beauty-600" />
                <span className="hidden sm:inline font-medium">앱 프레임 뷰</span>
              </>
            )}
          </button>

          {/* PRO Upgrade Button */}
          <button
            onClick={onOpenProModal}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-500 to-beauty-500 text-white text-xs font-semibold hover:shadow-glow transition-all hover:scale-105"
          >
            <Crown className="w-3.5 h-3.5 fill-current text-amber-200" />
            <span>PRO</span>
          </button>

          {/* Cart Icon */}
          <button
            onClick={onOpenCart}
            className="relative p-2 rounded-full hover:bg-stone-100 text-stone-700 transition-colors"
            title="장바구니"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-beauty-600 text-white text-[10px] font-bold flex items-center justify-center animate-bounce">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Sub-Navigation for small screens */}
      <div className="md:hidden flex items-center justify-around border-t border-editorial-border py-2 px-1 bg-stone-50 overflow-x-auto text-[11px]">
        {navTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-col items-center gap-0.5 px-2 py-1 rounded-md transition-colors ${
              activeTab === tab.id
                ? 'text-beauty-600 font-bold bg-white shadow-xs'
                : 'text-stone-500 hover:text-stone-900'
            }`}
          >
            <span className="text-sm">{tab.icon}</span>
            <span className="whitespace-nowrap">{tab.label}</span>
          </button>
        ))}
      </div>
    </header>
  );
}
