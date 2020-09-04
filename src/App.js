import React, { useState, useEffect } from "react";
import { Button, Input, FormControl, InputLabel } from "@material-ui/core";

import "./App.css";

import Message from "./components/Message";

function App() {
  const [input, setInput] = useState("");
  const [messages, sendMessages] = useState([
    { username: "ahmed", text: "hii" },
    { username: "hussian", text: "heeyyy" },
  ]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    setUsername(prompt("please enter your name "));
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    //all the logic to send messages
    sendMessages([...messages, { username: username, text: input }]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>Welcome to the fb messenger clone</h1>
      <h3>Welcome {username}</h3>

      {messages.map((message) => (
        <Message username={username} message={message} />
      ))}

      <FormControl>
        <InputLabel>Enter the message</InputLabel>
        <Input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <Button
          disabled={!input}
          variant="contained"
          color="primary"
          type="submit"
          onClick={sendMessage}
        >
          Send Message
        </Button>
      </FormControl>
    </div>
  );
}

export default App;
