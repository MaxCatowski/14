import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import TodoList from "./components/ToDos/ToDoList";
import ToDoForm from "./components/ToDos/TodoForm";
import TodosActions from "./components/ToDos/TodosActions";

function App() {
  const [todos, setTodos] = useState([]);
  const addTodoHandler = function (text) {
    const newTodo = {
      text,
      isCompleted: false,
      id: uuidv4(),
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      )
    );
  };
  const resetTodosHandler = () => {
    setTodos([]);
  };

  const deleteComletedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };
  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length;

  return (
    <div className="App">
      <h1>Todo App</h1>
      <ToDoForm addTodo={addTodoHandler} />
      {todos.length > 0 && (
        <TodosActions
          completedTodosExist={!!completedTodosCount}
          resetTodos={resetTodosHandler}
          deleteComletedTodos={deleteComletedTodosHandler}
        />
      )}

      <TodoList
        props={todos}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
      />

      {completedTodosCount > 0 && (
        <h3>{`You have completed ${completedTodosCount} ${
          completedTodosCount > 1 ? "todos" : "todo"
        } `}</h3>
      )}
    </div>
  );
}

export default App;

//
