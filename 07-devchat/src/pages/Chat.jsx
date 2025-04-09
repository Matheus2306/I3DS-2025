import React, { useEffect, useRef, useState } from "react";

const Chat = ({ socket, userName }) => {
  const [messageList, setMessageList] = useState([]);
  const messageRef = useRef();
  const bottomRef = useRef();

  useEffect(() => {
    if (!socket) return;

    socket.onmessage = (event) => {
      const raw = event.data;

      // Se a mensagem foi enviada pelo próprio usuário, ela já está exibida localmente
      if (raw.includes(userName)) return;

      // Cria um objeto compatível com o formato usado na UI
      const messageData = {
        author: "Outro usuário",
        text: raw,
      };

      setMessageList((current) => [...current, messageData]);
    };

    return () => {
      socket.onmessage = null;
    };
  }, [socket, userName]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messageList]);

  const handleSubmit = () => {
    const text = messageRef.current.value.trim();
    if (!text) return;

    const fullMessage = `${userName}: ${text}`;
    socket.send(fullMessage);

    const messageData = {
      author: userName,
      text,
    };

    setMessageList((current) => [...current, messageData]);
    messageRef.current.value = "";
    messageRef.current.focus();
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div
        className="chat-box bg-opacity-100 rounded-4 p-3 d-flex flex-column shadow-lg bg-secundary"
        style={{ width: "400px", height: "600px" }}
      >
        <div className="flex-grow-1 overflow-auto mb-2 d-flex flex-column gap-2 pe-1">
          {messageList.map((message, index) => (
            <div
              key={index}
              className={`${
                message.author === userName
                  ? "align-self-end bg-dark text-light"
                  : "align-self-start bg-light text-dark"
              } rounded-3 text-break px-3 py-2 shadow-sm`}
            >
              <div className="fw-bold small">{message.author}</div>
              <div>{message.text}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        <div className="input-group">
          <input
            ref={messageRef}
            type="text"
            className="form-control border-0"
            placeholder="Digite sua mensagem..."
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          />
          <button
            className="btn btn-outline-light"
            type="button"
            onClick={handleSubmit}
          >
            <i className="bi bi-send-fill"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
