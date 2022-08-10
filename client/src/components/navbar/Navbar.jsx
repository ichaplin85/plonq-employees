import React, {useState} from 'react';

import './navbar.css'

const Navbar = ({addUser, addHandler}) => {

  const [search, setSearch] = useState('')


  const inputHandler = (e) => {
    setSearch(e.target.value)
  }

  const findHandler = (e) => {
    e.preventDefault()
  }



  return (
    <div className='navbar'>
      <h1 className="navbar__logo">
        Employees
      </h1>
      <div className="navbar__item" >
        <form className="navbar__form" onSubmit={findHandler}>
          <input type="text" id='search' placeholder='Искать сотрудника' value={search} onChange={inputHandler}/>
          <button className="navbar__btn btn">Искать</button>
        </form>
      </div>
      <div className="navbar__item">
        <button onClick={addHandler}>{addUser ? 'Скрыть форму' : 'Добавить сотрудника'}</button>
      </div>
    </div>
  );
};

export default Navbar;
