import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../styles.css";

//custom
import AddList from "./AddList";
import ShowList from "./ShowList";
import EditTask from "./EditTask";
import useLocalStorage from "../hooks/useLocalStorage";
import Footer from "./Footer";

// main
function App() {
  const [tasks, setTasks] = useLocalStorage("react-todo.tasks", []);
  const [previousFocusEl, setPreviousFocusEl] = useState(null);
  const [editedTask, setEditedTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  //for add
  function addTask(task) {
    setTasks((prevState) => [...prevState, task]);
  }
  //for delete
  function deleteTask(id) {
    setTasks((prevState) => prevState.filter((t) => t.id !== id));
  }
  // checkbox
  function toggleTask(id) {
    setTasks((prevState) =>
      prevState.map((t) => (t.id === id ? { ...t, checked: !t.checked } : t))
    );
  }
  //for update
  function updateTask(task) {
    setTasks((prevState) =>
      prevState.map((t) => (t.id === task.id ? { ...t, name: task.name } : t))
    );
    closeEditMode();
  }

  function closeEditMode() {
    setIsEditing(false);
    previousFocusEl.focus();
  }

  function enterEditMode(task) {
    setEditedTask(task);
    setIsEditing(true);
    setPreviousFocusEl(document.activeElement);
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<AddList addTask={addTask} />} />
          {tasks && (
            <Route
              path="/list"
              element={
                <ShowList
                  tasks={tasks}
                  deleteTask={deleteTask}
                  toggleTask={toggleTask}
                  enterEditMode={enterEditMode}
                />
              }
            />
          )}
        </Routes>
      </Router>
      {isEditing && (
        <EditTask
          editedTask={editedTask}
          updateTask={updateTask}
          closeEditMode={closeEditMode}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
