import React from 'react';
import './style.css';
import Signup from './Components/Signup';
import ReactDOM from 'react-dom';
export default function App() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-6">
          <Signup />
        </div>
      </div>
    </div>
  );
}
