import { Link } from "react-router-dom";
//custom
import ListItem from "./ListItem";

function ShowList({ tasks, deleteTask, toggleTask, enterEditMode }) {
  return (
    <div>
      <h1>
        your Task
        {/* back icon */}
        <Link to="/">
          <div className="back">
            <i className="gg-arrow-left-r"></i>
          </div>
        </Link>
      </h1>
      <ul>
        {/* sort for last one show first */}
        {tasks
          .sort((a, b) => b.id - a.id)
          .map((task) => (
            <ListItem
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              toggleTask={toggleTask}
              enterEditMode={enterEditMode}
            />
          ))}
      </ul>
    </div>
  );
}

export default ShowList;
