import React, { useRef } from "react";

const Join = ({ setSocket, setUserName, visibility }) => {
  const userNameRef = useRef(null);

  const handleSubmit = () => {
    const userName = userNameRef.current.value.trim();

    if (userName.length < 2) {
      alert("Digite um nome válido");
      return;
    }

    const socket = new WebSocket("ws://192.168.0.122:5000/ws/");

    socket.onopen = () => {
      // Para WebSocket puro, enviamos a primeira mensagem com o nome direto
      const payload = `${userName} entrou no chat`;
      socket.send(payload);

      setSocket(socket);
      setUserName(userName);
      visibility(true);
    };

    socket.onerror = (error) => {
      alert("Não foi possível conectar ao servidor.");
      console.error("WebSocket error:", error);
    };
  };

  return (
    <div className="login-bg d-flex justify-content-center align-items-center min-vh-100">
      <div
        className="card p-4 shadow-lg"
        style={{ width: "400px", height: "300px", borderRadius: "20px", backgroundColor: "#212529" }}
      >
        <h1 className="text-center mb-3 fw-bold text-light">devChat</h1>
        <h5 className="text-center mb-4 text-light">Bem-vindo ao devChat!</h5>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-3 d-flex">
            <input
              ref={userNameRef}
              className="form-control bg-dark-subtle text-dark"
              type="text"
              placeholder="Nome"
              style={{ height: "38px" }}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            />
          </div>
          <button
            className="btn btn-primary w-100"
            onClick={handleSubmit}
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Join;
