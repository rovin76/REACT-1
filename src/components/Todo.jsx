import React, { useState } from "react";
import { v4 as viku } from "uuid";
const Todo = () => {
  const [text, setText] = useState("");
  const [arr, setArr] = useState(["Rovin", "Ravi", "Vivek"]);
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleAddData = () => {
    if (text) {
      if (!arr.includes(text)) {
        setArr([...arr, text]);
      }
    }
    setText("");
  };
  const deleteFunction = (elem) => {
    setArr(arr.filter((e) => e !== elem));
  };
  return (
    <div>
      <h1>Todo List </h1>
      <input
        type="text"
        value={text}
        placeholder="Enter Somthings"
        onChange={handleChange}
      />
      <button onClick={handleAddData}>Add</button>
      <div>
        {arr.map((elem) => (
          <div key={viku()}>
            <p>
              {elem}{" "}
              <span>
                <button onClick={() => deleteFunction(elem)}>Delete</button>
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
