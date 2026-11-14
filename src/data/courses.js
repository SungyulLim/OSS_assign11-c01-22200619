// 초기 데이터는 앱을 새로고침할 때 다시 사용됩니다. (DB/localStorage 미사용)
// 여기에 데이터 저장 => 현재는 삭제 후 새로고침하면 초기 데이터로 돌아감, 데이터 영속성 X

export const initialCourses = [
  { id: 1, name: 'OSS', category: 'Major', completed: false },
  { id: 2, name: 'WSD', category: 'Major', completed: true },
  { id: 3, name: 'Discrete Mathematics', category: 'Elective', completed: false },
  { id: 4, name: 'Computer Architecture and Organization', category: 'Major', completed: false },
  { id: 5, name: '선형대수학', category: 'Elective', completed: true },
];
