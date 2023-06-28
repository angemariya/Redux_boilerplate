import { useState } from 'react'
import './todoList.css'
import { useDispatch, useSelector } from 'react-redux'
import { add, remove, toggle } from '../redux/actionCreator'


export const TodoList = () => {
  const todos = useSelector((store) => store.todo.todos);

  const dispatch = useDispatch();

  const [todoText, setTodoText] = useState('')

  const handleAddTodo = (text) => {
    dispatch(add(text));
    setTodoText("")
  }

  const handleToggleTodo = (id) => {dispatch(toggle(id))}

  const handleRemoveTodo = (id) => {dispatch(remove(id))}

  return (
    <div className="container">
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        className="todo-input"
      />
      <button onClick={()=>handleAddTodo(todoText)} className="add-button">
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
