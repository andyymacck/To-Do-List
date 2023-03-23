import React from 'react';
import './App.css';

var datetime = () =>
{
    var showdate=new Date();
    
    var dt=showdate.toDateString();
    var displaytime = showdate.getHours()+ ':' +showdate.getMinutes();
    return(
<div id = "datetime">
    <center>
    <div type = "text"/>
   {dt} - {displaytime}
    </center>
</div>

    );
}

export default datetime;