import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filteredTodos, isDark, setIsDark }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            todos={todos}
            todo={todo}
            setTodos={setTodos}
            key={todo.id}
            text={todo.text}
            isDark={isDark}
            setIsDark={setIsDark}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
