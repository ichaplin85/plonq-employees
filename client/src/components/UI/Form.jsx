import React, {useState} from 'react';
import axios from 'axios';

const Form = ({id, changeUsersHandler}) => {
  const [fullName, setFullname] = useState('');
  const [date, setDate] = useState('');
  const [position, setPosition] = useState('');
  const [salary, setSalary] = useState('');



  const formHandler = async (e) => {
    e.preventDefault()

    const user = {id, fullName, birthdate: date, position, salary}
    changeUsersHandler(user)
    try {
      const response = await axios.patch(`http://localhost:3002/change/${id}`, {
        fullName,
        birthdate: date,
        position,
        salary,
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
        <button className='btn'>Change</button>
      </form>
    </div>
  );
};

export default Form;
