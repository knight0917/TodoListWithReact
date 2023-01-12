import React, { useState, useEffect } from "react";

function EditTask({ editedTask, updateTask, closeEditMode }) {
  const [updatedTaskName, setUpdatedTaskName] = useState(editedTask.name);

  useEffect(() => {
    function closeModalIfEscaped(e) {
      e.key === "Escape" && closeEditMode();
    }

    window.addEventListener("keydown", closeModalIfEscaped);

    return () => {
      window.removeEventListener("keydown", closeModalIfEscaped);
    };
  }, [closeEditMode]);

  function handleForm(e) {
    e.preventDefault();
    updateTask({ ...editedTask, name: updatedTaskName });
  }

  return (
    <div
      onClick={(e) => {
        e.target === e.currentTarget && closeEditMode();
      }}
    >
      <h2>Edit your List</h2>
      <form onSubmit={handleForm}>
        <input
          type="text"
          id="editTask"
          placeholder="Update Task"
          value={updatedTaskName}
          onInput={(e) => setUpdatedTaskName(e.target.value)}
          maxLength={60}
          autoFocus
          required
        />
        <button type="submit">
          <i className="gg-check"></i>
        </button>
      </form>
    </div>
  );
}

export default EditTask;
