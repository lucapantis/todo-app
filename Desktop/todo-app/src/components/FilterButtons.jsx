import React from "react";

function FilterButtons(props) {
  return (
    <div className="flex items-center justify-center gap-2 my-4 flex-wrap">
      <button
        onClick={() => props.onChangeFilter("all")}
        className={`px-3 py-1 rounded transition${
          props.filter === "all"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-800 hover:bg-gray-300"
        }`}
      >
        All
      </button>
      <button
        onClick={() => props.onChangeFilter("active")}
        className={`px-3 py-1 rounded transition ${
          props.filter === "active"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-800 hover:bg-gray-300"
        }`}
      >
        Active
      </button>

      <button
        onClick={() => props.onChangeFilter("done")}
        className={`px-3 py-1 rounded transition ${
          props.filter === "done"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-800 hover:bg-gray-300"
        }`}
      >
        Done
      </button>

      <p className="text-sm text-gray-500 ml-2">Current: {props.filter}</p>
    </div>
  );
}

export default FilterButtons;
