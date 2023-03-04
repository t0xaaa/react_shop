import Stack from 'react-bootstrap/Stack';
import './SideCart.css'
import { useState } from 'react'




function SideCart(){
    const [openCart, SetOpenCart] = useState(true)
    const [ oform, setOform] = useState(false);

    let styleOverflow = {}
    let styleSideBlock = {}

    if (openCart == true){
        styleOverflow = {width: '100%'}
        styleSideBlock = {width: '385px'}
    }
    else{
        styleOverflow = {width: '0'}
        styleSideBlock = {width: '0'}
    }
    

    let content = oform ? <div><h1>Корзина</h1>
  <img src="./img/oformit.png" className="Close" onClick={() => SetOpenCart(false)}></img>
  <div className="poloska"></div>
  <div className="MainProduct">
    <h2 className='zakaz'>Ваш заказ оформлен</h2>
    <h6 className='downer'>Код получения товара скоро придет вам на почту</h6>
  </div>


  
  <div className='order'>
    <a onClick={()=>setOform(false)} href="#"> 
      Отменить заказ
    </a>
    </div>

  </div> :  <><Stack direction="horizontal" gap={3}>
      <div className='CartItems'>
      <h1 className='cartik'>Корзина</h1>
        <div className='CartItem'>
        <div className="bg-light border "><img src='./img/uncharted.png'></img></div>
          <div className="bg-light border hp">
          <p>Uncharted 4 <img className='imga' src='./img/trash.png'></img></p>
          <p><b>Цена:</b></p>
          <p><b>1000 рублей</b></p>
        </div>
        </div>
      </div>
    </Stack>
    <Stack direction="horizontal" gap={3}>
      <div className='CartItems'>
        <div className='CartItem'>
        <div className="bg-light border"><img src='./img/outlast21.png'></img></div>
          <div className="bg-light border hp">
          <p>Outlast <img className='imga' src='./img/trash.png'></img></p>
          <p><b>Цена:</b></p>
          <p><b>77 рублей</b></p>
        </div>
        </div>
      </div>
    </Stack>
    <Stack direction="horizontal" gap={3}>
      <div className='CartItems'>
        <div className='CartItem'>
        <div className="bg-light border"><img src='./img/mafia.png'></img></div>
          <div className="bg-light border hp">
          <p>Mafia:Trilogy <img className='imga' src='./img/trash.png'></img></p>
          <p><b>Цена:</b></p>
          <p><b>1900 рублей</b></p>
        </div>
        </div>
      </div>
    </Stack>
    <Stack direction="horizontal" gap={3}>
      <div className='CartItems'>
        <div className='CartItem'>
        <div className="bg-light border "><img className='fara'src='./img/forest.jpeg'></img></div>
          <div className="bg-light border hp">
          <p>The Forest <img className='imga' src='./img/trash.png'></img></p>
          <p><b>Цена:</b></p>
          <p><b>250 рублей</b></p>
        </div>
        </div>
      </div>
    </Stack>
    <div className='order'>
    <a onClick={()=>setOform(true)} href="#"> 
      Заказать 
    </a>
    </div>
    </>
  
return<div>
    <div className='Overflow' style={styleOverflow} onClick={() => SetOpenCart(false)}></div>
    <div className='SideBlock' style={styleSideBlock}>
    <div className='scroll'>
   
    {content}
    
    
    
    
    </div>
    

   

    </div>
    

    </div>
    
}

export default SideCart