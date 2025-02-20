import React from 'react'

    function TodoItem({ todo, toggleCompleted, removeTodo }) {
      return (
        <li
          className={`flex justify-between mb-2 p-2 border border-gray-200 rounded-lg ${
            todo.completed ? 'bg-green-100' : 'bg-white'
          }`}
        >
          <span
            className={`text-sm ${
              todo.completed ? 'text-gray-600 line-through' : 'text-gray-700'
            }`}
          >
            {todo.text}
          </span>
          <div className="flex justify-end">
            <button
              onClick={() => toggleCompleted(todo.id)}
              className="mr-2 bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg"
            >
              Toggle
            </button>
            <button
              onClick={() => removeTodo(todo.id)}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg"
            >
              Remove
            </button>
          </div>
        </li>
      )
    }

    export default TodoItem
