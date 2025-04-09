import React, { useRef } from "react";
import { io } from "socket.io-client";

const Join = (props) => {
  //hooks
  const userNameRef = useRef(null);

  const handleSubmit = async () => {
    const userName = userNameRef.current.value;
    if (!userName.trim() || userName.length < 2) {
      alert("Digite um nome válido");
      return;
    }

    //Criando a conexão com o socket
    const servidorSocket = await io.connect("ws://192.168.0.122:5000");
    servidorSocket.emit("set_username", userName);
    //abrindo a pagina de chat
    props.setSocket(servidorSocket);
    props.visibility(true);
  };

  return (
    <div className="login-bg d-flex justify-content-center align-items-center min-vh-100">
      <div
        className="card p-4 shadow-lg"
        style={{
          width: "400px",
          height: "300px",
          borderRadius: "20px",
          backgroundColor: "#212529",
        }}
      >
        <h1 className="text-center mb-3 fw-bold text-light">devChat</h1>
        <h5 className="text-center mb-4 text-light">Bem-vindo ao devChat!</h5>
        <form action="">
          <div className="mb-3 d-flex">
            <input
              ref={userNameRef}
              className=" form-control bg-dark-subtle text-white border-spacing-0"
              type="text"
              id="message-input"
              placeholder="Nome"
              style={{ height: "38px" }}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            />
          </div>
          <button
            className="btn btn-primary w-100"
            id="send-button"
            onClick={() => {
              handleSubmit();
            }}
            style={{ width: "200px" }}
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Join;
