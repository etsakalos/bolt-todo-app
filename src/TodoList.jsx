import React from 'react'
    import TodoItem from './TodoItem'

    function TodoList({ todos, addTodo, toggleCompleted, removeTodo }) {
      const [newTodo, setNewTodo] = React.useState('')

      const handleSubmit = (e) => {
        e.preventDefault()
        addTodo(newTodo)
        setNewTodo('')
      }

      return (
        <div>
          <form onSubmit={handleSubmit} className="mb-4">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Add new todo"
              className="w-full p-2 pl-10 text-sm text-gray-700 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
            <button
              type="submit"
              className="ml-2 bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg"
            >
              Add
            </button>
          </form>
          <ul>
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                toggleCompleted={toggleCompleted}
                removeTodo={removeTodo}
              />
            ))}
          </ul>
        </div>
      )
    }

    export default TodoList
