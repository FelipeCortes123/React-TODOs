import React from 'react'
import './TodoSearch.css'
function TodoSearch({ searchValue, setValueSearch}) {
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
  