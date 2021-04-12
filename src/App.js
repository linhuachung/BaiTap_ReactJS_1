import logo from "./logo.svg";
import "./App.css";
import Nav from "./Components/Nav.jsx";
import Carousel from "./Components/Carousel.jsx";
import Container from "./Components/Container.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
  return (
    <div className="App">
      <Nav />
      <Carousel />
      <Container />
      <Footer />
    </div>
  );
}

export default App;
