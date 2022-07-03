import { BsFillSunFill } from "react-icons/bs";
import { BsFillMoonFill } from "react-icons/bs";

const Header = ({
  inputText,
  setInputText,
  todos,
  setTodos,
  isDark,
  setIsDark,
  lightTheme,
  darkTheme,
}) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Math.floor(Math.random() * 10000),
      },
    ]);
    setInputText("");
  };

  return (
    <div className="app">
      <div
        className={`background-img ${
          isDark === "dark" ? "background-img" : "background-img-light"
        }`}
      >
        <div className="header">
          <h2 className="title">TODO</h2>
          <BsFillMoonFill
            onClick={darkTheme}
            className={`${
              isDark === "dark" ? "sun-icon no-moon body .light" : "moon"
            }`}
          />
          <BsFillSunFill
            onClick={lightTheme}
            className={`${isDark === "light" ? "moon no-sun" : "sun-icon"}`}
          />
        </div>
      </div>

      <div
        className={`${isDark === "dark" ? "enter-task" : "enter-task-light"}`}
      >
        <form className="input-task" onSubmit={submitTodoHandler}>
          <div className="circle-unchecked"></div>
          <input
            onChange={inputTextHandler}
            value={inputText}
            type="text"
            className={`${isDark === "dark" ? "new-todo" : "new-todo-light"}`}
            placeholder="Create a new todo..."
            required
          />
        </form>
      </div>
    </div>
  );
};

export default Header;
