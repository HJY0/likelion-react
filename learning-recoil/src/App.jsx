import "./App.css";
import AppFooter from "./AppFooter";
import AppHeader from "./AppHeader";
// import ReactCounter from "@/ReactCounter/Counter";
// import RecoilCounter from "@/RecoilCounter/Counter";
import PlayList from "./PlayListDisplay";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <PlayList />
      <AppFooter />
    </div>
  );
}

export default App;
