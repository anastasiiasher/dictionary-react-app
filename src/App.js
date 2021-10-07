import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container card">
        <header>
          <h1 className="mt-5 mb-5"> Dictionary App </h1>
        </header>
        <main>
          <Dictionary defaultKeyword="code" />
        </main>
      </div>
      <footer>
        This project was coded by{" "}
        <a
          href="https://www.linkedin.com/in/anastasiia-sherstobitova-4911971b0/"
          target="_blank"
          rel=" noreferrer"
        >
          Anastasiia Sherstobitova
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/anastasiiasher/dictionary-react-app"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://reverent-neumann-8c5184.netlify.app"
          rel="noreferrer"
          target="_blank"
        >
          Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;