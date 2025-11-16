import React from "react";
import { Link } from "react-router-dom";

const TaskTable = ({ tasks, onDelete, sortKey, onSortToggle }) => {
  return (
    <table className="task-table">
      <thead>
        <tr>
          <th>
            Title
            {sortKey === "title" && " ↑"}
          </th>
          <th>
            Description
            {sortKey === "description" && " ↑"}
          </th>
          <th style={{ width: "150px" }}>
            <button onClick={onSortToggle}>
              Toggle Sort
            </button>
          </th>
        </tr>
      </thead>

      <tbody>
        {tasks.length === 0 && (
          <tr>
            <td colSpan="3">No tasks available</td>
          </tr>
        )}

        {tasks.map((task) => (
          <tr key={task.id}>
            <td>{task.title}</td>
            <td>{task.description}</td>
            <td>
  <div className="action-buttons">
    <Link to={`/edit/${task.id}`}>
      <button className="edit-btn">Edit</button>
    </Link>

    <button className="delete-btn" onClick={() => onDelete(task.id)}>
      Delete
    </button>
  </div>
</td>

          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TaskTable;
