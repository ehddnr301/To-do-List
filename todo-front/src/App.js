import React, { Component } from "react";
import Template from "./Todo-Component/Template";
import Plus from "./Todo-Component/Plus";
import "./App.css";
import TodoList from "./Todo-Component/TodoList";
export default class App extends Component {
  id = 0;
  state = {
    input: "",
    todos: []
  };
  handleChange = e => {
    this.setState({
      input: e.target.value
    });
  };
  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input: "",
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    });
  };
  handleKeyPress = e => {
    if (e.key === "Enter") {
      this.handleCreate();
    }
  };
  render() {
    const { input, todos } = this.state;
    const { handleChange, handleCreate, handleKeyPress } = this;
    return (
      <div>
        <Template
          PlusComponent={
            <Plus
              value={input}
              onChange={handleChange}
              onCreate={handleCreate}
              onKeyPress={handleKeyPress}
            />
          }
        >
          <TodoList todos={todos} />
        </Template>
      </div>
    );
  }
}
