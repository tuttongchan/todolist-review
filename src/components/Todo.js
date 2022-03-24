import React from 'react';

const Todo = ({ todo, todos, setTodos }) => {
  const deleteTodo = () => {
    setTodos(todos.filter((item) => item.id !== todo.id));
  };

  const toggleTodo = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        // "return item" is OPTIONAL
        return item;
      })
    );
  };

  return (
    <div className="todo-container">
      <h3 className={todo.completed ? 'line' : null}>{todo.text}</h3>
      <button onClick={toggleTodo}>toggle</button>
      <button onClick={deleteTodo}>delete</button>
    </div>
  );
};

export default Todo;
