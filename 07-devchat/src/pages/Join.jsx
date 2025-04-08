import React, { useRef } from "react";

const Join = (props) => {
  //hooks
  const userref = useRef();
  const handlesubmit = () => {
    const username = userref.current.value;
    !username.trim() && alert("Digite um nome de usuário válido");
    
  };

  return (
    <div className="text-center">
      <div className="text-center">
        <h1>devChat</h1>

        <div
          id="join-box"
          className="mt-4 bg-secondary rounded-4 py-4 px-5  d-flex flex-column justify-content-center align-items-center gap-3"
        >
          <h3>Bem-vindo ao devChat!</h3>
          <div className="form-floating mb-3">
            <input
              ref={userref}
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Nome de usuário"
            />
            <label htmlFor="floatingInput" className="">
              Nome de usuário
            </label>
          </div>
          <button
            className="btn btn-light px-5 py-2"
            onClick={() => handlesubmit()}
          >
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Join;
