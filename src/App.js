import './App.css';
import Dictionary from './Dictionary';

export default function App() {
  return (
    <div className="App">
      <header>
        <h1>Dictionary</h1>
      </header>
      <Dictionary defaultKeyword="planet" />
      <footer className="App-footer">This project was coded by{" "}
        <a href="https://fabulous-kheer-cd4c48.netlify.app/" target="_blank" rel="noreferrer noopener">Claudia Brown</a>
        {" "}and is{" "}
        <a href="https://github.com/cbrown297/dictionary-react" target="_blank" rel="noreferrer noopener">open-sourced on GitHub</a>
        {" "}and{" "} 
        <a href="https://peaceful-hotteok-69a64a.netlify.app/" target="_blank" rel="noreferrer noopener"> hosted on Netlify</a>
      </footer>
    </div>
  );
}
