import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import Header from './components/header/header.js';
import Main from './components/main/main';
import SideCart from './components/SideCart/SideCart';
import {Routes, Route} from "react-router-dom";
import Favourites from './components/main/Favourites.js';
import Profil from './components/profil/profil.js';
import './App.css'


// import Slider from './components/main/slider';

function App() {

  const [openCart, SetOpenCart] = useState(true)
  
  


    return <div>
      <SideCart openCart={openCart} SetOpenCart={() => SetOpenCart(false)}/>
      <Header SetOpenCart={() => SetOpenCart(true)}/>

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/profil" element={<Profil />} />
      </Routes>

      
      

      
    </div>
  }

export default App