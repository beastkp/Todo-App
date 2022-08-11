import React from "react";
import {db} from '../firebase'

import { collection,addDoc } from "firebase/firestore";

export default function AddTodo() {
  const [title, setTitle] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title !== "") {
      await addDoc(collection(db, "todos"), { //todos is the name of colletion 
        title,
        completed: false, // data passed as object 
      });
      setTitle("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="input_container">
        <input
          type="text"
          placeholder="Enter todo..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="btn_container">
        <button>Add</button>
      </div>
    </form>
  );
}