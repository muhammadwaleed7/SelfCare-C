import React, { Component } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import TextFieldGroup from '../../common/TextFieldGroup';

class Signup extends Component {

  render() {
    return (
      <div className="bodyContainer">
        <Col md={4}></Col>
        <Col md={4}>
          <div className="formContainer">
            <h1>Sign Up</h1>
            <Form onSubmit={this.handleSubmit}>
              <TextFieldGroup
                label="Name"
                id="formControlsName"
                type="text"
                name="name"
                placeholder="Name"
                value={this.state.name}
                onChange={this.handleChange}
              />
              <TextFieldGroup
                label="Email"
                id="formControlsEmail"
                type="text"
                name="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleChange}
               />
              <TextFieldGroup
                label="Password"
                id="formControlsPassword"
                type="password"
                name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleChange}
               />
             <div className="submissionFields">
               <Button type="submit" value="Sign Up">Sign Up</Button>
               <Button bsStyle="link">Forgot Password?</Button>
             </div>
             <div className="alternativeAccess">
               <hr></hr>
               <p>Already have an Account?</p>
               <Button href="/login" bsStyle="primary" bsSize="large" block>Log In</Button>
               <Button href="#" bsSize="large" block>Sign Up with FB</Button>
             </div>
            </Form>
          </div>
        </Col>
        <Col md={4}></Col>
      </div>
    )
  }
}

export default Signup;
