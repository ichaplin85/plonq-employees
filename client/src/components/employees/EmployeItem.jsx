import React, {useState} from 'react';
import AddForm from '../addForm/AddForm';

import './empl-item.css'

const EmployeItem = ({fullName, position, salary, birthdate, id, deleteUser }) => {

  const [change, setChange] = useState(false)

  const newBirthdate = birthdate?.slice(0, 10)

  const changeHandler = () => {
    setChange(!change)
  }

  const myForm = <input></input>


  return (
    <>
    <div className='item'>
      <div className="item__wrapper">
        <p>Полное имя: {fullName}</p>
        <p>Позиция: {position}</p>
        <p>Жалование: {salary}</p>
        <p>Дата рождения: {newBirthdate}</p>
      </div>
      <div className="item__btns">
        <button className='item__btn' onClick={() => deleteUser(id)}>Удалить</button>
        <button className="item__btn" onClick={() => changeHandler()}> {change ? 'Изменить' : 'Отправить'}</button>
        {change && <AddForm/>}
      </div>
    </div>
    </>

  );
};

export default EmployeItem;
