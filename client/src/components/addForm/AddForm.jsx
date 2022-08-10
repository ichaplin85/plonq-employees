import React, {useState} from 'react';
import SelectDepartment from './SelectDepartment';
import axios from 'axios';

import './addform.css'

const AddForm = () => {
  const [fullName, setFullname] = useState('');
  const [date, setDate] = useState('');
  const [position, setPosition] = useState('');
  const [salary, setSalary] = useState('');
  const [department, setDepartment] = useState('')

  const getDepartament = (dep) => {
    setDepartment(dep)
  }

  // отправка на сервер cотрдуника
  const formHandler = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:3002/users/add', {
        fullName,
        birthdate: date,
        position,
        salary,
        department
      })
      console.log(response);
    } catch (error) {
      alert(error.response.data.message)
    }

  }


  return (
    <div className='form adding'>
      <form className='adding__form' onSubmit={formHandler}>
        <input className='adding__input' type="text" placeholder='Enter fullname' value={fullName} onChange={(e) => setFullname(e.target.value)}/>
        <input className='adding__input' type="date" placeholder='Enter birthdate'value={date} onChange={(e) => setDate(e.target.value)}/>
        <input className='adding__input' type="text" placeholder='Enter position' value={position} onChange={(e) => setPosition(e.target.value)}/>
        <input className='adding__input' type="number" placeholder='Enter salary' value={salary} onChange={(e) => setSalary(e.target.value)} />
        <SelectDepartment getDepartament={getDepartament} department={department}/>
        <button className='btn'>Add employee</button>
      </form>
    </div>
  );
};

export default AddForm;
