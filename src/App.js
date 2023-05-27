import './App.css';
import Header from "./mycomponents/Header";
import { Todos } from "./mycomponents/Todos";
import { Footer } from "./mycomponents/Footer";
import React, { useState, useEffect } from "react";
import { AddTodo } from './mycomponents/AddTodo';





function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }


  const onDelete = (todo) => {
    console.log("I am Saksham of todo", todo);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    console.log("deleted", todos)
    localStorage.setItem("todos", JSON.stringify(todos));

  }
  const addTodo = (title, desc) => {
    console.log("I am adding this to the todo list", title, desc)
    let sno;
    if (todos.length == 0) {
      sno = 0;
    }
    else {
      let sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,

    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }

  const [todos, setTodos] = useState([initTodo]);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));

  }, [todos])

  return (
    <>
      <Header title="Todo list" searchBar={false} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>

  );
}

export default App;
