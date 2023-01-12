import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddList({ addTask }) {
  // task is name and setTask is function
  // useState has to be blank because input is blank to begin with
  const [task, setTask] = useState("");
  const navigate = useNavigate();

  function handleForm(e) {
    e.preventDefault(); // for not get refresh
    navigate("/list"); //to next page with data
    addTask({
      name: task,
      checked: false,
      id: Date.now()
    });
    setTask("");
  }

  return (
    <div>
      <h1>Add your tasks</h1>
      <form onSubmit={handleForm}>
        <input
          type="text"
          id="task"
          placeholder="Enter Your Task"
          value={task}
          onInput={(e) => setTask(e.target.value)}
          maxLength={60}
          autoFocus
          required
        />
        <button type="submit">
          <i className="gg-add-r"></i>
        </button>
      </form>
    </div>
  );
}

export default AddList;
