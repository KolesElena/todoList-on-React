import React from "react";
import "./app-header.css";

const AppHeader =({toDo, done}) => {
  return (
    <div>
    <h1>Todo List</h1>
        <h4 className="text-secondary text-right">{toDo} more to do, {done} done</h4>
    </div>
  );
};

export default AppHeader;
