<div align="center">
  <h2>Jobs</h2>
  채용공고 사이트 <a href="https://jobs-all.vercel.app/">📎</a> <br/><br/>
  <img width="600" src="https://github.com/user-attachments/assets/3e7af47d-10f4-4df2-b9e6-a8946d3ce134" /><br/><br/>
  ✅️ <strong>나의 역량 확인하고 기록해두기</strong><br/><br/>
  ✅️ <strong>원하는 / 필요한 채용 공고부터</strong><br/><br/>
</div>

### 사용 기술
|제목|설명|
|------|---|
|Language|TypeScript|
|Platform|React|
|DB|LocalStorage|
|Animation|Motion|

### FAQ
<details>
  <summary>
    사용자가 설정한 값은 어떻게 저장하나요? (필터 설정, 좋아요 등)
  </summary>
  <pre><code>
사용자 설정 값은 LocalStorage에 저장됩니다.<br/><br/><br/><br/>
ㅤ
✨ 파싱 실패, 직렬화 실패 등의 예외 처리가 되어 있습니다
✨ 여러 탭에서 켜놔도 한 탭에서 DB 저장된 값이 변경되면 다른 탭에도 변경사항이 공유됩니다
✨ Custom Hook으로 사용하기 간편합니다.
ㅤ
    <details>
      <summary>코드 보기</summary>
      <img width="700" alt="local storage 관련 custom hook 코드" src="https://github.com/user-attachments/assets/b21314d5-9c9a-4143-a49a-c7a5202dfcef" />
    </details>

  </code></pre>
</details>

<details>
  <summary>
    애니메이션은 어떻게 구현되었나요?
  </summary>
  <pre><code>
Motion 라이브러리를 사용했습니다.
컴포넌트를 key 값 기준으로 구분하기 때문에 사용하기 쉽고, react 생태계에서 활발하게 사용되는 라이브러리입니다.
ㅤ
⭐ 애니메이션을 적용한 이유
ㅤ
필터와 정렬은 자주 사용되는 기능이라 판단하여 화면 배치 상 가까운 곳에 두고 싶었습니다.
다만 필터와 정렬 모두 세부 옵션이 많아 (ex. 플랫폼 - Android, iOS 등) 모두 보여줄 경우 UI가 겹치는 문제가 있었습니다.
이를 해결하기 위해 선택되지 않았을 때는 접혀 있다가, 선택되었을 때 세부 옵션을 보여주면서 다른 필터와 정렬을 보이지 않게 했습니다.
이로 인해 필터와 정렬 UI를 간결하게 보여주면서도, 조건 설정 시에 채용 공고 영역이 불필요하게 밀리지 않아 사용자가 불편함 없이 사용할 수 있습니다.
ㅤ
[필터 영역 접힌 경우]
<img width="500" height="140" alt="스크린샷 2025-08-12 오후 7 07 37 복사본" src="https://github.com/user-attachments/assets/27edb604-f6c6-49b8-b618-3cd277426f47" />
ㅤ
[필터 영역 펼쳐진 경우]
✨ 선택된 필터 영역만 펼쳐지게
✨ 정렬 영역은 안 보이게
<img width="500" height="140" alt="스크린샷 2025-08-12 오후 7 08 18 복사본" src="https://github.com/user-attachments/assets/4577e2dd-ee49-42a1-986d-c9095eb0255e" />
  </code></pre>
</details>

<details>
  <summary>
    어려웠던 부분은?
  </summary>
  <pre><code>
React에서는 함수가 UI 컴포넌트를 반환합니다.
데이터가 변경된 경우 함수가 재호출되는데, 
useEffect 훅을 사용하면 블럭 내에 작성된 코드는 의존성이 변경된 경우에만 실행되고, 그 외의 경우에는 실행되지 않습니다.
ㅤ
경력 필터 클릭시 슬라이더가 3초 노출된 후에 사라지는 기능을 구현했는데, 처음에는 선택된 필터의 종류를 의존성으로 설정했습니다.
<img width="500" height="180" alt="스크린샷 2025-08-12 오후 7 20 35 복사본" src="https://github.com/user-attachments/assets/84030bb0-621f-4869-bfae-e00b693b4002" />
ㅤ
의존성 배열에 변수를 그대로 넣었더니
다른 필터가 선택된 경우 (selectedKey === 'other key') 와
필터가 선택 해제된 경우 (selectedKey === null) 을 구분하지 못해서
다른 필터가 선택된 경우에 다시 선택이 해제되는 버그가 발생했습니다.
ㅤ
<img width="500" height="180" alt="스크린샷 2025-08-12 오후 7 20 35" src="https://github.com/user-attachments/assets/ab14a562-ca87-4013-a1d1-3e612186e2a1" />
이를 해결하기 위해 의존성을 블럭 내 코드가 실행되어야 하는 조건으로 명확히 변경했습니다.
그 결과 다른 필터가 선택된 경우에만 해당 코드가 실행되어 문제가 해결됐고, useEffect 훅의 원리에 대해 생각해볼 수 있었습니다.
  </code></pre>
</details>

<details>
  <summary>
    성능 개선을 위해 노력한 점은?
  </summary>
  <pre><code>
필터 옵션을 보여줄 때 Android (5) 와 같이 조건에 부합하는 채용 공고의 갯수를 알려주는 UI 가 있었습니다.
처음에는 컴포넌트 내부에서 채용 공고 리스트와 필터 옵션 리스트를 순회하며 갯수를 세도록 구현했습니다.
<img width="600" height="50" alt="스크린샷 2025-08-12 오후 7 40 31" src="https://github.com/user-attachments/assets/2765558c-0b92-4021-8775-98b2613fdae9" />
ㅤ
이 경우 화면이 렌더링될 때마다 값이 다시 계산되어 불필요한 계산이 발생했습니다.
이러한 문제를 해결하기 위해 useMemo 훅을 사용하여 의존성을 명확히 설정하여 재계산 횟수를 줄였습니다.
<img width="600" height="90" alt="스크린샷 2025-08-12 오후 7 41 13" src="https://github.com/user-attachments/assets/aa591596-9883-4525-aa8b-545302c39106" />
ㅤ
이후 Set을 사용해 전처리하도록 알고리즘을 변경하였고, 순회 횟수를 N * M 에서 N 으로 줄였습니다.
(N = 채용 공고 리스트 크기, M = 필터 옵션 리스트 크기)
<img width="600" height="140" alt="스크린샷 2025-08-12 오후 7 41 26" src="https://github.com/user-attachments/assets/04704053-7937-40d6-b57b-6bfa0d9d3e16" />
  </code></pre>
</details>

