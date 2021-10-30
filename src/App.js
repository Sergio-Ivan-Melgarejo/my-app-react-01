import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";

import Navigation from './components/Navigation';
import Header from './components/Header';
import TodoForm from "./components/TodoForm"

import { todos } from "./todos.json"

class App extends Component {
  
  constructor(){
    super();
      this.state = {
        todos: todos,
        add: false
      };
      this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  openMenu(){
    if (this.state.add) { 
      this.setState({add: false})
      document.querySelector(".mi-class__form-f").style.display = "none";
    } 
    else {
      this.setState({add: true})
      document.querySelector(".mi-class__form-f").style.display = "block";
    }
  }

  handleAddTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  removeTodo(index){
    this.setState({ 
      todos: this.state.todos.filter( (e , i) => {
        return i !== index
      })
    })
  }

  render() {
    //tareas
    const todos = this.state.todos.map(( todo, i ) => {
      return (
        <div  key={i} className="mi-class__container-cards col-md-4">
          <div className="card mt-4">
            <div className="card-header">
              <h2 className="text-dark">
                {todo.title}
              </h2>
                <span className={"mi-class__priority mi-class__" + todo.priority}>
                  { todo.priority }
                </span>
              <div className="card-body">
                <p className="text-dark">
                  {todo.description}
                </p>
              </div>
              <div className="card-footer">
                <p className="text-dark">
                  <b>{todo.responsible}</b>
                </p>
              </div>
            </div>
          <button className="btn btn-danger" onClick={this.removeTodo.bind(this, i)}>
            eliminar
          </button>
          </div>
        </div>
      )
    })

    return(
      <div className="App">
          <Navigation titulo="Reiniciar" ntareas={this.state.todos.length} />
          <img src={logo} className="mi-class__background App-logo" alt="logo" />
          <Header titulo="Aplicacion de Tareas" />

          <div className="container">
            <div className="row mt-4">
              { todos }
            </div>
          </div>

          <TodoForm onAddTodo={this.handleAddTodo} />
      </div>
    );
  }
}

export default App;
