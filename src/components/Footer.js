const Footer = ({
  filterStatus,
  setFilterStatus,
  todos,
  setTodos,
  count,
  isDark,
}) => {
  const allHandler = () => {
    setFilterStatus("all");
  };

  const activeHandler = () => {
    setFilterStatus("active");
  };

  const completedHandler = () => {
    setFilterStatus("completed");
  };

  const clearCompletedTodos = () => {
    setTodos(todos.filter((todo) => !todo.completed));
    setFilterStatus("all");
  };

  return (
    <div className="app">
      <div className={`${isDark === "dark" ? "footer" : "footer-light"}`}>
        <div
          className={`wrapper ${
            isDark === "dark" ? "wrapper" : "wrapper-light"
          }`}
        >
          <a className="items">{count} items left</a>
          <a
            onClick={allHandler}
            className={`all not-mobile ${
              filterStatus === "all" ? "all onactive" : "all"
            }`}
            value="all"
          >
            All
          </a>
          <a
            onClick={activeHandler}
            className={`active not-mobile ${
              filterStatus === "active" ? "active onactive" : "active"
            }`}
            value="active"
          >
            Active
          </a>
          <a
            onClick={completedHandler}
            className={`completedFilter not-mobile ${
              filterStatus === "completed"
                ? "completedFilter onactive"
                : "completedFilter"
            }`}
            value="completed"
          >
            Completed
          </a>
          <a onClick={clearCompletedTodos} className="clear">
            Clear Completed
          </a>
        </div>
      </div>
      <div
        className={`${
          isDark === "dark" ? "mobile-panel" : "mobile-panel-light"
        }`}
      >
        <a
          onClick={allHandler}
          className={`all ${filterStatus === "all" ? "all onactive" : "all"}`}
          value="all"
        >
          All
        </a>
        <a
          onClick={activeHandler}
          className={`active ${
            filterStatus === "active" ? "active onactive" : "active"
          }`}
          value="active"
        >
          Active
        </a>
        <a
          onClick={completedHandler}
          className={`completedFilter ${
            filterStatus === "completed"
              ? "completedFilter onactive"
              : "completedFilter"
          }`}
          value="completed"
        >
          Completed
        </a>
      </div>
    </div>
  );
};

export default Footer;
