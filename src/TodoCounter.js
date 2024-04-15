import './TodoCounter.css';
function TodoCounter({total,completed}) {
    return (
      <h1 className='titulo'>
        Has Completado <span>{completed}</span> de <span>{total}</span> TODOS
      </h1>
    );
  }
  export { TodoCounter }
  