/* React 컴포넌트 */

// 함수(형) 컴포넌트
function Group() {
  return React.createElement("div", { role: "group", lang: "en" }, [
    "Group Element",
    "Sectioning content",
  ]);
}

const reactDomRoot = ReactDOM.createRoot(document.getElementById("root"));

reactDomRoot.render(React.createElement(Group));
