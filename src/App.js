import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import Header from './components/header/header';
import Main from './components/main/main';
import './App.css'
// import Slider from './components/main/slider';

function App() {

    return <div>
      <Header />
      <Main />
      {/* <Slider /> */}
    </div>
  }

export default App