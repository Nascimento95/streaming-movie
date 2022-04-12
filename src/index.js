import React from 'react';
import {createRoot} from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import AllMovies from './pages/AllMovies';
import Header from './components/header/Header';


const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Header/>
    <React.StrictMode>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/allmovies' element={<AllMovies />}/>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>,
);


