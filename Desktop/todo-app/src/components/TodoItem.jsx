function TodoItem(props) {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  const toggleHandler = () => {
    props.onToggle(props.id);
  };

  return (
    <li className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded p-3">
      <input
        type="checkbox"
        checked={props.done}
        onChange={toggleHandler}
        className="w-5 h-5 cursor pointer"
      />
      <span
        className={`flex-1 ${
          props.done ? "line-through text-gray-400" : "text-gray-800"
        }`}
      >
        {props.text}
      </span>
      <button
        onClick={deleteHandler}
        className="bg-red-400 text-white px-3 py-1 rounded hover:bg-red-500 transition"
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
