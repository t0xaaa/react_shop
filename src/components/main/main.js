import Stack from 'react-bootstrap/Stack';
import './main.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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
    <div className='leftDiv2'>
    <img src='./img/steam.png'></img>
        </div>
        <div className='rightDiv2'>
            <h6 className='worldGames2'>На любой вкус</h6>
            <h3>МНОГО ТОПОВЫХ ИГР STEAM</h3>
        </div>
        <div className='maincardmaf'>
            <div className='mafiatril'>
                <img src='./img/mafiatril.png'></img>
            </div>
         <div className='cards'>  
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./img/1mafia.png" />
      <Card.Body>
        <Card.Title>Mafia 1</Card.Title>
        <Card.Text>
        Легенда из 
            игр
        </Card.Text>
        <b>870 рублей</b> <Button variant="primary">Посмотреть</Button>
      </Card.Body>
    </Card>
    </div> 
    <div className='cards2'>  
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./img/2mafia.png" />
      <Card.Body>
        <Card.Title>Mafia 2</Card.Title>
        <Card.Text>
        Вторая часть 
легендарной франшизы
        </Card.Text>
        <b>729 рублей</b> <Button variant="primary">Посмотреть</Button>
      </Card.Body>
    </Card>
    </div> 
    <div className='cards4'>  
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./img/dop.png" />
      <Card.Body>
        <Card.Title>Mafia 2 доп</Card.Title>
        <Card.Text>
        Вторая часть 
    дополнение к игре
        </Card.Text>
        <b>200 рублей</b> <Button variant="primary">Посмотреть</Button>
      </Card.Body>
    </Card>
    </div> 
    <div className='cards3'>  
            <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src="./img/3mafia.png" />
      <Card.Body>
        <Card.Title>Mafia 3</Card.Title>
        <Card.Text>
        Самый доступный в линейке
Включил и пошел
Легкий и прочный
        </Card.Text>
        <b>1100 рублей</b> <Button variant="primary">Посмотреть</Button>
      </Card.Body>
    </Card>
    </div>
    <p className='tastegood'><h1>Игры от Rockstar</h1></p>
    <div className='leftDiv2'>
    <img src='./img/rockstart.png'></img>
        </div>
        <div className='rightDiv2'>
            <h6 className='worldGames2'>Компания поджарившая много замечательных игр</h6>
            
        </div>
        <div className='card5'>  
            <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src="./img/gta55.png" />
      <Card.Body>
        <Card.Title>GTA 5</Card.Title>
        <Card.Text>
        Легенда из 
            игр
        </Card.Text>
        <b>1200 рублей</b> <Button variant="primary">Посмотреть</Button>
      </Card.Body>
    </Card>
    </div> 
    <div className='cards6'>  
            <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src="./img/bully.png" />
      <Card.Body>
        <Card.Title>BULLY</Card.Title>
        <Card.Text>
        Вторая часть 
легендарной франшизы
        </Card.Text>
        <b>29 рублей</b> <Button variant="primary">Посмотреть</Button>
      </Card.Body>
    </Card>
    </div> 
    <div className='cards7'>  
            <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src="./img/rdr2.png" />
      <Card.Body>
        <Card.Title>RDR 2</Card.Title>
        <Card.Text>
        Вторая часть 
    дополнение к игре
        </Card.Text>
        <b>2000 рублей</b> <Button variant="primary">Посмотреть</Button>
      </Card.Body>
    </Card>
    </div>
        </div>
     </div>
        

    </div>

  }

export default Main