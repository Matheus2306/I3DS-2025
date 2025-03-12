import "./App.css";
import Header from "./components/Header/Header";
import MatrixEfect from "./components/matrixEfect/MatrixEfect";
import SobreMim from "./components/SobreMim/SobreMim";


function App() {
  return (
    <>
      <div id="App">
        <MatrixEfect />
        <Header />
        <SobreMim/>
      </div>
    </>
  );
}

export default App;
