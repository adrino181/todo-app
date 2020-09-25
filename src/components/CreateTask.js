
import React, {useState} from 'react';
import {default as ReactDatePicker} from 'react-date-picker';
import {default as TimePicker} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {Container, Col , Row, Form, Button} from 'react-bootstrap'

const CreateTask = ({addTask, todoObj}) => {
  const [date, setDate] = useState(todoObj.date)
  const [time , setTime] = useState(todoObj.time)
  const [name, setName] = useState(todoObj.name)
  const [classify, setClassify] = useState(todoObj.classify)
  const [remark , setRemark] = useState(todoObj.remark)

  const handleSubmit = () => {
    addTask({
         name:name,
         date:date,
         remind:time,
         remark:remark,
         classify:classify,
         taskId:Date.now()
    })
  }
  return <div>
        <h2>Add task</h2>
        <div>
          <Form>
            <Form.Group controlId="taskName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={name} onChange={(e)=> setName(e.target.value)} />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <ReactDatePicker
              onChange={setDate}
              value={date}
            />
            <TimePicker
             selected={time}
             onChange={date => setTime(date)}
             showTimeSelect
             showTimeSelectOnly
             timeIntervals={15}
             timeCaption="Time"
             dateFormat="h:mm aa"
           />
            <Form.Group controlId="classify">
              <Form.Label>Classify</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={(ele)=> setClassify(ele.target.value)}  />
            </Form.Group>
            <Form.Group controlId="remarks">
              <Form.Label>Remarks</Form.Label>
              <Form.Control type="text" placeholder="Enter email" onChange={(ele)=> setRemark(ele.target.value)}  />
            </Form.Group>
            <Button variant="primary" onClick={()=> handleSubmit()}>
              Submit
            </Button>
          </Form>
        </div>
  </div>
}

export default CreateTask
