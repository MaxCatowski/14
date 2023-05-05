import Todo from "./ToDo";
import styles from "./ToDoList.module.css";

function TodoList({ props, deleteTodo, toggleTodo }) {
  return (
    <div className={styles.todoListContainer}>
      {!props.length && <h2>Todo list is empty</h2>}
      {props.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;
