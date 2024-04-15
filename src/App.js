import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TdoItem } from './TodoItem';
import { CreateTodo } from './CreateTodo';
import React from 'react';
import './App.css';
const defaultTodos = [
{
  text : 'Cortar Cebolla',completed : false
},  
{  
  text : 'Ver curso', completed : false
},
{
  text : 'Lavar', completed: true
},
{
  text : 'Jugar', completed: false
},
];
function App() {
  const [todos, setTodos] = React.useState(defaultTodos)
  // esto se hace en app ya que es el componente padre y asi pasamos propiedades de componentes padres a hijos
  const [searchValue, setValueSearch] = React.useState('');



  console.log('Buscas' + searchValue)

  return (
     <> 
     {/* <React.Fragment></React.Fragment> esto se puede para renderizar o dejarlas vacias como esta ahora mismo */}
      <TodoCounter completed={15} total={25} />
      <TodoSearch
        searchValue={searchValue}
        setValueSearch={setValueSearch}
      />

      <TodoList>
        {defaultTodos.map(todo => (
          <TdoItem key={todo.text} text={todo.text} estado={todo.completed} />
        ))}
      </TodoList>

      <CreateTodo />
    </>
);
}
export default App;
