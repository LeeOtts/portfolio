import React, { useState } from "react";
import { Button, Label, Col, FormGroup } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validateContactForm } from '../utils/validateContactForm';

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, phone, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      phone: phone.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/ContactPage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        phone: '',
        message: '',
      }}
      onSubmit={handleSubmit}
      validate={validateContactForm}
    >
      <Form>
        <FormGroup row>
          <Label htmlFor='name' md='2'>
            Name
          </Label>
          <Col md='10'>
            <Field
              name='name'
              id='name'
              placeholder='Name'
              className='form-control'
            />
            <ErrorMessage name='name'>
              {(msg) => <p className='text-danger'>{msg}</p>}
            </ErrorMessage>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor='email' md='2'>
            Email
          </Label>
          <Col md='10'>
            <Field
              name='email'
              id='email'
              placeholder='Email'
              type='email'
              className='form-control'
            />
            <ErrorMessage name='email'>
              {(msg) => <p className='text-danger'>{msg}</p>}
            </ErrorMessage>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor='phone' md='2'>
            Phone
          </Label>
          <Col md='10'>
            <Field
              name='phone'
              id='phone'
              placeholder='Phone'
              type='phone'
              className='form-control'
            />
            <ErrorMessage name='phone'>
              {(msg) => <p className='text-danger'>{msg}</p>}
            </ErrorMessage>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label htmlFor='message' md='2'>
            Question/Message?
          </Label>
          <Col md='10'>
            <Field
              name='message'
              id='message'
              placeholder='Message'
              as='textarea'
              rows='12'
              className='form-control'
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col md={{ size: 10, offset: 2 }}>
            <Button type='submit' color='dark'>
              {status}
            </Button>
          </Col>
        </FormGroup>
      </Form>
    </Formik>
  );
};

export default ContactForm;

