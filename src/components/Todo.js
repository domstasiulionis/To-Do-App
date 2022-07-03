import { TiTick } from "react-icons/ti";
import { RiCloseCircleLine } from "react-icons/ri";

const Todo = ({ text, todo, todos, setTodos, isDark, setIsDark }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className={`${isDark === "dark" ? "todo" : "todo-light"}`}>
      <button
        onClick={completeHandler}
        className={`${
          todo.completed
            ? "complete-btn"
            : `${
                isDark === "dark"
                  ? "circle-unchecked-task"
                  : "circle-unchecked-task-light"
              }`
        }`}
      >
        <TiTick className={`${todo.completed ? "tick" : "none"}`} />
      </button>
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <RiCloseCircleLine
        className={`${
          isDark === "dark" ? "cross trash-btn" : "cross trash-btn-light"
        }`}
        onClick={deleteHandler}
      />
    </div>
  );
};

export default Todo;
