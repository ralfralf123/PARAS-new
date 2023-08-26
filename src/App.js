import React from 'react'
import Homepage from './scenes/Homepage'
import About from './scenes/About'
import Services from './scenes/Services'
import { Route,Routes } from 'react-router-dom';
import Branches from './scenes/Branches'
import Careers from './scenes/Careers';
import Contact from './scenes/Contact';
import Details from './scenes/Details';

const App = () => {
  return (
    <>
    <div className="App">
      <Routes>        
      <Route path="/"  element={<Homepage/>} />
      <Route path="/about"  element={<About />}/>
      <Route path="/services"  element={<Services/>}/>
      <Route path="/branches"  element={<Branches/>}/>
      <Route path="/careers"  element={<Careers/>}/>
      <Route path="/contact"  element={<Contact/>}/>
      <Route path="/details"  element={<Details/>}/>
      </Routes>
      </div>
    </>
  )
}

export default App