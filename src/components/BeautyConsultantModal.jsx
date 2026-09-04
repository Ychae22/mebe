import { asset } from '../utils/assetUrl';
import React, { useState } from 'react';
import { X, Sparkles, Send, CheckCircle2, Calendar, MessageSquare, Award, UserCheck, ChevronRight, Zap, ShieldCheck } from 'lucide-react';

const CONSULTANTS = [
  {
    id: 'c-1',
    name: '김유진 수석 아티스트',
    role: '전 청담 보이드 부원장 / 15도 캣아이 & 윤곽 디렉터',
    avatar: asset('/images/korean_stars/karina.jpg'),
    specialty: '캣아이 아이라인, 슬릭 헤어, 입체 윤곽 컨투어링',
    badge: '아이돌 전담 10년',
    rating: 4.98,
    reviews: 1420,
    experience: '청담동 살롱 12년 경력 · 아이돌 & 배우 화보 메이크업 총괄',
    status: '상담 가능'
  },
  {
    id: 'c-2',
    name: '이정훈 스킨 멘토',
    role: '메디컬 스킨케어 디렉터 / 속광 장벽 코치',
    avatar: asset('/images/korean_stars/shin_se_kyung.jpg'),
    specialty: '속건조 7스킨, 수분 속광, 피부 결 정돈',
    badge: '스킨 솔루션 마스터',
    rating: 4.95,
    reviews: 980,
    experience: '피부과 전문 에스테틱 원장 출신 · 1:1 피부 분석 8,000건+',
    status: '상담 가능'
  },
  {
    id: 'c-3',
    name: '박서연 원장',
    role: '퍼스널 컬러 & 이미지 브랜딩 디렉터',
    avatar: asset('/images/korean_stars/nayeon.jpg'),
    specialty: '과즙 치크, 톤온톤 립, 퍼스널 스타일 맵핑',
    badge: '이미지 메이킹 12년',
    rating: 4.99,
    reviews: 2150,
    experience: '컬러 큐레이션 연구소 대표 · K-뷰티 인플루언서 전담 컨설팅',
    status: '상담 가능'
  },
  {
    id: 'c-4',
    name: '최민서 총괄 원장',
    role: '청담 웨딩 & VIP 화보 비주얼 디렉터',
    avatar: asset('/images/korean_stars/park_min_young.jpg'),
    specialty: 'D-30 급속 리셋, 여신 웨이브 펌, 스튜디오 화보',
    badge: 'TOP VIP 디렉터',
    rating: 5.0,
    reviews: 870,
    experience: '웨딩 매거진 화보 총괄 · VIP 프로필 브랜딩 15년',
    status: '상담 가능'
  }
];

export default function BeautyConsultantModal({ 
  isOpen, 
  onClose, 
  dnaData, 
  activeProject, 
  onOpenBooking, 
  onApplyConsultantProject 
}) {
  const [selectedConsultant, setSelectedConsultant] = useState(CONSULTANTS[0]);
  const [messages, setMessages] = useState([
    {
      sender: 'consultant',
      text: `안녕하세요! 회원님의 추구미 [${dnaData?.archetype || '청순 글로우 퓨어 추구미'}] 데이터를 확인했습니다. 어떤 목표를 달성하고 싶으신가요? 현재 진행 중인 [${activeProject?.shortTitle || '30일 프로젝트'}]에 맞춰 1:1 맞춤 피드백과 미션 조정을 도와드릴게요.`
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  if (!isOpen) return null;

  const handleSendMessage = (textToSend) => {
    const query = textToSend || inputMessage;
    if (!query.trim()) return;

    // User message
    const newMessages = [...messages, { sender: 'user', text: query }];
    setMessages(newMessages);
    setInputMessage('');
    setIsTyping(true);

    // Simulated Consultant Feedback
    setTimeout(() => {
      let reply = '';
      if (query.includes('얼굴형') || query.includes('각진') || query.includes('윤곽')) {
        reply = `회원님의 골격 구조상, 옆머리를 턱선 길이로 둥글게 굴려주는 [페이스라인 사이드뱅 컷]과 [15도 눈꼬리 상승 아이라인]을 접목하면 광대와 턱선이 30% 이상 부드러워집니다. 지금 프로젝트의 2주차에 '청담 페이스라인 컷' 미션을 특별 처방으로 주입해 드릴게요!`;
      } else if (query.includes('속광') || query.includes('피부') || query.includes('건조')) {
        reply = `속건조가 고민이시라면, 닦아내는 토너 대신 히알루론산 앰플을 3회 겹쳐 바르는 [수분 레이어링 루틴]으로 즉시 변경을 권장합니다. 1주차 스킨 미션에 '히알루론산 3레이어링'을 업데이트했습니다!`;
      } else if (query.includes('바꿔') || query.includes('프로젝트') || query.includes('추천')) {
        reply = `회원님의 현재 관심사와 스케줄에 맞춰 [D-30 초단기 인생 화보 프로젝트] 또는 [도회적 캣아이 프로젝트]로 전환하시는 것을 추천합니다. 아래 버튼을 눌러 지금 즉시 프로젝트를 맞춤 교체하실 수 있습니다.`;
      } else {
        reply = `회원님께서 남겨주신 취향 분석표에 맞춰, 현재 프로젝트의 미션 강도를 1:1로 최적화했습니다. 일주일 단위로 피부결과 스타일링 셀카를 공유해주시면 매주 목요일 1:1 피드백 처방전을 발송해 드립니다!`;
      }

      setMessages(prev => [...prev, { sender: 'consultant', text: reply }]);
      setIsTyping(false);
    }, 900);
  };

  const quickQuestions = [
    '내 얼굴형에 맞는 1:1 헤어&눈매 프로젝트로 변경해주세요',
    '속건조 심한데 스킨케어 미션 맞춤 조정해주세요',
    '중요한 일정 D-30 앞두고 급속 체인지 프로젝트 추천해주세요'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-editorial-black/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[92vh] animate-scale-up">
        
        {/* Modal Top Header */}
        <div className="px-5 py-4 border-b border-stone-200 flex items-center justify-between bg-stone-50">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center shadow-xs">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-sm sm:text-base text-editorial-black">
                  1:1 전담 청담 컨설턴트 매칭 & 실시간 처방
                </h3>
                <span className="text-[10px] bg-black text-white px-2 py-0.5 rounded-full font-bold">
                  LIVE CONNECT
                </span>
              </div>
              <p className="text-[11px] text-stone-500">
                내 추구미 데이터를 기반으로 청담·성수 뷰티 디렉터가 프로젝트를 실시간으로 맞춤 설계합니다.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-400 hover:text-stone-700 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Consultant Selector Bar */}
        <div className="px-5 py-3 bg-stone-100/70 border-b border-stone-200 overflow-x-auto scrollbar-none flex gap-2">
          {CONSULTANTS.map((c) => {
            const isSelected = selectedConsultant.id === c.id;
            return (
              <button
                key={c.id}
                onClick={() => setSelectedConsultant(c)}
                className={`flex items-center gap-2.5 px-3 py-2 rounded-2xl whitespace-nowrap text-left transition-all ${
                  isSelected
                    ? 'bg-white border-2 border-black shadow-sm scale-102 font-bold'
                    : 'bg-white/70 border border-stone-200 hover:bg-white text-stone-600'
                }`}
              >
                <img
                  src={c.avatar}
                  alt={c.name}
                  className="w-8 h-8 rounded-full object-cover border border-stone-200"
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-editorial-black">{c.name}</span>
                    <span className="text-[9px] bg-stone-100 text-stone-800 px-1.5 py-0.2 rounded-full font-semibold border border-stone-200">
                      ★ {c.rating}
                    </span>
                  </div>
                  <p className="text-[10px] text-stone-500">{c.badge}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Consultant Profile Mini Banner */}
        <div className="px-5 py-3 bg-stone-50 border-b border-stone-200 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-black shrink-0" />
            <div>
              <span className="font-bold text-stone-800">{selectedConsultant.role}</span>
              <span className="text-stone-500 ml-1.5 hidden sm:inline">({selectedConsultant.experience})</span>
            </div>
          </div>
          <button
            onClick={() => {
              onClose();
              onOpenBooking && onOpenBooking({
                name: `${selectedConsultant.name} 1:1 오프라인 살롱 컨설팅`,
                category: 'consulting',
                price: 80000
              });
            }}
            className="px-2.5 py-1 rounded-xl bg-black text-white font-bold text-[11px] hover:bg-stone-800 shadow-xs transition-all flex items-center gap-1"
          >
            <Calendar className="w-3 h-3" />
            <span>오프라인 1:1 예약</span>
          </button>
        </div>

        {/* Chat / Feedback Window */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3.5 bg-stone-50/50">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex gap-2.5 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {m.sender === 'consultant' && (
                <img
                  src={selectedConsultant.avatar}
                  alt={selectedConsultant.name}
                  className="w-7 h-7 rounded-full object-cover shrink-0 border border-stone-200"
                />
              )}
              <div
                className={`max-w-[85%] sm:max-w-[75%] rounded-2xl p-3.5 text-xs sm:text-sm leading-relaxed ${
                  m.sender === 'user'
                    ? 'bg-editorial-black text-white rounded-tr-xs shadow-xs'
                    : 'bg-white border border-stone-200 text-stone-800 rounded-tl-xs shadow-xs'
                }`}
              >
                {m.sender === 'consultant' && (
                  <p className="text-[10px] font-bold text-black mb-1 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-emerald-500" />
                    <span>{selectedConsultant.name} 코칭 처방</span>
                  </p>
                )}
                <p className="whitespace-pre-line">{m.text}</p>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex gap-2.5 items-center text-xs text-stone-400 pl-9">
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-stone-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-2 h-2 rounded-full bg-stone-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-2 h-2 rounded-full bg-stone-400 animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
              <span>{selectedConsultant.name}님이 맞춤 처방을 작성 중입니다...</span>
            </div>
          )}
        </div>

        {/* Quick Suggestion Chips */}
        <div className="px-4 py-2 bg-white border-t border-stone-100 flex items-center gap-1.5 overflow-x-auto scrollbar-none">
          <span className="text-[10px] font-bold text-stone-400 whitespace-nowrap">추천 질문:</span>
          {quickQuestions.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(q)}
              className="text-[11px] bg-stone-100 hover:bg-stone-200 text-stone-700 px-2.5 py-1 rounded-full whitespace-nowrap transition-colors"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Chat Input Bar */}
        <div className="p-3 bg-white border-t border-stone-200 flex items-center gap-2">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder={`${selectedConsultant.name}에게 1:1 맞춤 프로젝트 질문하기...`}
            className="flex-1 bg-stone-100 rounded-full px-4 py-2.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-black"
          />
          <button
            onClick={() => handleSendMessage()}
            disabled={!inputMessage.trim()}
            className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-stone-800 disabled:opacity-40 transition-colors shadow-xs shrink-0"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom Action Footer */}
        <div className="p-3 bg-stone-50 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 text-[11px] text-stone-500">
            <UserCheck className="w-3.5 h-3.5 text-black" />
            <span>이 컨설턴트의 1:1 처방에 따라 언제든 프로젝트가 자동 재구성됩니다.</span>
          </div>
          <button
            onClick={() => {
              onApplyConsultantProject && onApplyConsultantProject(selectedConsultant);
              onClose();
            }}
            className="w-full sm:w-auto px-5 py-2 rounded-full bg-black text-white text-xs font-bold hover:bg-stone-800 transition-colors flex items-center justify-center gap-1.5"
          >
            <Zap className="w-3.5 h-3.5 text-white" />
            <span>이 컨설턴트 추천 프로젝트로 즉시 전환</span>
          </button>
        </div>

      </div>
    </div>
  );
}
