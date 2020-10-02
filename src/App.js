import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Header from "./site/components/Header";
import Main from "./site/components/Main"
import './App.css';
import Footer from "./site/components/Footer"
function App() {
  return (
    
    <Router>
    <div className="app">
      <Header />
      <Main/>
      <Footer/>
    </div>
  </Router>
   
  );
}

export default App;
