import React, { Component } from "react";
import AppHeader from "../app-header";
import TodoList from "../todo-list";
import ItemAddForm from "../item-add-form";
import "./app.css";

export default class App extends Component {
  maxId = 100;
  state = {
    todoData: [this.createTodoItem("Pavel Zuev")]
  };
  createTodoItem(label) {
    return {
      label,
      id: this.maxId++
    };
  }

  deleteItem = id => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex(el => el.id === id);
      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];

      return {
        todoData: newArray
      };
    });
  };
  addItem = text => {
    const newItem = this.createTodoItem(text);
    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem];
      return {
        todoData: newArr
      };
    });
    
  };
  
  render() {
    return (
      <div className="table">
        <AppHeader />
        <ItemAddForm 
        onItemAdded={this.addItem}/>
        <TodoList todos={this.state.todoData}  onDeleted={this.deleteItem} />
      </div>
    );
  }
}
