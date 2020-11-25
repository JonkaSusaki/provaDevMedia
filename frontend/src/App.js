import React from 'react'
import './App.css'
import './styles/responsive.css'

import {BrowserRouter} from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Router from './config/Router'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
