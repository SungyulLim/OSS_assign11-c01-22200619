# Assignment 4-3. React Component & State 22200619 임성열 

## Project Information
### 프로젝트 소개


### 주요기능 
### 원본 Sample Project URL

---
## Installation
### 설치·실행 방법 및 실행 화면

## Source Code Exploration: 
### 주요 파일 3개

#### App.jsx
- 프로젝트의 전체 화면을 구성하는 컴포넌트. 제목, 설명, 푸터를 표시하고, CourseList를 배치하여 과목 목록이 화면에 나타나도록 표시.

#### CourseList.jsx
- 과목 목록과 입력값을 State로 관리하는 컴포넌트. 과목 개수와 완료 개수를 계산하고, 각 과목을 CourseItem으로 출력. 삭제, 완료, 추가 기능을 담당.

#### CourseItem.jsx
- 과목 하나를 화면에 표시하는 컴포넌트. 부모에게 받은 과목명, 분류, 완료 여부를 표시하며, 삭제 버튼이나 완료 체크박스를 조작하면 부모에게 받은 함수를 호출.

### Component와 Props 관계, 
- CourseList는 부모 컴포넌트이고, CourseItem은 자식 컴포넌트이다. 부모는 과목 배열을 map()으로 순회하며 과목마다 하나의 CourseItem을 생성한다.

| Props | 전달하는 값 | 자식에서 사용하는 방법 |
|---|---|---|
| course | 과목 하나의 객체 | 과목명, 분류, 완료 여부 등을 표시한다. |
| onDelete | 부모의 handleDelete 함수 | 삭제 버튼을 누르면 해당 과목의 ID를 전달하여 호출한다. |
| onToggle | 부모의 handleToggle 함수 | 체크박스를 변경하면 해당 과목의 ID를 전달하여 호출한다. |

### useState 및 Event 분석
- CourseList는 useState로 과목 목록과 입력값을 관리. 
- setCourses()와 setNewName()으로 상태를 변경하면 React가 변경된 내용을 화면에 반영.
- 삭제 버튼을 누르면 CourseItem이 부모에게 전달받은 onDelete(course.id)를 호출. 
- 부모의 handleDelete()는 삭제 여부를 확인하고, 사용자가 확인하면 filter()로 해당 과목을 제외한 새 배열을 생성.
- 이를 setCourses()로 저장하면 목록과 과목 개수가 갱신됨.

### 주요 코드 2개 설명
1. 과목 목록 출력과 Props 전달 — (CourseList.jsx)

``` javascript
{courses.map((course) => (
  <CourseItem
    key={course.id}
    course={course}
    onDelete={handleDelete}
    onToggle={handleToggle}
  />
))}
```
- map()은 courses 배열의 각 과목을 하나의 CourseItem으로 변환.
- key에는 고유한 과목 ID를 지정하여 React가 목록 항목을 식별할 수 있게 함.
- course에는 해당 과목 객체를 전달하여 자식이 과목 정보를 표시. 
- onDelete와 onToggle에는 부모의 처리 함수를 전달하여 자식에서 발생한 클릭이나 체크박스 변경을 부모가 처리하도록 부모 함수를 호출.

2. 과목 삭제 - (CourseList.jsx)

``` javascript
function handleDelete(id) {
    if (!window.confirm("이 과목을 삭제하시겠습니까?")) return;
    setCourses((previous) => previous.filter((course) => course.id !== id)); 
  }
```

- 삭제할 과목의 id를 받아 확인창을 표시. 
- 취소하면 함수를 종료하고, 확인하면 filter()로 해당 과목을 제외한 새 배열을 구성. 
- setCourses()로 상태를 변경하면 과목 목록과 통계가 화면에 즉시 반영.

---
## Customizing: 수정한 데이터, 텍스트, 스타일 및 파일명

### 1. 초기 과목 데이터 변경
- 수정 파일: `src/data/courses.js`
- 초기 과목을 내가 선택한 다음 5개 과목으로 변경.
  - OSS
  - WSD
  - Discrete Mathematics
  - Computer Architecture and Organization
  - 선형대수학
- 기존 데이터 구조인 `id`, `name`, `category`, `completed`는 유지.

### 2. 프로젝트 제목 및 설명 변경
- 수정 파일: `src/App.jsx`
- 프로젝트 제목을 `My Course Manager`에서 `26-2 학기 시간표`로 변경.
- 설명을 `React Component, Props & State Practice`에서 `수강 과목과 학습 완료 현황을 관리`로 변경.
- 개인 학기의 수강 과목을 관리하는 목적에 맞게 화면 문구를 수정.

### 3. CSS 스타일 변경
- 수정 파일: `src/App.css`

| 수정한 선택자 | 주요 변경 내용 |
|---|---|
| `:root` | 전체 배경색을 연한 초록색 `#f0fdf4`로 변경. |
| `.hero h1` | 제목 글자색을 진한 초록색 `#166534`로 지정. |
| `.btn.primary` | Add 버튼의 배경색을 초록색 `#15803d`로 변경. |
| `.btn.primary:hover` | Add 버튼에 마우스를 올리면 진한 초록색 `#166534`가 표시되도록 변경. |

## Feature Extension: 구현한 기능 2개 이상, 주요 코드 및 동작 결과

## Deployment
### 실제 접근 가능한 Vercel URL: https://oss-week11-sample-project.vercel.app/

## Weekly Review
### 새롭게 배운 내용 3가지
### 어려웠던 점과 해결 방법
### AI 활용 내용 및 느낀 점