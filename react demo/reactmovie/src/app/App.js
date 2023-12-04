import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import About from '../components/About';
import ContactUs from '../components/Conatct';
import Moviecard from '../components/moviecard';
import { MovieProvider } from '../components/MovieContext';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MovieProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home /> } >
             
              </Route>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/movies" element={<Moviecard />} />
            
          </Routes>
        </MovieProvider>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
