import React, {useState} from 'react';
import {Container, Col , Row, Form, Button} from 'react-bootstrap'
import CreateTask from './components/CreateTask'
import TaskViewer from './components/TaskViewer'


class MainList extends React.Component{
  constructor(props) {
   super(props);
   this.state = {
     todo:[],
     todoObj:{
       name:'',
       date:'',
       time:'',
       remind:'',
       classify:'',
     }
   }
   this.removeTask = this.removeTask.bind(this)
 }

 addTask = (task) => {
   this.setState({todo:[...this.state.todo, task]})
 }

 removeTask = (taskId) => {
    const tasks = this.state.todo.filter(item => item.taskId !== taskId)
    this.setState({todo:tasks})
 }

 editTask = (taskId) => {

 }


  render(){
    return <main>
      <h1 className="text-center">MY TODO</h1>
      <Container>
        <Row>
          <Col>
            <TaskViewer todo={this.state.todo} removeTask={this.removeTask} editTask={this.editTask} />
          </Col>
          <Col>
            <CreateTask addTask={this.addTask} todoObj={this.state.todoObj}/>
          </Col>
         </Row>
      </Container>
     </main>;
  }
}

export default MainList;
