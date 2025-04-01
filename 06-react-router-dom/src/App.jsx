import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Link, Route, Routes } from "react-router";
import Header from "./components/Header/Header";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Home from "./pages/Home";
import Naoencontrado from "./pages/Naoencontrado";

function App() {


  return (
    <>
      <BrowserRouter>
       <Header/>
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato/>} />
        <Route path="*" element={<Naoencontrado/>} />
       </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
