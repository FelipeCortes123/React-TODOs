import './Button.css'
function CreateTodo() {
    return (
      <button className='botoncrear'
       onClick={
        (event) =>{

         console.log('Apretaste el boton');
         console.log(event);
      }}
      >+</button>
    );
  }

export { CreateTodo }