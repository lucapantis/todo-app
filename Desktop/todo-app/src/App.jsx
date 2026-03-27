import { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import FilterButtons from "./components/FilterButtons";

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  const changeFilterHandler = (type) => {
    setFilter(type);
  };

  const addTodoHandler = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      done: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  const deleteTodoHandler = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleTodoHandler = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    );
  };

  const clearCompletedHandler = () => {
    setTodos((prev) => prev.filter((todo) => !todo.done));
  };

  const activeTodosCount = todos.filter((todo) => !todo.done).length;

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.done;
    if (filter === "done") return todo.done;
  });

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Track your tasks.
        </h1>

        <AddTodo onAddTodo={addTodoHandler} />

        <FilterButtons filter={filter} onChangeFilter={changeFilterHandler} />

        <TodoList
          todos={filteredTodos}
          onDeleteTodo={deleteTodoHandler}
          onToggleTodo={toggleTodoHandler}
        />
        <p>
          {activeTodosCount} {activeTodosCount === 1 ? "item" : "items"} left
        </p>

        <button
          onClick={clearCompletedHandler}
          className="mt-4 w-full bg-gray-200 rounded hover:bg-gray-300"
        >
          Clear Completed
        </button>
      </div>
    </div>
  );
}

export default App;
