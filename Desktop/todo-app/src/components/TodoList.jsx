import TodoItem from "./TodoItem";

function TodoList(props) {
  if (props.todos.length === 0) {
    return <p className="text-center text-gray-500 my-4">No todos yet. </p>;
  }
  return (
    <ul className="mt-4 space-y-3">
      {props.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          done={todo.done}
          onToggle={props.onToggleTodo}
          onDelete={props.onDeleteTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
