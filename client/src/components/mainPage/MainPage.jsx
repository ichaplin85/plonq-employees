import React, {useEffect, useState} from 'react';
import axios from 'axios';

import Employees from '../employees/Employees';
import AddForm from '../addForm/AddForm';


const MainPage = () => {
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
    // console.log('scrollHeight', e.target.documentElement.scrollHeight);
    // console.log('scrollTop', e.target.documentElement.scrollTop);
    // console.log('innerHeight', window.innerHeight);

  }


  return (
    <div className='main'>
      <Employees users={users}/>
      <AddForm/>
    </div>
  );
};

export default MainPage;
