import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { delTodo, newTodo } from './TodoSlice';

const Todo = () => {
  const [input, setInput] = useState('');
  const { allTodo, msg, date } = useSelector((s) => s.todoStore);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Todo structure</h1>
      <input
        type="text"
        placeholder="write todo to add"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => dispatch(newTodo(input))}>Add</button>
      <hr />
      <ul>
        {allTodo.length > 0
          ? allTodo.map((item, i) => {
              return (
                <li key={i} className="repeat">
                  {item} - <span>{date}</span> - <button onClick={() => dispatch(delTodo(item))}>x</button>
                </li>
              );
            })
          : 'No tasks for today'}
      </ul>
    </div>
  );
};

export default Todo;
