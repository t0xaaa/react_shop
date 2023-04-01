import Stack from 'react-bootstrap/Stack';
import SideCart from '../SideCart/SideCart';
import {Link} from "react-router-dom";
import './header.css'

function Header(props) {

    return<div>
     <div className='mainHeader'>
        <span>NeSkam</span><select id="selcolor"><option value="Maroon">О Компании</option></select> <span>Блог</span><span>Сервис и гарантия</span><span>Доставка и оплата</span><span>Контакты</span><span>8 (800) 555-35-35</span><img onCkick src='./img/buttons.png'></img>
    </div>
    <div className='mainHeader2'>
    <Stack direction="horizontal" gap={3}>
      <div className=" "></div>
      <div className="">Игры</div>
      <div className="">Поиск</div>
      <div className="">Самое выгодное</div>
      <div className=" ms-auto"><Link to="/profil"><img className='buttomprofil' src='./img/Group.png'></img></Link> Вход</div>
      <div className=" "><img className='logocart' src='./img/Vector.png' onClick={() => props.SetOpenCart()}></img></div>
      <div className=""></div>
    </Stack>
    </div>
  

    </div>

  }

export default Header