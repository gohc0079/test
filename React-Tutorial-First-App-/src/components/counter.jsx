import React, { Component } from "react";

class Counter extends Component {
  /* state = {
    count: this.props.counter.value
  }; */

  //  constructor() {
  //   super();
  // this.handleIncrement = this.handleIncrement.bind(this);
  //}

  /*handleIncrement = product => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };*/
  componentDidUpdate(prevProps, prevState) {
    console.log("preProps", prevProps);
    console.log("preState", prevState);
  }

  componentWillUnmount() {
    console.log("Component Will unmount");
  }
  render() {
    console.log("Counter Rendered");
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
