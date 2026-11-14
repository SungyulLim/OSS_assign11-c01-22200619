import { useState } from "react"; // React의 useState 훅을 import하여 상태 관리를 위해 사용 =>
import CourseItem from "./CourseItem.jsx"; // CourseItem 파일을 import하여 사용
import { initialCourses } from "../data/courses.js"; // 초기 과목 데이터를 import하여 사용

export default function CourseList() {
  // CourseList 컴포넌트를 정의하고 이 파일의 내보내기 지정
  // [제공] 초기 배열을 useState로 관리합니다.
  const [courses, setCourses] = useState(initialCourses);
  const [newName, setNewName] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // [제공] 삭제 기능: filter로 새 배열을 만들어 업데이트합니다.
  function handleDelete(id) {
    // 삭제 기능
    if (!window.confirm("이 과목을 삭제하시겠습니까?")) return;
    setCourses((previous) => previous.filter((course) => course.id !== id)); // filter를 사용하여 id가 일치하지 않는 과목만 남긴 새 배열을 만들어 setCourses로 상태를 업데이트
  }

  // TODO 1 (필수): 과목 추가 기능을 구현하세요.
  function handleAdd(event) {
    // 추가 기능
    event.preventDefault();
    // TODO: 빈 입력 검사, 새 과목 객체 생성, setCourses 호출, 입력창 초기화
    event.preventDefault();

    if (newName.trim() === "") {
      alert("과목명을 입력해주세요.");
      return;
    }

    setCourses((previous) => {
      const nextId = Math.max(0, ...previous.map((course) => course.id)) + 1;

      const newCourse = {
        id: nextId,
        name: newName.trim(),
        category: "Major",
        completed: false,
      };

      return [...previous, newCourse];
    });

    setNewName("");
  }

  // TODO 2 (필수): 완료 상태 변경 기능을 구현하세요.
  function handleToggle(id) {
    // 완료 상태 변경 기능
    // TODO: map과 spread(...)를 사용하여 해당 id의 completed를 반전
    setCourses(function (previous) {
      const updatedCourses = previous.map(function (course) {
        if (course.id === id) {
          return {
            ...course,
            completed: !course.completed,
          };
        }

        return course;
      });

      return updatedCourses;
    });
  }

  const doneCount = courses.filter((course) => course.completed).length;

  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(searchTerm.trim().toLowerCase()),
  );

  return (
    <>
      <section className="stats" aria-label="과목 통계">
        <div className="stat">
          <span>전체 과목</span>
          <strong>{courses.length}</strong>
        </div>
        <div className="stat">
          <span>완료</span>
          <strong className="green">{doneCount}</strong>
        </div>
        <div className="stat">
          <span>진행 중</span>
          <strong className="blue">{courses.length - doneCount}</strong>
        </div>
      </section>
      <section className="panel">
        <div className="panel-header">
          <h2>My Courses</h2>
          <span className="small-note">{courses.length} courses</span>
        </div>
        <form className="add-form" onSubmit={handleAdd}>
          <input
            className="input"
            value={newName}
            onChange={(event) => setNewName(event.target.value)}
            placeholder="새 과목명을 입력하세요"
            aria-label="새 과목명"
          />
          <button className="btn primary" type="submit">
            + Add Course
          </button>
        </form>
        {/* 과목명 검색 */}
        <div className="tools">
          <input
            className="input"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="과목명 검색"
          />
        </div>

        <div className="list-head">
          <span>COURSE</span>
          <span>CATEGORY</span>
          <span>ACTIONS</span>
        </div>
        {filteredCourses.length === 0 && (
          <div className="empty">
            {courses.length === 0
              ? "등록된 과목이 없습니다."
              : "조건에 맞는 과목이 없습니다."}
          </div>
        )}
        {/*courses 배열이 비어있으면 "등록된 과목이 없습니다."라는 메시지를 표시 */}
        {filteredCourses.map((course) => (
          <CourseItem
            key={course.id}
            course={course}
            onDelete={handleDelete}
            onToggle={handleToggle}
          /> // CourseItem 컴포넌트를 사용하여 각 과목을 표시하고, 삭제 및 완료 상태 변경 기능을 props로 전달
        ))}
      </section>
    </>
  );
}
