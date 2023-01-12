import { useState } from "react";
// lists section
function ListItem({ task, deleteTask, toggleTask, enterEditMode }) {
  const [isChecked, setIsChecked] = useState(task.checked);

  function handleCheckboxChange(e) {
    setIsChecked(!isChecked);
    toggleTask(task.id);
  }

  return (
    <div>
      <li>
        <input
          onChange={handleCheckboxChange}
          type="checkbox"
          checked={isChecked}
          name={task.name}
          id={task.id}
        />
        {task.name}
        <button className="edit" onClick={() => enterEditMode(task)}>
          <i className="gg-pen"></i>
        </button>
        <button className="delete" onClick={() => deleteTask(task.id)}>
          <i className="gg-close-r"></i>
        </button>
      </li>
    </div>
  );
}

export default ListItem;
