import React, { Component } from "react";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import "./App.css";
import Item from "./components/Item/Item";

class App extends Component {
  constructor() {
    super();

    this.state = {
      list: [],
      value: "",
    };
  }

  onRemoveItem = (item) => {
    const { list } = this.state;

    const newList = list.filter((el) => el !== item);

    this.setState((estadoAtual) => ({ ...estadoAtual, list: newList }));
  };

  onChangeInputValue = (event) => {
    const { value } = event.target;

    this.setState((estadoAtual) => ({ ...estadoAtual, value }));
  };

  onSubmitForm = (event) => {
    event.preventDefault();

    const { list, value } = this.state;

    const existsItemOnList = list.some((el) => el === value);

    if (existsItemOnList) {
      alert("Item already exists");
      this.setState((estadoAtual) => ({ ...estadoAtual, value: "" }));
      return;
    }

    this.setState((estadoAtual) => ({
      value: "",
      list: [...estadoAtual.list, estadoAtual.value],
    }));
  };

  render() {
    const { list, value } = this.state;

    return (
      <main>
        <section id="main-section">
          <h1 id="list-title">You have {list.length} TODO's</h1>
          <div>
            {list.map((item, index) => (
              <Item key={index} item={item} onRemoveItem={this.onRemoveItem} />
            ))}
          </div>
          <form onSubmit={this.onSubmitForm} className="form">
            <Input
              placeholder="Enter item"
              value={value}
              onChange={this.onChangeInputValue}
            />
            <Button type="submit">Submit</Button>
          </form>
        </section>
      </main>
    );
  }
}

export default App;
