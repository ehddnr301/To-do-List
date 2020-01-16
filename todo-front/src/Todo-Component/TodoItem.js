import React, { Component } from "react";

export default class TodoItem extends Component {
  render() {
    const { text, checked, id } = this.props;
    return <div className="item">{text}</div>;
  }
}
