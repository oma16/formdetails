import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Card, Row, Col, Container, Button} from 'react-bootstrap'

export class Info extends Component {
 constructor(props){
   super(props);
   
     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
     
   this.state ={
    firstname : "",
    lastname : "",
    email : "",
    gender : "",
    address : "",
    bio : "",
    
    
   };
 }
  
 handleChange = (event)=>{
   let value = event.target.value;
   this.setState({
     ...this.state,
    [event.target.name]:value,
  });
 }


 handleSubmit = (event)=>{
   event.preventDefault();
   alert("successfully submitted " + Object.entries(this.state));
   
   
 }

  render() {
    const inputValue = Object.entries(this.state).map(([name,value])=>
     (
       <li key={name}><strong>{name}:</strong><span className='textred'>{value.toString()}</span></li>
     ))
    return (
      <div>
        <h1 className='text-center mt-3 mb-3'>My Form </h1>
            <Container>
            <Form onSubmit={this.handleSubmit} className="m-3 bgform">
              <Row className="m-3 " >
                <Col>
                <Form.Label className="mt-3 " >First Name:</Form.Label>
                  <Form.Control type="text" name="firstname" id="" 
                  value={this.state.firstname} onChange={this.handleChange} />
                </Col>
                  <Col>
                  <Form.Group className="mb-3" >
                  <Form.Label className="mt-3" >Last Name:</Form.Label>
                  <Form.Control type="text" name="lastname" id="" 
                  value={this.state.lastname}  onChange={this.handleChange}/>
                  
                  </Form.Group>
                  </Col>
                  
                  </Row>
                  
                  <Form.Group className="m-4" >
                  <Form.Label >Email:</Form.Label>
                  <Form.Control type="email" name="email" id="" 
                  value={this.state.email}  onChange={this.handleChange} />
                  
                  </Form.Group>
                  
                  <Form.Group className="m-4" >
                    
                    <Form.Label >Gender:</Form.Label>
                    <Row>
                      <Col><Form.Check type="radio" aria-label="radio 1"  name="gender" id="" 
                    value="Male"  onChange={this.handleChange} label="Male"/></Col>
                      <Col><Form.Check type="radio" aria-label="radio 1" name="gender" id="" 
                    value="Female"  onChange={this.handleChange} label="Female"/></Col>
                      <Col>
                    <Form.Check type="radio" aria-label="radio 1" name="gender" id="" 
                    value="Others"  onChange={this.handleChange} label="Others" /></Col>
                    </Row>
                    
                  </Form.Group>
                  
                 
                  
                  <Form.Group className="m-4" >
                  <Form.Label >Address: </Form.Label>
                  <Form.Control type="text" name="address" id="" 
                  value={this.state.address}  onChange={this.handleChange}/>
                  
                  </Form.Group>
                  
                  <Form.Group className="m-4">
                  <Form.Label >Bio:</Form.Label>
                  <Form.Control name="bio" id="" as="textarea" rows={3} 
                  value={this.state.bio}  onChange={this.handleChange}/>
                  
                  </Form.Group>
                   <Button type="submit" variant="primary" onClick={this.handleSubmit} className="m-4">Submit your data</Button>
              
          </Form>
            </Container>
          
         <Container>
         <Card className="mb-3">
            <Card.Body>

              <div>
                { 
                  <div >
                  you are submitting the following:
                  <ul>
                  {inputValue}
                  </ul>
                </div>
                }
              </div>
              
            </Card.Body>
        </Card>
           </Container>  
          
      </div>
    )
  }
}

export default Info;