import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Presentation from "./Components/Presentation/Presentation";
import Project from "./Components/Project/Project";
import Powerful from "./Components/Powerful/Powerful";
import Cards from "./Components/Cards/Cards"
import Footer from "./Components/Footer/Footer";
import Form from "./Components/Form/Form"  

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Presentation />
      <Project />
      <Powerful/>
      <Cards/>
      <Footer/>
      <Form/>
    </>
  );
}

export default App;
