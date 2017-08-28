import React from 'react';
import ReactDOM from 'react-dom';
import FacebookAuth from 'react-facebook-auth';
import { connect } from 'react-redux';
 
const FacebookButton = ({ onClick }) => (
  <button onClick={onClick}>
    Facebook
  </button>
);


export default FacebookButton;