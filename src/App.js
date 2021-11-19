import './App.css';
import SearchContainer from "./Containers/SearchContainer.jsx"
import NavBar from "./Components/NavBar.jsx";

function App() {
  return (
    <div className="App">
      <div><NavBar/></div>
      <div><SearchContainer/></div>
    </div>
  );
}

export default App;
