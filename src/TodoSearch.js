import React from 'react'
import './TodoSearch.css'
function TodoSearch() {
  const [searchValue, setValueSearch] = React.useState('');
  // Valor inicial del userstate('vacio') o pasar parametros si es necesario 
    return (
      <input className='TodoSearch' placeholder="Cortar la Cebolla"
      value={searchValue}
      onChange={(event) => { 
        setValueSearch(event.target.value)
      }} />
    );
  }
  export { TodoSearch }
  