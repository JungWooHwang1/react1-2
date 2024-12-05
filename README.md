# react1-2 202030435 황정우

## 10주차 수업 내용
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

# 📘 학습 내용 정리

## 9주차: REST와 JSON Server

### REST
- **REST (Representational State Transfer)**: 자원을 이름으로 구분하여 자원의 상태를 통신으로 주고받는 아키텍처.
  - **특징**:
    - HTTP URI로 자원을 명시.
    - HTTP Method로 자원에 CRUD를 적용 (POST, GET, PUT, DELETE, PATCH).
  - **CRUD 기능**:
    - **Create**: 데이터 생성 (POST).
    - **Read**: 데이터 조회 (GET).
    - **Update**: 데이터 수정 (PUT, PATCH).
    - **Delete**: 데이터 삭제 (DELETE).

### REST API 설계 규칙
1. URI는 동사보다는 **명사**를 사용하며, **소문자**로 작성.
2. 주소 마지막에 슬래시(`/`)를 포함하지 않음.
3. 단어 연결 시 **하이픈(`-`)** 사용.
4. 파일 확장자는 URI에 포함하지 않음.
5. URI에 메서드를 포함하지 않음.

### JSON Server
- **JSON Server**는 로컬에 가상의 REST API를 제공해 프런트엔드 개발에 적합한 Node.js 패키지.
- **주요 명령어**:
  - 설치: `npm i -g json-server`
  - 버전 확인: `json-server --version`
  - 실행: `json-server ./data.json --port {포트 번호}`

