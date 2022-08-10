import React from 'react';

import './empl-item.css'

const EmployeItem = ({fullName, position, salary, birthdate }) => {

  const newBirthdate = birthdate?.slice(0, 10)

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
        <button className='item__btn'>Удалить</button>
        <button className="item__btn">Изменить</button>
      </div>
    </div>
    </>

  );
};

export default EmployeItem;
