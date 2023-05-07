import React from 'react';


const Form = ({inputText, setInputText, toDos, setToDos }) => {
  //Functions
const inputHandler = (e) =>{
    console.log(e.target.value);
    setInputText(e.target.value);
}

const submitHandler = (e) => {
   //prevents the default action of button
    e.preventDefault();
    
    setToDos([
      ...toDos,  
      {text: inputText, id: Math.random() * 1000}
    ]);
    setInputText("");
}


return(
<form className='form'>
  <input onChange={inputHandler} 
  value={inputText}/>
    <div id = "button">
    <button onClick={submitHandler}>
    Add!
    </button>  
    </div>
</form>
);
}

export default Form;