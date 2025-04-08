import React from "react";

const Chat = (props) => {
  const messages = [
    { authorId: 1, author: "Lucas", menssage: "Oi, tudo bem?" },
    { authorId: 2, author: "João", menssage: "Oi, tudo bem?" },
    { authorId: 3, author: "Bruno", menssage: "Oi, tudo bem?" },
    { authorId: 4, author: "Thiago", menssage: "Oi, tudo bem?" },
    { authorId: 5, author: "Gustavo", menssage: "Oi, tudo bem?" },

  ];

  return (
    <div
      id="chat-container"
      style={{ width: "400px", height: "600px" }}
      className="bg-secondary rounded-3 p-3 d-flex flex-column m-4"
    >
      <h1>Chat</h1>
      <div id="chat-body" className="overflow-y-auto h-100 d-flex flex-column gap-3">
        {messages.map((menssage, index) => (
          <div className="align-self-start bg-white rounded-3 p-2 text-dark me-5" key={index}>
            <div id="message-author" className="fw-bold">{menssage.author}</div>
            <div id="message-text">{menssage.menssage}</div>
          </div>
        ))}
      </div>
      <div id="chat-footer" className="input-group">
        <input
          className="form-control"
          type="text"
          placeholder="digite sua mensagem..."
        />
        <span className="input-group-text" id="basic addon1">
          <i class="bi bi-send-fill"></i>
        </span>
      </div>
    </div>
  );
};

export default Chat;
