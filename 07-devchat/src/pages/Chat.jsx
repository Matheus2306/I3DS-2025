import React, { useEffect, useRef, useState } from "react";

const Chat = (props) => {
  const [messageList, setMessageList] = useState([]);
  const messageRef = useRef();
  const bottomRef = useRef();

  useEffect(() => {
    props.socket.on("receive_message", (data) => {
      setMessageList((current) => [...current, data]);
    });
    return () => props.socket.off("receive_message");
  }, [props.socket]);

  useEffect(() => {
    bottomRef.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [messageList]);

  const handleSubmit = () => {
    const message = messageRef.current.value;
    if (!message.trim()) return;

    props.socket.emit("message", message);
    messageRef.current.value = "";
    messageRef.current.focus();
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div
        id="chat-container"
        className="chat-box bg-opacity-100 rounded-4 p-3 d-flex flex-column shadow-lg bg-secundary"
        style={{ width: "400px", height: "600px",}}
      >
        <div
          id="chat-body"
          className="flex-grow-1 overflow-auto mb-2 d-flex flex-column gap-2 pe-1"
        >
          {messageList.map((message, index) => (
            <div
              key={index}
              className={`${
                message.authorId === props.socket.id
                  ? "align-self-end bg-dark text-light"
                  : "align-self-start bg-light text-dark"
              } rounded-3 px-3 py-2 shadow-sm`}
            >
              <div className="fw-bold small">{message.author}</div>
              <div>{message.text}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        <div id="chat-footer" className="input-group">
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