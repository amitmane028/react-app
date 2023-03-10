import React from 'react'
import {Form,Button} from 'react-bootstrap';
export default function Example() {
  return (
    <div className='demo'>
      <Form >
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
    </Form>
    <Button variant="primary" type="submit">
        Submit
      </Button>
    </div>
  )
}
