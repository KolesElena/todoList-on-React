import React from "react";
import TodoListItem from "../todo-list-item";
import "./todo-list.css";

const TodoList =({todoData, onDeleted, onToggleImportant, onToggleDone}) => {
  const elements=todoData.map((item) => {
const {id, ...restItemProps}=item;

    return (
    <li key={item.id} className="list-group-item"><TodoListItem {...restItemProps} onDeleted={()=>onDeleted(id)}
    onToggleImportant={()=>onToggleImportant(id)} onToggleDone={()=>onToggleDone(id)}/></li>
  );
});
  return (
    <ul className="list-group todo-list">
    {elements}
    </ul>
  );
};

export default TodoList;
