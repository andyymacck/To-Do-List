import React from 'react';
import ToDo from './ToDo';



const ToDoList = ({toDos, toggleComplete}) => {


    return(
    <div>
        <ul>
            {/* Function that will map out our to-do data*/}
           {toDos.map((toDo)=>
           <ToDo 
             text={toDo.text}
             key={toDo.id}
            
           />
           )}
        </ul>
    </div>

);
}

export default ToDoList;