import React, { useState } from 'react';
import TodoList from './TodoList';

const Form = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  const detectInput = (e) => {
    setInput(e.target.value);
  };

  const addTodo = () => {
    setTodos([
      ...todos,
      {
        id: Math.random() * 100,
        text: input,
        completed: false,
      },
    ]);

    setInput('');
  };

  return (
    <>
      <div className="form-container">
        <input type="text" value={input} onChange={detectInput} />
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
};

export default Form;
