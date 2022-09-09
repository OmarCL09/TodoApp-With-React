import React from "react";
import { TodoProvider } from "./components/TodoContext/TodoContext";
import AppUI from "./components/AppUI/AppUI";

function App() {

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
  