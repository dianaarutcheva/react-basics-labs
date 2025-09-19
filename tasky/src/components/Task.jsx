import React from 'react';

const Task = (props) => {
  return (
    <div 
      className="card"
      style={{ 
        backgroundColor: props.done ? 'lightgrey' : '#5bb4c4',  
        position: 'relative'                                      
      }}
    >
      <p className="title">{props.title}</p>
      <p>Due: {props.deadline}</p>
      <p className="description">{props.description}</p>
      <p><strong>{props.priority}</strong></p>
      <button onClick={props.markDone} className="doneButton">Done</button>
    </div>
  );
}

export default Task;
