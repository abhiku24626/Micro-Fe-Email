import './App.css';
import Email from './components/Email.jsx';
import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <>

      <Router>
        <Email />
      </Router>
    </>
  );
}

export default App;
