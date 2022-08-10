import React, {useEffect,useState} from 'react';
import axios from 'axios';




const SelectDepartment = ({department, getDepartament}) => {
  const [departaments, setDeparmtents] = useState([])

  useEffect(() => {
    axios('http://localhost:3002/dep').then(response => setDeparmtents(response.data.departaments))
  }, [])

  // получение и отрисовка всех департаментов
  const deps = departaments?.map(item => <option key={item._id} value={item.title}>{item.title}</option> )

  return (
    <>
      <label htmlFor='department'>Choose your department</label>
      <select id='department' value={department} onChange={(e) => getDepartament(e.target.value)}>
        {deps}
      </select>
    </>

  );
};

export default SelectDepartment;
