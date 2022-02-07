import './App.css';
import './todo.css';
import { useEffect, useState } from 'react';
import Header from './components/TodoList/Header';
import TodoList from './components/TodoList/TodoList';
import Footer from './components/TodoList/Footer'

const isNotCheckAll = todos => todos.find((todo) => !todo.completed)

const filterTodoList = (todos, status) => {
  if (status === 'Active') {
    return todos.filter((todo) => !todo.completed);
  } else if (status === 'Completed') {
    return todos.filter((todo) => todo.completed);

  } else {
    return todos
  }

}

function App() {

  const [todoList, setTodoList] = useState([])
  const [todoEditingId, settodoEditingId] = useState('')
  const [isCheckAll, setIsCheckAll] = useState(false)
  const [status, setStatus] = useState('ALL')

  useEffect(() => {
    const storageTodoList = JSON.parse(localStorage.getItem('todoList'))
    setTodoList(storageTodoList)
  }, [])

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList))
  }, [todoList]);

  useEffect(() => {
    setIsCheckAll(!isNotCheckAll(todoList))
  })


  const addTodo = (todo) => {
    const newTodoList = [...todoList, todo]
    return setTodoList(newTodoList)
  }

  const markComplete = (id) => {
    const updatedList = todoList.map(todo => 
      todo.id === id 
      ? ({ ...todo, completed: !todo.completed }) 
      : todo)
    setTodoList(updatedList)
    setIsCheckAll(isNotCheckAll(updatedList))
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
    if (index < 0) return;
    const newTodoList = [...todoList]
    newTodoList.splice(index, 1, todo)
    setTodoList(newTodoList)
    settodoEditingId('')
  }

  const handleIsCheckAll = () => {
    const newTodoList = [...todoList]
    setTodoList(newTodoList.map(todo => ({ ...todo, completed: !isCheckAll })))
  }

  const handleStatusChange = (status) => {
    setStatus(status)
  }

  const clearCompleted = (status) => {
    setTodoList(filterTodoList(todoList, 'Active'));
    console.log('status', status);
  }


  return (
    <div className="todoapp">
      <Header addTodo={addTodo} />
      <TodoList
        todoList={filterTodoList(todoList, status)}
        markComplete={markComplete}
        removeTodo={removeTodo}
        setTodoList={setTodoList}
        getTodoEditingId={getTodoEditingId}
        todoEditingId={todoEditingId}
        onEditTodo={onEditTodo}
        isCheckAll={isCheckAll}
        handleIsCheckAll={handleIsCheckAll}
      />
      <Footer
        handleStatusChange={handleStatusChange}
        status={status}
        clearCompleted={clearCompleted}
        numOfTodos={todoList.length}
        numOfTodosLeft={(filterTodoList(todoList, 'Active').length)}
      />
    </div>
  );
}

export default App;
