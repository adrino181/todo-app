import React from 'react';
import './App.css';
import {Container, Col , Row, Form, Button} from 'react-bootstrap'



const CreateTask = () => {
  return <div>
        <h2>Add task</h2>
        <div>
          <Form>
            <Form.Group controlId="taskName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
            Submit
            </Button>
          </Form>
        </div>
  </div>
}

const TaskViewer = () => {
  return <div>Tasks to show</div>
}

class MainList extends React.Component{
  constructor(props) {
   super(props);
   this.state = {
     todo:[]
   };
 }
  render(){
    return <main>
    <h1 className="text-center">MY TODO</h1>
      <Container>
        <Row>
          <Col>
            <TaskViewer />
          </Col>
          <Col>
            <CreateTask />
          </Col>
        </Row>
      </Container>
     </main>;
  }
}

export default MainList;
