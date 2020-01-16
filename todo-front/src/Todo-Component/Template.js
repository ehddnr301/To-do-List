import React, { Component } from "react";

export default class Template extends Component {
  render() {
    const { PlusComponent,children } = this.props;
    return (
      <div>
        <h1>헤더</h1>
        <section>{PlusComponent}</section>
        <section>{children}</section>
      </div>
    );
  }
}
