import { useState, useEffect } from 'react'
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([]);

  /*const fetchTodos = async () => {
    const res = await fetch ("http://localhost:3000/todos");
    const data = await res.json();
    setTodos(data.todos);
  } */

  useEffect(() => {
    fetch("http://localhost:3000/todos")
    .then(async (res) => {
      const data = await res.json();
      setTodos(data.todos);
    })
  }, [])

  return (
    <div>
     <CreateTodo />
     <Todos todos = {todos}></Todos>
    </div>
  )
}

export default App
