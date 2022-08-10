import React, {useState} from "react";
import MainPage from "./mainPage/MainPage";
import Navbar from "./navbar/Navbar";

import './App.css'
import AddForm from "./addForm/AddForm";

function App() {

  const [addUser, setAddUser] = useState(false)
  const addHandler = () => {
    setAddUser(!addUser)
  }

  return (
    <div className="App">
      <Navbar addHandler={addHandler} addUser={addUser}/>
      <MainPage addUser={addUser}/>

    </div>
  );
}

export default App;
