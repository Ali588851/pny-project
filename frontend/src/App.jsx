import { useState } from 'react';
import './App.css';
import './index.css'; 
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Department from './pages/Department';
import Navbar from './components/Navbar';
import Hospital from './pages/Hospital';     // <-- Add this
import Gchs from './pages/Gchs';             // <-- And this
import Footer from './components/Footer';
import NEPHROLOGY from './pages/NEPHROLOGY'
import OPHTHALMOLOGY from './pages/OPHTHALMOLOGY';
import GASTROENTEROLOGY from './pages/GASTROENTEROLOGY';
import PlasticSurgery from './pages/PlasticSurgery';
import Physiotherapy from './pages/Physiotherapy';
import Radiology from './pages/Radiology';
import Contact from './pages/Contact';
import Appointment from './pages/Appointment';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/department' element={<Department />} />
        <Route path='/hospital' element={<Hospital />} />
        <Route path='/gchs' element={<Gchs />} />
        <Route path='/nephrology' element={<NEPHROLOGY/>}/>
        <Route path='/ophthalmology' element={<OPHTHALMOLOGY/>}/>
        <Route path='/gastroenterology' element={<GASTROENTEROLOGY/>}/>
        <Route path='/plasticsurgery' element={<PlasticSurgery/>}/>
        <Route path='/physiotherapy' element={<Physiotherapy/>}/>
        <Route path='/radiology' element={<Radiology/>}/>
        <Route path='/contact' element={<Contact/>}/>
          <Route path='/appointment' element={<Appointment/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
