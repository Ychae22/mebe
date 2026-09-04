# ME:BE ATELIER (미:비 아뜰리에)

> **"도달가능미(ME)에서 추구미(BE)로의 정밀한 이행"**  
> Cheongdam Private Aesthetic Curation & 30-Day Transformation Roadmap Platform

---

## 🏛️ Project Overview (프로젝트 소개)

**ME:BE ATELIER**는 타고난 본연의 이목구비와 골격 비율인 **'도달가능미(ME)'**를 데이터 기반으로 정밀 측정하고, 개인이 선망하는 무드인 **'추구미(BE)'**와의 시각적 간극(Gap)을 메우기 위한 **청담 프라이빗 뷰티 아뜰리에 컨설팅 웹 플랫폼**입니다.

과도한 핑크나 불필요한 장식을 배제하고, 청담 하이엔드 에스테틱 & 뷰티 살롱의 정갈한 모노크롬(Black & White) 미니멀리즘 아이덴티티를 지향합니다.

---

## ✨ Key Features (7대 핵심 서비스)

| 탭 메뉴 | 기능명 | 설명 |
| :--- | :--- | :--- |
| **01. ME 페이스 분석** | `ME Face Analysis` | 사용자의 실제 정면 사진 업로드 기반으로 안면 3분할(상안·중안·하안부), 가로 세로 황금비율, 턱선 각도를 정밀 분석합니다. (사진 미등록 시 대기 상태 유지) |
| **02. 추구미 진단 리포트** | `Pursuit DNA Report` | 얼굴형, 퍼스널 컬러, 눈매, 피부톤, 입술, 이마/헤어라인 등 12개 영역 정밀 진단 및 ME ➔ BE 도달을 위한 구체적 솔루션을 처방합니다. |
| **03. 30일 컨설팅 로드맵** | `30-Day Consulting Calendar` | 30일 전체 일정을 한눈에 조망할 수 있는 **캘린더 뷰**를 전면에 배치하여, 주차별 외형 마일스톤과 데일리 마이크로 루틴 체크리스트를 실시간 관리합니다. |
| **04. 비포 & 애프터** | `Before & After Studio` | 사용자가 직접 현재 사진(Before)과 목표 워너비 사진(Target)을 등록하여 비교하고, 30일 후의 파이널 변화를 기록하는 1:1 시각적 트래커입니다. |
| **05. 제휴 패키지 혜택** | `Affiliated Package Hub` | 청담 최고급 제휴 헤어살롱, 퍼스널 메이크업 스튜디오, 에스테틱 클리닉을 ME:BE 회원 전용 단독 할인가 및 패키지 혜택으로 연계합니다. |
| **06. 아뜰리에 피드** | `Editorial Feed` | 글로벌 하이패션 및 청담 트렌드를 반영한 비주얼 룩북과 메이크업/헤어 큐레이션 피드입니다. |
| **07. 스타일 아카이브** | `Private Archive` | 진단 결과, 스크랩한 스타일, 개인화된 뷰티 에셋을 안전하게 보관하는 프라이빗 아카이브입니다. |

---

## 🛠️ Tech Stack (기술 스택)

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS (Monochrome Luxury Palette: Slate/Zinc/Black)
- **Icons**: Lucide React
- **Canvas / Image Processing**: HTML5 Canvas API (Facial Contour Analysis)
- **Architecture**: Modular React Component Pattern & Local Storage Persistence

---

## 🚀 Getting Started (시작하기)

### 1. Clone the repository
```bash
git clone https://github.com/Ychae22/me-be-atelier.git
cd me-be-atelier
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```
브라우저에서 `http://localhost:5173`으로 접속하여 ME:BE 아뜰리에를 경험할 수 있습니다.

### 4. Build for production
```bash
npm run build
```

---

## 📂 Project Structure (디렉토리 구조)

```text
my-beauty/
├── public/                 # 정적 에셋 및 파비콘
├── src/
│   ├── components/         # 7대 핵심 뷰 및 UI 모듈
│   │   ├── MeFaceAnalysis.jsx       # ME 페이스 분석 및 사진 등록 스탠바이
│   │   ├── BeautyDnaReport.jsx      # 12영역 추구미 진단 리포트
│   │   ├── ConsultingRoadmap.jsx    # 30일 캘린더 우선 뷰 & 데일리 루틴
│   │   ├── BeforeAfterGallery.jsx   # 비포/타겟/파이널 사진 업로드 트래커
│   │   ├── PackageHub.jsx           # 청담 제휴 헤어/피부 패키지 허브
│   │   ├── InspirationFeed.jsx      # 아뜰리에 비주얼 피드
│   │   └── StyleArchive.jsx         # 스타일 아카이브
│   ├── App.jsx             # 메인 네비게이션 & 전역 상태 관리
│   ├── main.jsx            # 진입점
│   └── index.css           # Tailwind 및 커스텀 스타일
├── .gitignore              # Git 제외 파일 정의
├── package.json            # 의존성 및 스크립트 정의
├── tailwind.config.js      # 럭셔리 모노크롬 테마 설정
├── vite.config.js          # Vite 빌드 설정
└── README.md               # 플랫폼 안내서
```

---

## 🖤 Brand Identity & Philosophy

> **ME (도달가능미)**: 나의 고유한 골격, 이목구비 비율, 현재의 베이스  
> **BE (추구미)**: 내가 지향하는 분위기, 워너비 스타일, 진정한 아름다움  
> **ME:BE**: 불가능한 환상이 아닌, 현실적 데이터 분석과 30일 로드맵을 통해 완성되는 나만의 프라이빗 뷰티 아뜰리에.

---

© 2026 ME:BE ATELIER. All Rights Reserved.
