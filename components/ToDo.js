import React from 'react';

const ToDo = ({text}) => {

    const deleteHandler = (e) => {
        //console.log(e.target);
    const item = e.target;
    if (item.className === 'to-do-item'){
        item.remove();
 }
}


 return (
<div>
    <li
     onClick={deleteHandler}
     className= "to-do-item">
      {text}  
    </li>
</div>
 );
}

export default ToDo;