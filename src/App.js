import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Presentation from "./Components/Presentation/Presentation";
import Project from "./Components/Project/Project";
import Powerful from "./Components/Powerful/Powerful";
import Cards from "./Components/Cards/Cards"

function App() {
  return (
    <div className="container">
      <Navbar />
      <Home />
      <Presentation />
      <Project />
      <Powerful/>
      <Cards/>
    </div>
  );
}

export default App;
