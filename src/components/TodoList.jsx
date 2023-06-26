import { useState } from 'react'
import './todoList.css'
export const TodoList = () => {
  const [todos, setTodos] = useState([
    { text: 'sdfsd', id: 1 },
    { text: 'sdfsd', id: 3 },
  ])

  const [todoText, setTodoText] = useState('')

  const handleAddTodo = () => {}

  const handleToggleTodo = (id) => {}

  const handleRemoveTodo = (id) => {}

  return (
    <div className="container">
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        className="todo-input"
      />
      <button onClick={handleAddTodo} className="add-button">
        Add Todo
      </button>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            {todo.text}
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleTodo(todo.id)}
            />
            <button onClick={() => handleRemoveTodo(todo.id)} className="remove-button">
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
