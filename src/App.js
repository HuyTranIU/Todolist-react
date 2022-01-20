import './App.css';
import './todo.css';
import { useEffect, useState } from 'react';
import Header from './components/TodoList/Header';
import TodoList from './components/TodoList/TodoList';
import Footer from './components/TodoList/Footer'

function App() {
  const inittodoList = [
    {
      id: 1,
      title: 'Todo 1',
      completed: true,
    },
    {
      id: 2,
      title: 'Todo 2',
      completed: false,
    }
  ]

  const [todoList, setTodoList] = useState([])
  const [todoEditingId, settodoEditingId] = useState('')
  useEffect(() => {
    const storageTodoList = JSON.parse(localStorage.getItem('todoList'))
    setTodoList(storageTodoList)
  }, [])

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList))
  }, [todoList]);

  const addTodo = (todo) => {
    const newTodoList = [...todoList, todo]
    return setTodoList(newTodoList)
  }

  const markComplete = (id) => {
    setTodoList(todoList.map(todo => todo.id === id ? ({ ...todo, completed: !todo.completed }) : todo))
  }

  function removeTodo(id) {
    const index = todoList.findIndex(indx => indx.id === id)
    if (index < 0) return;
    const newTodoList = [...todoList]
    newTodoList.splice(index, 1)
    return setTodoList(newTodoList)
  }

  const getTodoEditingId = (id) => {
    settodoEditingId(id)
  }

  const onEditTodo = (todo, index) => {
    if(index < 0) return;
    const newTodoList = [...todoList]
    newTodoList.splice(index, 1, todo)
    setTodoList(newTodoList)
    settodoEditingId('')
  }

  return (
    <div className="todoapp">
      <Header addTodo={addTodo} />
      <TodoList
        todoList={todoList}
        markComplete={markComplete}
        removeTodo={removeTodo}
        setTodoList={setTodoList}
        getTodoEditingId={getTodoEditingId}
        todoEditingId={todoEditingId}
        onEditTodo={onEditTodo}
      />
      <Footer />
    </div>
  );
}

export default App;
