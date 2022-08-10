import MainPage from "./mainPage/MainPage";
import Navbar from "./navbar/Navbar";

import './App.css'
import AddForm from "./addForm/AddForm";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainPage/>
      <AddForm/>
    </div>
  );
}

export default App;
