import { useState } from "react";

function AddTodo(props) {
  const [text, setText] = useState("");

  const changeHandler = (event) => {
    setText(event.target.value);
  };

  const submitHandler = () => {
    if (text.trim() === "") return;

    props.onAddTodo(text);
    setText("");
  };

  const onKeyDownHandler = (event) => {
    if (event.key === "Enter") {
      submitHandler();
    }
  };

  return (
    <div className="flex gap-2">
      <input
        type="text"
        placeholder="Add a new task..."
        value={text}
        onChange={changeHandler}
        onKeyDown={onKeyDownHandler}
        className="bg-blue-500 border-gray-300 rounded px-3 py-2 outline-none focus:ring-2 focus: ring-blue-400"
      />
      <button
        onClick={submitHandler}
        className="bg-blue-500 text-white px-4 py-2 rounded hover: bg-blue-600 transition"
        disabled={text.trim() === ""}
      >
        Add
      </button>
    </div>
  );
}

export default AddTodo;
