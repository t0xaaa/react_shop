import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import Header from './components/header/header';
import Main from './components/main/main';
import SideCart from './components/SideCart/SideCart';
import './App.css'

// import Slider from './components/main/slider';

function App() {

  const [openCart, SetOpenCart] = useState(true)
  

    return <div>
      <SideCart openCart={openCart} SetOpenCart={() => SetOpenCart(false)}/>
      <Header SetOpenCart={() => SetOpenCart(true)}/>
      <Main />
      
    </div>
  }

export default App