import React from 'react'
import "./styles/style.css";
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Cv from "./pages/Cv";
import Contact from "./pages/Contact";
import { BrowserRouter,Routes,Route } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
       <Navbar/>
       <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/skills' element={<Skills/>}/>
         <Route path='/projects' element={<Projects/>}/>
         <Route path='/cv' element={<Cv/>}/>
         <Route path='/contact' element={<Contact/>}/>
       </Routes>
    </BrowserRouter>
  )
}

export default App