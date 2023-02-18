import Stack from 'react-bootstrap/Stack';
import './main.css'

function Main() {

    return<div>
     <div className='mainMain'>
        <div className='leftDiv'>
            <h1 className='worldGames'>Откройте для себя мир игр!</h1>
            <p>Все о компании “Neskam” за одну минуту</p>
            <img className='logovid' src='./img/watchvid.png'></img>
        </div>
        <div className='rightDiv'>
            <img src='./img/gta.png'></img>
        </div>
        <div className='products'>
            <img className='outlast' src='./img/outlast.png'></img>
            <img className='portal' src='./img/portal.png'></img>
            <img className='outlast' src='./img/skyrim.png'></img>
        </div>

    <p className='tastegood'><h1>Отличный вкус</h1></p>
     </div>
        

    </div>

  }

export default Main