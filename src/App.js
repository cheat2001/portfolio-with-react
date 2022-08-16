import React from 'react'
import "./styles/style.css";
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Footer from './components/Footer';
function App() {
  return (
    <BrowserRouter>
       <Navbar/>
       <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/skills' element={<Skills/>}/>
         <Route path='/projects' element={<Projects/>}/>
         <Route path='*' element={<NotFound/>}/>
         <Route path='/contact' element={<Contact/>}/>
       </Routes>
       <Footer/>
    </BrowserRouter>
  )
}

export default App