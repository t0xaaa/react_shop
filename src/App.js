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
  const [cart, setCart] = useState([
        {id : 0, name: 'Uncharted 4', cost:'1000р', img:'./img/uncharted.png' },
        {id : 1, name: 'Outlast', cost:'77р', img:'./img/outlast21.png' },
        {id : 2, name: 'Mafia:Trilogy', cost:'1900р', img:'./img/mafia.png' },
        {id : 3, name: 'The Forest', cost:'250р', img:'./img/forest.jpeg' },
  ]);
  
  

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