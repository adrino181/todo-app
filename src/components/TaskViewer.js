import React, {useState} from 'react';
import {Container, Col , Row, Form, Button} from 'react-bootstrap'


const TaskCardView = ({todo, editTask, removeTask}) => {
  return <div>
      <span> {todo.name}</span>
      <span> {todo.classify}</span>
      <button onClick={() => editTask(todo.taskId)}>Edit</button>
      <button onClick={()=> removeTask(todo.taskId)}>Delete</button>
  </div>
}

const TaskViewer = ({todo, editTask, removeTask}) => {
  const todoTasks = todo.map((item, key) => <TaskCardView key={key} todo={item} editTask={editTask} removeTask={removeTask}/>)
  return <div>
      {todoTasks}
  </div>
}


export default TaskViewer
