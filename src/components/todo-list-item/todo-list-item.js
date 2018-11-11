import React, {Component} from "react";
import "./todo-list-item.css";

export default class TodoListItem extends Component {
  render() {

    let ClassNames="todo-list-item";
    if (this.props.important) {
      ClassNames+=" important";
    }

      if (this.props.done) {
          ClassNames+=" done";
      }


    return (
      <span className={ClassNames}>
      <span className="todo-list-item-label" onClick={this.props.onToggleDone}>{this.props.label}</span>
      <button type="button" className="btn btn-outline-success btn-sm  float-right" onClick={this.props.onToggleImportant}>
      <i className="fa fa-exclamation" />
      </button>
      <button type="button" className="btn btn-outline-danger btn-sm float-right" onClick={this.props.onDeleted}>
      <i className="fa fa-trash-o" /></button>
      </span>
    );
  }
}
