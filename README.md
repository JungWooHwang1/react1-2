# react1-2 202030435 황정우
# 📘 학습 내용 정리

## 9주차: REST와 JSON Server

### REST
REST(Representational State Transfer): 자원을 이름으로 구분하여 자원의 상태를 통신으로 주고받는 아키텍처.

- HTTP URI로 자원을 명시.
- HTTP Method로 자원에 CRUD를 적용 (POST, GET, PUT, DELETE, PATCH).

#### CRUD 기능:
- **Create:** 데이터 생성 (POST).
- **Read:** 데이터 조회 (GET).
- **Update:** 데이터 수정 (PUT, PATCH).
- **Delete:** 데이터 삭제 (DELETE).

#### REST API 설계 규칙:
- URI는 동사보다는 명사를 사용하며, 소문자를 사용.
- 주소 마지막에 슬래시(/)를 포함하지 않음.
- 단어 연결 시 하이픈(-) 사용.
- 파일 확장자는 URI에 포함하지 않음.
- URI에 메소드를 포함하지 않음.

### JSON Server
JSON Server는 로컬에 가상의 REST API를 제공해 프런트엔드 개발에 적합한 Node.js 패키지.

#### 주요 명령어:
- 설치: `npm i -g json-server`.
- 버전 확인: `json-server --version`.
- 실행: `json-server ./data.json --port {포트 번호}`.

## 10주차: Axios와 비동기 데이터 처리

### Axios
#### 특징:
- 간편한 문법, 자동 JSON 변환, `res.data`로 응답 데이터 접근 용이.
- HTTP 통신 관련 정보 포함 (e.g., `res.status`, `res.headers`, `res.config`).
- 복잡한 요청 및 에러 처리가 필요한 경우 적합.

#### 설치 명령어:
- `npm i axios`.

### Fetch API
- 내장 API로 추가 설치 불필요.
- 스트림 처리 지원.
- 단점: JSON 변환 수동 처리 (`res.json()` 호출), 에러 처리 복잡.

### React 기반 비동기 데이터 처리
- `useState`와 `useEffect` 사용: 컴포넌트 상태로 데이터 관리.
- 로딩 상태 처리: 사용자 경험 향상을 위해 로딩 스피너 등 활용.

## 11주차: 스타일링 - CSS와 CSS-in-JS

### 6.1 Styled JSX
Next.js 내장 CSS-in-JS 라이브러리로 별도 설치 불필요.
- 단점: IDE 지원 부족, 앱 번들 증가, 성능 문제.

### 6.2 CSS Module
- 컴포넌트 단위 CSS 스코프 제공.
- CSS 충돌 방지, 전역 CSS 선언 가능.
- `:global` 키워드를 이용해 전역 스타일 지정 가능.

### 6.3 SASS
- SASS 및 SCSS 문법을 사용해 CSS 작성 가능.
- 패키지 설치: `npm install sass`.
- 파일 확장자: `.scss`.

## 12주차: UI 프레임워크

### 7.1 UI 라이브러리
- UI 개발 생산성과 일관성 향상.
- 주요 라이브러리: Chakra UI, Tailwind CSS, Headless UI.

### 7.2 Chakra UI
- 오픈소스 컴포넌트 라이브러리.
- 다크 모드, 타입스크립트 지원.
- 기본 컴포넌트를 조합해 새로운 컴포넌트 생성 가능.

### 7.3 Tailwind CSS
- CSS 규칙만 제공.
- 자유도가 높고 다크/라이트 모드 지원.
- 사용하지 않는 클래스 제거로 최적화 지원.

### 7.4 Headless UI
- 동적 컴포넌트를 제공하는 Tailwind Labs의 프로젝트.
- Tailwind CSS의 부족한 동적 컴포넌트 기능 보완.

## 13주차: Props 흐름과 Context API

### Props 흐름의 이해
- Next.js 데이터 흐름은 단방향으로 부모에서 자식으로 전달.

#### Props Drilling 문제:
- 중간 컴포넌트에 불필요한 Props 전달.
- 타겟 컴포넌트까지 Props가 전달되지 않으면 디버깅 어려움.
- 해결법: 전역 상태 관리 (Context API, Redux).

### Context API
- 전역 상태 관리를 지원하는 React 기본 기능.

#### 주요 구성 요소:
- `createContext`, `Provider`, `useContext`.

#### 장점:
- 간단하고 가벼움, 설정 간편.
- Prop Drilling 문제 해결.

#### 단점:
- 성능 문제, 복잡한 상태 관리 한계.
- 디버깅 도구 부족.

## 14주차: Redux 실습

### Redux의 이해
- Redux는 전역 상태 관리를 위한 라이브러리.

#### 주요 개념:
- Store, Reducer, Action.

#### 장점:
- 구조적 상태 관리, 비동기 로직 처리 지원, 디버깅 도구 제공.

#### 단점:
- 설정 복잡, 작은 애플리케이션에는 과도한 설정.

### Redux 실습
#### 패키지 설치:
- `npm install @reduxjs/toolkit react-redux`.

#### Slice 생성:
- `createSlice`로 상태와 Reducer 함수 정의.

#### Store 설정:
- 모든 Reducer를 중앙에서 관리.

### Counter 컴포넌트:
- `useSelector`로 Redux Store 상태 조회.

## Next 클라이언트 서버 모두에서 데이터를 불러 올 수 있다. 
##             ↓↓↓↓
## 서버 사이드 렌더링, 클라이언트 사이드 렌더링 어느 쪽으로 치우쳐 있지 않다. ∴ 풀스택 개발자들을 위한 그런 클라이언트
## 권장하는 쪽은 부하를 줄이기 위해 클라이언트 사이드 렌더링을 위해서 Next.js를 사용해라

## npm i -global json-server
## json-server ./data.json --port 4000

## 3주차 수업 내용

## 2주차 수업 내용
## pages router 
### 자동 라우팅 
### src/app/page.js 만 바꿔줘도 라우팅이 되는 반면에 

## app router
### 파일 생성 및 내부 소스 경로 수정해줘야함 (수동 라우팅)
### src/app/about/page.js 로 변경

### pages router 방법 불편하여 app router 방식이 나왔다.

### I think 간단한 웹 페이지 면  pages router 방식을 활용하는게 좋고 라우팅할 파일이 많고 무거우면 app router 방식이 좋을거 같다.



