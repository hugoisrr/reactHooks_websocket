import React from "react";
import "./App.css";

import Dashboard from "./Dashboard";
// import Store from "./Store";
import ChatState from "./context/chat/ChatState";

function App() {
  return (
    <div className="App">
      <ChatState>
        <Dashboard />
      </ChatState>
    </div>
  );
}

export default App;
