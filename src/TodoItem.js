import './TodoItem.css'
function TdoItem(props) {
    return (
      <li className='TodoItem'>   
        {/* //prop.estado && blblbalbalab ase que si es true cambia a la clase blblbalbalab */}
        <span className={`Icon Icon-check ${props.estado && "Icon-check--active"}`}>V</span>
        <p className={`TodoItem-p ${props.estado && "TodoItem-p--complete"}`}> {props.text} </p>
        <span className='Icon Icon-delete'>X</span>
      </li>
    );
  }

export { TdoItem }