import React from 'react';
import EmployeItem from './EmployeItem';

import './employees.css'

const Employees = ({users, deleteUser}) => {


  
  return (
    <div className='employees'>
      {users && users.map(user => 
        <EmployeItem 
          deleteUser={deleteUser}
          key={user._id}
          id={user._id}
          fullName={user.fullName}
          position={user.position}
          salary={user.salary}
          birthdate={user.birthdate}
        />)}
    </div>
  );
};

export default Employees;
