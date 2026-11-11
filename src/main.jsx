import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render( // id가 root인 HTML 요소를 찾아 React 루트를 생성하고 화면을 렌더링
  <React.StrictMode> {/*개발 중 잠재적인 문제를 감지하고 경고하기 위해 사용하는 도구 */}
    <App /> {/* App 컴포넌트를 렌더링 */}
  </React.StrictMode>,
);
