import React, {useEffect, useState} from 'react';
import axios from 'axios';

import Employees from '../employees/Employees';
import AddForm from '../addForm/AddForm';


const MainPage = ({addUser}) => {
  const [users, setUsers] = useState([])
  const [fetching, setFetching] = useState(true)

 

  useEffect(() => {
    if(fetching) {
      axios('http://localhost:3002/users').then(response => setUsers(response.data.users))

    }
  }, [fetching])

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)

    return function() {
      document.addEventListener('scroll', scrollHandler)

    };
  }, [])

  const scrollHandler = (e) => {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
      console.log('scroll');
    }
  }

  const deleteUser = (id) => {
    axios.delete(`http://localhost:3002/delete/${id}'`)
    setUsers(users.filter(user => user._id !== id))
  }

  const changeUsersHandler = (user) => {
    const newUser = user.filter(oldUser => oldUser._id !== user.id).concat(user)
    setUsers(newUser)
  }

  let newUsers = [...users];
  newUsers.length =10



  return (
    <div className='main'>
      {addUser && <AddForm/>}
      <Employees users={newUsers} deleteUser={deleteUser} changeUsersHandler={changeUsersHandler}/>
    </div>
  );
};

export default MainPage;
