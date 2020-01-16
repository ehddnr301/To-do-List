import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  render() {
    const { todos } = this.props;

    const todoList = todos.map(todo => <TodoItem {...todo} key={todo.id} />);
    return (
      <div>
        <h2>할 일 목록</h2>
        {todoList}
      </div>
    );
  }
}
