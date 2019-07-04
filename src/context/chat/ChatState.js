import React, { useReducer } from "react";
import ChatContext from "./chatContext";
import chatReducer from "./chatReducer";
import { RECEIVE_MESSAGE } from "../types";
import io from "socket.io-client";

let socket;

const ChatState = props => {
  const initialState = {
    general: [],
    topic2: []
  };

  const [allChats, dispatch] = useReducer(chatReducer, initialState);

  const sendChatAction = async value => {
    await socket.emit("chat message", value);
  };

  if (!socket) {
    socket = io(":3001");
    socket.on("chat message", function(msg) {
      dispatch({ type: RECEIVE_MESSAGE, payload: msg });
    });
  }

  const user = "aaron" + Math.random(100).toFixed(2);

  return (
    <ChatContext.Provider
      value={{
        allChats,
        sendChatAction,
        user
      }}
    >
      {props.children}
    </ChatContext.Provider>
  );
};

export default ChatState;
