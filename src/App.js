
import './App.scss';
import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Header from './components/header/Header'
import Home from './components/Home/Home'
import MovieDetail from './components/MovieDetail/MovieDetail'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="container">
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/movie/:imdbID" element={<MovieDetail/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
