import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { useState } from "react";
import Chat from "./pages/Chat";
import Join from "./pages/Join";

function App() {
  const [chatvisible, setcontrol] = useState(false);
  const [socket, setSocket] = useState(null);

  return (
    <div
      id="App"
      className="m-0 p-0 vh-100 d-flex justify-content-center align-items-center text-light"
    >
      {chatvisible ? <Chat socket={socket} /> : <Join setSocket={setSocket} visibility={setcontrol} />}
    </div>
  );
}

export default App;
