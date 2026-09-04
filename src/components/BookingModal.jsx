import React, { useState } from 'react';
import { X, Calendar, Clock, User, CheckCircle2, Sparkles, MapPin } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function BookingModal({ item, onClose, onConfirmBooking }) {
  const [selectedDate, setSelectedDate] = useState('2026-09-06 (토)');
  const [selectedTime, setSelectedTime] = useState('14:00');
  const [selectedDesigner, setSelectedDesigner] = useState('민아 수석 실장 (시그니처 컷)');
  const [customerPhone, setCustomerPhone] = useState('010-9876-5432');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!item) return null;

  const dates = [
    '2026-09-05 (금)',
    '2026-09-06 (토)',
    '2026-09-07 (일)',
    '2026-09-09 (화)',
  ];

  const timeSlots = ['11:00', '13:00', '14:00', '16:30', '18:00'];

  const designers = [
    '민아 수석 실장 (레이어드/펌 전문)',
    '도현 원장 (1:1 프라이빗 케어)',
    '지우 디자이너 (감성 디자인 컷)',
  ];

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);
    confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
    setTimeout(() => {
      onConfirmBooking({
        ...item,
        bookingDate: selectedDate,
        bookingTime: selectedTime,
        designer: selectedDesigner,
      });
      setIsSuccess(false);
      onClose();
    }, 1600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl max-w-md w-full overflow-hidden shadow-2xl border border-editorial-border relative">
        
        {/* Header */}
        <div className="p-5 border-b border-stone-100 flex items-center justify-between bg-stone-50">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-black animate-ping" />
            <h3 className="font-extrabold text-base text-black">원스톱 실시간 청담 예약</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSuccess ? (
          <div className="p-8 text-center py-12">
            <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center mx-auto mb-4 animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-xl font-bold text-stone-900 mb-1">예약이 확정되었습니다!</h4>
            <p className="text-xs text-stone-600 mb-4">
              {item.name} · {selectedDate} {selectedTime}
            </p>
            <p className="text-[11px] text-stone-700 bg-stone-100 p-2.5 rounded-xl border border-stone-200">
              ✨ 예약 정보가 30일 프로젝트 [DAY 4] 미션에 자동 연동되었습니다.
            </p>
          </div>
        ) : (
          <form onSubmit={handleBookingSubmit} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
            {/* Target Item Overview */}
            <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 flex items-center gap-3">
              {item.imageUrl ? (
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-12 h-12 rounded-xl object-cover border border-stone-200 shrink-0"
                />
              ) : (
                <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center text-xs font-black shrink-0">
                  {item.category === 'package' ? 'VIP' : 'ME:BE'}
                </div>
              )}
              <div className="flex-1 min-w-0">
                <p className="text-[10px] text-stone-500 font-bold uppercase tracking-wider">
                  {item.category === 'package' ? '청담 올인원 4-in-1 VIP 패키지' : item.category === 'clinic' ? '청담 제휴 메디컬 시술' : '청담 제휴 살롱 / 스튜디오'}
                </p>
                <h4 className="font-extrabold text-xs sm:text-sm text-stone-900 truncate">{item.name}</h4>
                <p className="text-[11px] text-stone-500 truncate">{item.serviceName || item.location || '청담 프라이빗 VIP 제휴 배정'}</p>
              </div>
            </div>

            {/* Package Items Breakdown if category is package */}
            {item.category === 'package' && (
              <div className="p-3 bg-stone-100/70 rounded-xl border border-stone-200 text-xs space-y-1.5">
                <p className="text-[10px] font-bold text-stone-600 uppercase">패키지 포함 4대 혜택 (32% SAVE):</p>
                <div className="space-y-1 text-[11px] text-stone-700">
                  <div className="flex items-center justify-between">
                    <span>1. 청담 피부과/성형외과 리프팅/스킨부스터</span>
                    <span className="font-bold">750,000원</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>2. 살롱 드 블랑 페이스라인 컷 & 딥 스파</span>
                    <span className="font-bold">160,000원</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>3. 수석 비주얼 디렉터 1:1 컨설팅 (4주)</span>
                    <span className="font-bold">280,000원</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>4. 성수 스튜디오 30일 완성 화보 프로필</span>
                    <span className="font-bold">200,000원</span>
                  </div>
                </div>
                <div className="pt-2 border-t border-stone-200 flex items-center justify-between font-bold text-xs text-black">
                  <span>총 개별 정가 1,390,000원 ➔ 패키지가</span>
                  <span className="text-black font-extrabold">940,000원 (-32%)</span>
                </div>
              </div>
            )}

            {/* Designer / Master Selection */}
            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1.5 flex items-center gap-1">
                <User className="w-3.5 h-3.5 text-stone-600" />
                {item.category === 'clinic' ? '상담 희망 전문의' : item.category === 'package' ? '전담 수석 비주얼 디렉터' : '담당 디자이너 / 아티스트'}
              </label>
              <select
                value={selectedDesigner}
                onChange={(e) => setSelectedDesigner(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-stone-200 text-xs text-stone-800 bg-white focus:outline-none focus:ring-2 focus:ring-black"
              >
                {item.category === 'clinic' ? (
                  <>
                    <option value="박서준 대표원장 (성형외과 전문의)">박서준 대표원장 (성형외과 전문의)</option>
                    <option value="이지은 대표원장 (피부과 전문의)">이지은 대표원장 (피부과 전문의)</option>
                    <option value="최원영 부원장 (페이스 윤곽 전담)">최원영 부원장 (페이스 윤곽 전담)</option>
                  </>
                ) : item.category === 'package' ? (
                  <>
                    <option value="김유진 수석 비주얼 디렉터 (ME:BE 아뜰리에)">김유진 수석 비주얼 디렉터 (ME:BE 아뜰리에 전담)</option>
                    <option value="정민서 수석 스타일리스트 (청담 살롱 출신)">정민서 수석 스타일리스트 (청담 살롱 출신)</option>
                  </>
                ) : (
                  designers.map(d => (
                    <option key={d} value={d}>{d}</option>
                  ))
                )}
              </select>
            </div>

            {/* Date Selection */}
            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1.5 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-stone-600" />
                1차 방문 희망 날짜
              </label>
              <div className="grid grid-cols-2 gap-2">
                {dates.map((d) => (
                  <button
                    type="button"
                    key={d}
                    onClick={() => setSelectedDate(d)}
                    className={`py-2 px-2.5 rounded-xl text-xs font-medium border transition-all ${
                      selectedDate === d
                        ? 'border-black bg-black text-white font-bold'
                        : 'border-stone-200 text-stone-600 hover:bg-stone-50'
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            {/* Time Slots */}
            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1.5 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-stone-600" />
                희망 시간대
              </label>
              <div className="grid grid-cols-5 gap-1.5">
                {timeSlots.map((t) => (
                  <button
                    type="button"
                    key={t}
                    onClick={() => setSelectedTime(t)}
                    className={`py-1.5 rounded-lg text-xs font-medium border transition-all ${
                      selectedTime === t
                        ? 'border-black bg-black text-white font-bold'
                        : 'border-stone-200 text-stone-600 hover:bg-stone-50'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">
                예약자 연락처 (VIP 알림톡 및 컨설팅 차트 발송)
              </label>
              <input
                type="text"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-stone-200 text-xs text-stone-800 focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="010-0000-0000"
              />
            </div>

            {/* Pricing Summary */}
            <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs">
              <div>
                <span className="text-stone-500 block">
                  {item.category === 'package' ? 'VIP 슬롯 확정 예약금 (방문 시 전액 차감)' : '예상 결제 금액'}
                </span>
                {item.category === 'package' && (
                  <span className="text-[10px] text-stone-400">패키지 총액 940,000원 중 예약금 선결제</span>
                )}
              </div>
              <span className="font-black text-lg text-black">
                {(item.deposit || item.price).toLocaleString()}원
              </span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-black text-white font-bold text-xs sm:text-sm hover:bg-stone-800 transition-all flex items-center justify-center gap-1.5 shadow-md"
            >
              <Sparkles className="w-4 h-4" />
              <span>{(item.deposit || item.price).toLocaleString()}원 VIP 예약 확정하기</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
