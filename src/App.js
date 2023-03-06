import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="Prague" />
      <footer>
        Open-sourced code by{" "}
        <a href="https://github.com/TeichlerV" target="_blank">
          Viktoria Teichler
        </a>{" "}
        on GitHub.
      </footer>
    </div>
  );
}

export default App;
