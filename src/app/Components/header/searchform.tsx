import React from 'react';
import styled from 'styled-components';

export default function SearchForm() {
    return (
        <FormContainer>
          <input type="text" placeholder="Search" />
          <button type="submit">Search</button>
        </FormContainer>
      );
};

const FormContainer = styled.form`
  position: absolute;
  right: 450px;
  height : auto;
  top: 80px;
  margin-top: 12px;
  z-index: 99;
  padding: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  box-sizing: border-box;
  box-shadow: 1px 1px 2px 2px black;

  input[type='text'] {
    padding: 10px;
    margin-right: 10px;
    font-family: monospace;
    font-weight: bold;
    border: 2px solid black;
  }

  input[type='text']:focus {
    border-radius: 50px;
  }

  button {
    background-color: #007bff;
    color: #fff;
    font-size: 14px;
    border: 1px solid #007bff;
    padding: 6px 12px;
    cursor: pointer;
  }

  button:hover {
    background-color: white;
    color: #007bff;
  }
`;