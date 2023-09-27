import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
`;

const FormInput = styled.input`
  margin-bottom: 10px;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 3px;
  width: 450px;

  ::placeholder {
    color: #999;
    font-style: italic;
  }
`;

const FormTextArea = styled.textarea`
  margin-bottom: 10px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  width: 100%;
  height: 100px;
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 15px;
  border-radius: 30px;
  margin-top: 10px;
  cursor: pointer;
`;

export default function FooterForm() {
    return (
        <Form>
          <FormInput type="text" id="name" name="name" placeholder="Enter your name" />
          <FormInput type="email" id="email" name="email" placeholder="Enter your email" />
          <FormInput type="text" id="company" name="company" placeholder="Enter your company name" />
          <FormTextArea id="message" name="message" placeholder='Write Your message'></FormTextArea>
          <SubmitButton type="submit">Send Query</SubmitButton>
        </Form>
    )
}