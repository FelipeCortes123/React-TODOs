import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TdoItem } from './TodoItem';
import { CreateTodo } from './CreateTodo';
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
  return (
     <> 
     {/* <React.Fragment></React.Fragment> esto se puede para renderizar o dejarlas vacias como esta ahora mismo */}
      <TodoCounter completed={15} total={25} />
      <TodoSearch />

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
