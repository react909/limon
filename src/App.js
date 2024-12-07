import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './conpanents/Header/Header';
import Main from './conpanents/Main/Main';
import Footer from './conpanents/Footer/Footer';
import Korzina from './conpanents/korzina/Korzina';
import { useState } from 'react';



function App() {

  const[korzina,setKorzina]=useState([])







  return (
   
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/Korzina' element={<Korzina korzina={korzina} setKorzina={setKorzina}/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
  );
}

export default App;