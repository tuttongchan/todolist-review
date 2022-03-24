import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, setTodos }) => {
  return (
    <div className="todolist-container">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
};

export default TodoList;
