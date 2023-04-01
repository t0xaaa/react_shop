import './Card.css'
import {Card, Stack} from 'react-bootstrap';
import {useState} from 'react';

function Card({id, cost, name, img, addProdToCart}) {

    const [addToCart, setAddToCart] = useState(false)
    const [cart, setCart] = useState([
        {id : 0, name: 'Uncharted 4', cost:'1000р', img:'./img/uncharted.png' },
        {id : 1, name: 'Outlast', cost:'77р', img:'./img/outlast21.png' },
        {id : 2, name: 'Mafia:Trilogy', cost:'1900р', img:'./img/mafia.png' },
        {id : 3, name: 'The Forest', cost:'250р', img:'./img/forest.jpeg' },
  ]);

    function clickAddButton(newProd) {
      setAddToCart(!addToCart);
      addProdToCart(newProd);
    }
    function addProdToCart(newProd) {

        let alreadyAdded = false

        for (let i = 0; i < cart.length; i++) {
            if (cart[i]['id'] == newProd.id) {
                alreadyAdded = true
            }

        }

        if (!alreadyAdded) {

            SetCart(prev => [...prev, newProd])

        }
        else {
            SetCart(cart.filter(p => p.id !== newProd.id));
        }
    }

      return  <Card id='card'>
            <Card.Img variant="top" src={img} id='cardImg'/>
            <Card.Body>
              <Card.Title id='cardTitle'>{name}</Card.Title>
              <Card.Text id='cardText'>
              <Stack direction="horizontal" gap={3}>
                <div className="element"><p id='priceLabel'>Цена:</p><p id='price'>{cost}</p></div>
                <div className="element ms-auto"><img id='AddToCartButton' src={addToCart ? '/img/AddToCartButtonClicked.svg' : '/img/AddToCartButton.svg'} onClick={() => clickAddButton({id: id, name: name, cost: cost, img: img})} /></div>
            </Stack>
              </Card.Text>
            </Card.Body>
          </Card>
    }




export default Card