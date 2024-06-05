import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.inputRef.current.value);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref={this.inputRef} />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default MyComponent;