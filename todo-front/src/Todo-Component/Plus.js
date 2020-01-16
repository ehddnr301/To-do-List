import React, { Component } from "react";

export default class Plus extends Component {
  render() {
    const { value, onChange, onCreate, onKeyPress } = this.props;
    return (
      <div>
        <h2>할 일을 추가하세요</h2>
        <input
          value={value}
          onChange={onChange}
          onKeyPress={onKeyPress}
        ></input>
        <button onClick={onCreate}>추가</button>
      </div>
    );
  }
}
