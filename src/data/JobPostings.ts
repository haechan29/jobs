import { JobPostingDto } from '../types/JobPostingDto';

export const jobPostingDtos: JobPostingDto[] = [
  {
    company: '뉴플로이',
    location: '서울특별시 강남구 학동로7길 5, 베틀빌딩 4층 (논현동)',
    platform: 'React Native',
    experienceLevel: [1, 3],
    requirements: [
        'React-native 이용한 실무 경험',
        'Git을 이용한 코드 형상 관리 경험',
        'Backend, Network, Database에 대한 기초적인 이해',
        '상용 서비스 개발 및 운영 경험 보유',
        '영어 기술 문서를 이해하는 능력'
    ],
    preferences: [
        'TypeScript 개발 경험',
        '안드로이드 및 IOS 개발 경험 보유',
        '유닛 테스트 및 UI 테스트 작성 경험 보유',
        '앱 최적화 및 Localization 경험 보유',
        '최신 개발 동향에 관심이 많은 분',
        '오픈소스 공헌 및 관련 활동 경험 보유',
        'React-native 이용한 실무 경험 3년 이상',
        '더 나은 코드를 위해 항상 노력하고 협업을 즐기시는 분'
    ],
    deadline: '상시채용',
    applyUrl: 'https://www.wanted.co.kr/wd/284690'
  },
  {
      company: '인티그레이션(메디스트림)',
      location: '서울특별시 강남구 테헤란로 427 위워크타워 선릉 2호점 2층',
      platform: 'Flutter',
      experienceLevel: [3, 10],
      requirements: [
        '모바일 앱 개발 3년 이상 혹은 그에 준하는 실력을 보유하신 분',
        'Flutter 경험이 부족하더라도, 네이티브 개발에 익숙하고 새로운 기술에 대한 전환 의지가 있다면 충분히 적응하실 수 있습니다.',
        '모바일 아키텍처 전반에 대한 이해도가 높으신 분',
        'Flutter 프레임워크 전반에 대한 이해가 있으신 분',
        'RESTful API 기반 통신에 대한 기본기가 있으신 분',
        'Git 등 버전 관리 시스템에 대한 실무 경험'
      ],
      preferences: [
        'Flutter로 상용 앱 개발·운영 경험',
        'Dart 언어에 대한 이해 및 개발 경험',
        'Riverpod, BLoC, Provider 등 상태 관리 라이브러리를 사용해보신 분',
        'iOS, Android 개발 경험이 있으신 분',
        'SDK, 플러그인, 라이브러리 개발에 대한 이해 또는 관심'
      ],
      deadline: '상시채용',
      applyUrl: 'https://www.wanted.co.kr/wd/301471',
  },
  {
    company: '아이리버',
    location: '서울 서초구 방배로18길 5',
    interestScore: 1,
    platform: 'Android',
    experienceLevel: [2, 10],
    requirements: [
      '대졸 이상 해당자',
      'Android JAVA+XML 아키텍처 설계 및 구현 가능하신 분',
      'Android Kotlin (XML, Compose) 아키텍처 설계 및 구현 가능하신 분',
    ],
    preferences: [
      'Flutter 개발 가능 및 스토어 등록해 보신 분',
      'IOS Swift 및 SwiftUI 앱 개발 가능 및 스토어 등록해 보신 분',
      '자체 출시된 Android 기반 제품에서 SW 개발해 보신 분',
      'C/C++ 객체 지향 설계 및 구현 가능 하신 분',
      'Android Audio 및 관련 개발 경험이 있으신 분',
      'Android Native Frameworks 이해도가 높고 디버깅이 가능 하신 분',
      'Media Codec 개발이나 FFMPEG 디버깅 및 적용해 보신 분',
      'Android Exoplayer ffmpeg 최적화 디버깅 및 개발 가능 하신 분',
      'NDK/JNI 개발 및 인터페이스 설계 적용 가능 하신 분',
      '오픈소스 실제 고도화 및 적용에 자신 있으신 분',
      '코드관리 Git 및 Linux Console 환경 개발 경험이 있으신 분'
    ],
    deadline: '상시채용',
    applyUrl: 'https://www.wanted.co.kr/wd/301356'
  },
  {
    company: '딥파인',
    location: '서울시 용산구 한강대로30길 25 (아스테리움 용산) 10층',
    platform: 'Android',
    experienceLevel: [3, null],
    requirements: [
      '전문학사 이상',
      'Android 개발 경력 3~5년 또는 동등한 실력',
      'Android 플랫폼 환경 이해',
      'MVVM, MVI 아키텍처 이해 및 활용 경험',
      'Compose를 활용한 컴포넌트 개발 및 관리 경험',
      '팀원과 원활한 협력 및 긍정적 영향력'
    ],
    preferences: [
      'AR 관련 모듈(ARCore) 사용 개발 경험 우대',
      'Unity에서 빌드된 모듈을 Android에 병합한 경험이 있으신 분',
      'Kotlin, MVVM, Coroutine, AAC 등 최신 기반의 기술 관련 경험 우대',
      '리팩토링 및 구조 변경을 운영 중인 서비스에서 성공적으로 수행해 본 경험이 있으신 분',
      '최신 Android 기술 동향을 꾸준히 학습하고 적용하는 분'
    ],
    deadline: '상시채용',
    applyUrl: 'https://www.wanted.co.kr/wd/298288'
  },
  {
    company: '페이히어',
    location: '서울특별시 강남구 강남대로 374, 16층',
    platform: 'Android',
    experienceLevel: [3, null],
    requirements: [
      'Android 개발 및 운영 경험이 3년 이상 또는 그에 준하는 경험',
      '프로젝트 풀사이클 경험 (설계 → 구축 → 출시)',
      'Network Socket TCP/IP 개발 경험',
      'RxJava, Kotlin Coroutines 등 Reactive Programming 경험'
    ],
    preferences: [
      '멀티 모듈 프로젝트로 구성한 경험이 있으시면 더 좋습니다.',
      'NDK를 이용한 JNI 개발 경험이 있으시면 더 좋습니다.',
      '네트워크 통신, 앱 보안에 대한 이해도가 높은 분이면 더 좋습니다.',
      'Android 기반 임베디드 단말기에서 구동되는 앱 개발 경험이 있으시면 더 좋습니다.',
      '금융/핀테크 및 커머스 서비스를 개발하고 운영해본 경험이 있으시면 더 좋습니다.'
    ],
    deadline: '상시채용',
    applyUrl: 'https://www.wanted.co.kr/wd/290296'
  },
  {
    company: '여기어때컴퍼니',
    location: '서울특별시 강남구 봉은사로 479',
    platform: 'Android',
    experienceLevel: [3, 6],
    requirements: [
      'UI/UX, 성능, 안정성 고려한 사용자 중심 앱 경험 고민',
      '협업과 커뮤니케이션을 중시, 코드 리뷰 및 기술 공유',
      'Android 플랫폼 깊은 이해 및 기술 변화 유연 대응',
      'Jetpack Compose, Kotlin Coroutines, Hilt, Clean Architecture 등 사용 또는 빠르게 학습 가능',
      '복잡한 문제를 기술적으로 우수하게 해결하려는 관심'
    ],
    preferences: [
      '여행을 좋아하는 분',
      'Android 외의 다른 분야에도 관심이 많은 분',
      '가독성에 대해 늘 고민하는 분',
      '귀찮고 불편한 것을 더 쉽고 편하게 바꿀 방법을 고민하는 분'
    ],
    deadline: '상시채용',
    applyUrl: 'https://www.wanted.co.kr/wd/301384'
  },
  {
    company: '네이버제트 (NAVER Z)',
    location: '경기도 성남시 분당구 불정로 6 그린팩토리',
    platform: 'Android',
    experienceLevel: [3, null],
    requirements: [
      'Kotlin 기반 Android 개발 경력 3년 이상',
      'Jetpack Compose를 자유롭게 활용할 수 있는 수준',
      'AI 기반 개발 도구 (FireBender, Gemini, Copilot 등) 활용 경험',
      '서비스 품질·성능·UX 개선에 관심 있고 팀과의 커뮤니케이션에 적극적인 분'
    ],
    preferences: [
      'Unity-Android 연동 혹은 JNI/NDK 등 네이티브 인터페이스 개발 경험이 있으신 분',
      '새로운 기술이나 도구를 빠르게 습득 및 검증하고, 이를 팀에 전파하여 개발 문화를 개선한 경험이 있으신 분',
      'Fragment 라이프사이클과 Navigation Component를 능숙하게 다룰 수 있으신 분',
      '멀티모듈 구조 설계, 테스트 코드 및 CI/CD 자동화 경험이 있으신 분'
    ],
    deadline: '2025.08.10',
    applyUrl: 'https://www.wanted.co.kr/wd/298984'
  },
  {
    company: '마카롱팩토리',
    location: '경기 성남시 분당구 대왕판교로644번길 49',
    platform: 'Android',
    experienceLevel: [3, null],
    requirements: [
      'Android 애플리케이션 개발 경험이 최소 3년 이상',
      'Java/XML 프로젝트에 Kotlin 및 Compose 도입 및 리팩토링 경험',
      '시스템 개선 필요 인식 및 아키텍처 설계, 디자인 패턴 구현 경험',
      '팀 내·외부와 원활한 소통 및 능동적 업무 추진능력',
      '코드 리뷰를 통한 서비스 품질 개선 인식',
      '새로운 기술을 적극적으로 습득하고 활용하는 태도'
    ],
    preferences: [
      'MVI, 구글 앱 아키텍처, 클린 아키텍처 등 다양한 아키텍처와 디자인 패턴을 주도적으로 설계하고 적용하신 경험이 있는 분',
      '디자인 시스템을 적용해 본 경험이 있는 분',
      'Unit Test 및 UI Test를 작성해 본 경험이 있는 분',
      'Fastlane, Github Actions를 이용한 CI/CD 환경을 구축한 경험이 있는 분',
      '프로젝트에 대한 오너십을 가지고 주도적으로 일할 수 있는 분',
      '효율적인 팀 협업문화의 도입에 관심이 많고, 이를 주도해 보신 분',
      '오픈소스 활동이나 기술 블로그, 개인 애플리케이션 개발 경험이 있는 분',
      '안드로이드 최신 기술 동향에 관심이 많고 동료와 지식을 공유하는 것을 즐기시는 분'
    ],
    deadline: '2025.08.31',
    applyUrl: 'https://www.wanted.co.kr/wd/277839'
  },
  {
    company: '라바웨이브',
    location: '서울시 강남구 헌릉로571길 32',
    platform: 'Android',
    experienceLevel: [3, null],
    requirements: [
      'Android 개발 경험 3년 이상 또는 이에 준하는 실력',
      'Java/Kotlin 개발 언어에 능숙하신 분',
      '상용 서비스 개발 및 운영 경험',
      '모바일 애플리케이션 성능 최적화 및 문제 해결 능력',
      '뛰어난 문제 해결 능력과 협업 능력'
    ],
    preferences: [
      '글로벌 시장 제품 기획 또는 출시 경험',
      '커스텀 키보드 개발 경험이 있으신 분',
      'iOS 앱 개발 경험이 있으신 분',
      '새로운 기술 습득을 즐기시는 분',
      '신규 서비스를 함께 성공시키고자 하는 열정이 있으신 분'
    ],
    deadline: '상시채용',
    applyUrl: 'https://www.wanted.co.kr/wd/299550'
  },
  {
    company: '샤플앤컴퍼니',
    location: '서울 강남구 도곡로 111 미진빌딩 8층',
    platform: 'Android',
    experienceLevel: [3, 7],
    requirements: [
      'Android 개발 경험 3년 이상',
      'Jetpack Compose 사용 경험',
      '비동기 프로그래밍 및 Coroutine 이해',
      '다양한 모바일 Architecture 이해'
    ],
    preferences: [
      '레거시 프로젝트를 점진적 개선해본 경험이 있으신 분',
      'Google App Architecture 기반의 프로젝트를 경험해 보신 분',
      'Multi-Module 프로젝트를 경험해 보신 분'
    ],
    deadline: '2025.09.30',
    applyUrl: 'https://www.wanted.co.kr/wd/299130'
  },
  {
    company: '에스엠하이플러스',
    location: '서울 서대문구 신촌역로 30',
    platform: 'Android',
    experienceLevel: [3, 8],
    requirements: [
      '안드로이드 앱 개발 경력 3년 이상 8년 이하 또는 이에 준하는 실무 경험',
      'Java 또는 Kotlin에 대한 깊은 이해',
      '다양한 디바이스/OS 버전 대응 및 테스트 경험',
      '상용 서비스 배포 경험'
    ],
    preferences: [
      '하이브리드 앱(Ionic) 또는 크로스 플랫폼 앱(React Native) 개발 경험',
      '하이브리드 앱 브릿지 모듈을 설계 및 구현',
      '자기주도적인 개발과 전체 프로세스를 고려한 설계와 구현이 가능한 분',
      '금융 도메인 경험 또는 보안에 대한 이해',
      'CI/CD 환경 구성 및 자동화 배포 경험 (GitHub Actions, Jenkins 등)'
    ],
    deadline: '2025.08.07',
    applyUrl: 'https://www.wanted.co.kr/wd/300029'
  },
  {
    company: '클라썸',
    location: '서울 강남구 테헤란로2길 27, 14층',
    platform: 'React Native',
    experienceLevel: [2, null],
    requirements: [
      'TypeScript에 능숙한 분',
      'React-Native, Jotai 사용 경험',
      'CodePush 등을 이용한 효율적인 배포 관리 경험',
      'Git을 통한 버전 관리 능숙',
      '배움에 대한 열정과, 지속적인 피드백을 주고받는 팀 성장을 추구하는 분',
      '맡은 작업에 대한 오너십과 완성에 대한 열정'
    ],
    preferences: [
      'React 컴포넌트의 재사용을 기반으로 한 React-Native 개발 경험이 있는 분',
      'React-Native 앱 최적화한 경험이 있는 분',
      'WebSocket 혹은 Socket.IO로 많은 사람들이 접속하는 실시간 채팅 서비스를 구현한 경험이 있는 분',
      'React Native Reanimated를 활용해서 애니메이션 구현한 경험이 있는 분',
      'React Native에서 Native-Module을 활용한 경험이 있는 분',
      '다국어 지원 서비스를 개발한 경험이 있는 분',
      'Fastlane을 통해서 빌드 자동화, 지속적 통합 경험이 있는 분',
      'GitHub Copilot, Cursor, Claude Code 등 AI 코딩 어시스턴트와 ChatGPT/Claude/Gemini 등을 개발 워크플로우에 적극 활용하신 경험이 있는 분'
    ],
    deadline: '상시채용',
    applyUrl: 'https://www.wanted.co.kr/wd/300185'
  },
  {
    company: '티티테라',
    location: '서울 영등포구 여의서로 43, 913호',
    platform: 'Android',
    experienceLevel: [3, null],
    requirements: [
      'Android 앱 개발 경력 3년 이상 또는 그에 준하는 경험',
      'Kotlin 및 Android SDK 이해',
      'RESTful API 연동 및 네트워킹 이해',
      'Git 등 버전관리 툴 사용 경험',
      '문제 해결 중심의 능동적 태도 및 협업 마인드'
    ],
    preferences: [
      'AI 관련 프로젝트(i.e. 음성 인식, NLP 등) 연동 경험',
      '구글 플레이 스토어 출시 및 운영 경험',
      '스타트업 근무 경험'
    ],
    deadline: '상시채용',
    applyUrl: 'https://www.wanted.co.kr/wd/267651'
  },
  {
    company: '라라잡 (동네알바)',
    location: '서울 강서구 공항대로 165, C동 10층',
    platform: 'React Native',
    experienceLevel: [2, null],
    requirements: [
      '운영 환경에서 React Native 기반의 개발 경험 2년 이상',
      'TypeScript (JavaScript) 중/상급 수준의 지식',
      '유관 부서와의 원활한 커뮤니케이션 능력',
      '기술 검토 및 도입에 도전적인 마인드'
    ],
    preferences: [
      '모바일 앱 개발 경험이 많은 분을 찾고 있어요.',
      '모바일 앱 내에서 웹뷰를 이용한 통신 경험이 있으시면 도움이 되실거에요.',
      '앱 제품을 운영하는 스타트업 경험이 있다면 적응하는데 도움이 되실 거예요.',
      '앱 배포 및 CI/CD 구축 경험이 있다면 도움이 되실 거예요.',
      '디자인 시스템을 만들거나 사용해 본 경험이 있는 분이면 적응하는데 도움이 되실 거예요.',
      'React Native 앱에서 단위 테스트 및 E2E 테스트 경험이 있으신 분이면 도움이 되실 거예요.'
    ],
    deadline: '상시채용',
    applyUrl: 'https://www.wanted.co.kr/wd/298072'
  },
  {
    company: '크림(KREAM)',
    location: '경기도 성남시 분당구 분당내곡로 131, 테크원타워 8층',
    platform: 'Android',
    experienceLevel: [3, 10],
    requirements: [
      '3년 이상 Android 앱 개발 및 출시 경험',
      'Kotlin 개발에 능숙',
      'Android 최신 트렌드를 활용한 개발 경험',
      '문제 진단 및 창의적 해결 능력'
    ],
    preferences: [
      'Android UI 개발 및 Corountine을 이용한 비동기 프로그래밍에 익숙하신 분',
      'Compose, AAC, Jetpack, MVVM, DI 등 개발 트렌드에 관심이 있으신 분',
      'TDD, Unit/UI Test 등 애플리케이션 테스트에 대한 이해 및 적용 경험이 있으신 분',
      '스타트업 및 애자일 조직 경험이 있으신 분',
      '적극적이고 논리적인 커뮤니케이션이 가능하신 분',
      '최고의 서비스를 만들기 위한 자발적인 목표와 전략을 설정하시는 분',
      '스니커즈 또는 패션 리셀 시장과 문화에 대한 관심이 높으신 분'
    ],
    deadline: '상시채용',
    applyUrl: 'https://www.wanted.co.kr/wd/225696'
  },
  {
    company: '피에프씨테크놀로지스',
    location: '서울 서초구 서초대로50길 35, 근정빌딩 3-7층',
    platform: 'Android',
    experienceLevel: [2, null],
    requirements: [
      'Kotlin 기반 Android 앱 2년 이상 개발 경험',
      'Compose에 능숙하거나 View 기반 UI에서 Compose 전환 경험',
      'Room, Paging 등 Jetpack 컴포넌트 사용 경험',
      'MVVM 또는 MVI 아키텍처 패턴 적용 경험',
      'Dagger Hilt, Data Binding, Retrofit2 + OkHttp3 활용 경험'
    ],
    preferences: [
      '최신 개발 트렌드를 꾸준히 학습하고, 실제 프로젝트에 적용해보신 분',
      '대규모 사용자 기반의 B2C 앱을 운영하거나 성능을 개선해보신 분',
      '유저 경험을 세심하게 고민하며, 인터페이스 최적화를 경험해보신 분',
      '유지보수성과 성능을 고려한 코드 리팩토링 및 구조 개선을 주도해보신 분',
      '팀원과 원활하게 소통하며, 어려운 기술 문제도 함께 해결해보신 분'
    ],
    deadline: '상시채용',
    applyUrl: 'https://www.wanted.co.kr/wd/292558'
  },
  {
    company: '에버엑스',
    location: '서울특별시 강남구 강남대로94길 10, 7층 702호',
    platform: 'Flutter',
    experienceLevel: [3, null],
    requirements: [
      'Flutter 또는 Android(Java/Kotlin) 개발 경력 3년 이상',
      'Flutter 개발 경험 (개인 프로젝트 포함) 보유자',
      '수학적 사고력을 요구하는 자연과학/공학 전공자 또는 그에 준하는 역량 보유자'
    ],
    preferences: [
      '카메라 기반 이미지 처리 개발 경험',
      '자세 추정 모델 연동 또는 활용 경험',
      'Flutter 개발 프로젝트 실무 경험',
      'RESTful API 기반 백엔드 연동 경험',
      'SQL 활용 경험'
    ],
    deadline: '상시채용',
    applyUrl: 'https://www.wanted.co.kr/wd/299798'
  },
  {
    company: '지바이크 (gbike)',
    location: '서울특별시 강남구 테헤란로4길 28, 12층',
    platform: 'React Native',
    experienceLevel: [1, null],
    requirements: [
      '컴퓨터 공학, 소프트웨어 공학 또는 관련 분야 학사 이상 또는 그에 상응하는 경력',
      'React Native를 이용한 모바일 애플리케이션 개발 경험',
      'React 및 JavaScript(ES6+)에 대한 심층적인 이해',
      '모바일 앱 성능 최적화 경험',
      '협업 도구(Git, Jira 등) 사용에 능숙'
    ],
    preferences: [
      '컴퓨터 과학 또는 관련 분야 석사 이상',
      '사용 서비스 개발 및 운영 경험',
      'Google Map/Naver Map API 사용 경험',
      'iOS 또는 Android 네이티브 개발 경험',
      'Node.js 및 Express.js 같은 백엔드 기술에 대한 경험',
      '애자일 개발 방법론에 대한 이해 및 경험',
      'UI/UX 디자인에 대한 감각 및 경험',
      '효과적인 커뮤니케이션 능력 및 팀워크'
    ],
    deadline: '상시채용',
    applyUrl: 'https://www.wanted.co.kr/wd/233494'
  },
  {
    company: '와트',
    location: '경기도 성남시 수정구 금토로80번길 11, 판교이노베이션랩 지식산업센터 605호',
    platform: 'Android',
    experienceLevel: [1, null],
    requirements: [
      '학력무관',
      '경력 1년 이상',
      'Android 앱 개발 경력 2년 이상',
      'UX/UI 플랫폼 개발 환경에 대한 이해도',
      '원활한 커뮤니케이션 능력'
    ],
    preferences: [
      '인근거주자',
      '유관업무 경력자',
      'Java 개발 경험',
      'RESTFul API 연동 개발에 경험이 있으신분',
      'Git에 대한 이해 및 경험이 있으신 분'
    ],
    deadline: '상시채용',
    applyUrl: 'https://www.wanted.co.kr/wd/284682'
  },
  {
    company: '더스윙',
    location: '서울시 용산구 서빙고로 17, 용산 센트럴파크타워, 28F 더스윙',
    platform: 'Android',
    experienceLevel: [1, 3],
    requirements: [
      'Android 개발 경력 2년차 이상이신 분',
      'Flutter 개발 경험이 있으신 분',
      'Coroutine에 대한 이해가 있으신분',
      'Jetpack Compose를 이용해 상용 앱 개발 경력이 있으신 분',
    ],
    preferences: [
      'Flutter Riverpod을 활용한 상태관리 경험이 있으신분',
      'dart 비동기 통신에 대한 이해도가 있으신 분',
      'WebSocket 경험',
      '앱 최적화 보유 경험',
      '도메인 기반 서비스 분석 및 설계에 대한 이해',
      '팀 내부 및 유관부서와의 원활한 협업, 소통이 가능하신 분',
    ],
    deadline: '2025.09.12',
    applyUrl: 'https://www.wanted.co.kr/wd/301807'
  },
]
