import React, { Component } from "react";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";

class App extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <main>
        <Input placeholder="Enter item" />
        <Button>Submit</Button>
      </main>
    );
  }
}

export default App;
