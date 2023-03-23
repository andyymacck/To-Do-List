import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import ToDoList from './components/ToDoList'
import {React, useState} from 'react';
import ToDo from './components/ToDo';
import DateTime from './DateTime';




function App() {
  //State
  const [inputText, setInputText] = useState("");
  const [toDos, setToDos] = useState([]);
  

  return (
   
   <div className="App">
    <div>
    <DateTime/>
    </div>
    <div className="main">
      <Header />
      
      <Form 
       inputText={inputText}
       setInputText={setInputText}
       
       toDos={toDos}
       setToDos={setToDos}
        />
        
      <ToDoList toDos={toDos} />
      
    </div>
  </div>
  );
}

export default App;
