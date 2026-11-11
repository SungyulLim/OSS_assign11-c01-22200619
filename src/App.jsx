import CourseList from "./components/CourseList.jsx"; // CourseList 파일을 import하여 사용

export default function App() { // App 함수를 정의하고 이 파일의 기본 내보내기로 지정
  return (
    <main className="page">
      <header className="hero">
        <div>
          <p className="topline">OPEN SOURCE STUDIO · WEEK 11</p>
          <h1>My Course Manager</h1>
          <p className="subtitle">React Component, Props & State Practice</p>
        </div>
        <span className="tag">STUDENT STARTER</span>
      </header>
      <CourseList /> {/* CourseList 컴포넌트를 가지고와서 화면에 표시 */}
      <footer className="bottom">
        <span>OSS Week 11 · React</span>
        <span>Local state only · Refresh resets data</span>
      </footer>
    </main>
  );
}
