import "./App.css";
import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [filterStatus, setFilterStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [count, setCounter] = useState(0);
  const [isDark, setIsDark] = useState("dark");

  useEffect(() => {
    filterHandler();
    itemsLeft();
  }, [todos, filterStatus]);

  const filterHandler = () => {
    switch (filterStatus) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "active":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const itemsLeft = () => {
    const remaining = todos.filter((todo) => todo.completed === false);
    setCounter(remaining.length);
  };

  const lightTheme = () => {
    setIsDark("light");
    console.log("light theme enabled");
    document.body.classList.add("light");
  };

  const darkTheme = () => {
    setIsDark("dark");
    console.log("dark theme enabled");
    document.body.classList.remove("light");
  };

  return (
    <div className="App">
      <Header
        darkTheme={darkTheme}
        lightTheme={lightTheme}
        isDark={isDark}
        setIsDark={setIsDark}
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
      />
      <TodoList
        isDark={isDark}
        setIsDark={setIsDark}
        filteredTodos={filteredTodos}
        todos={todos}
        setTodos={setTodos}
      />
      <Footer
        isDark={isDark}
        setIsDark={setIsDark}
        count={count}
        setCounter={setCounter}
        setFilteredTodos={setFilteredTodos}
        filteredTodos={filteredTodos}
        filterHandler={filterHandler}
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  );
}

export default App;
