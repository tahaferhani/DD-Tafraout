import { useState } from 'react'
import './App.css'
import Cart from './Cart';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([
    {
      "id": 1,
      "name": "Apple iPhone 14",
      "price": 799.99
    },
    {
      "id": 2,
      "name": "Samsung Galaxy S21",
      "price": 699.99
    },
    {
      "id": 3,
      "name": "Sony WH-1000XM4 Wireless Headphones",
      "price": 348.00
    },
    {
      "id": 4,
      "name": "Nespresso Vertuo Coffee Maker",
      "price": 189.00
    },
    {
      "id": 5,
      "name": "Dell XPS 13 Laptop",
      "price": 999.99
    },
    {
      "id": 6,
      "name": "Apple MacBook Pro",
      "price": 1299.99
    },
    {
      "id": 7,
      "name": "Fitbit Charge 5",
      "price": 179.95
    },
    {
      "id": 8,
      "name": "Bose SoundLink Revolve+ Bluetooth Speaker",
      "price": 299.00
    },
    {
      "id": 9,
      "name": "Canon EOS Rebel T7 DSLR Camera",
      "price": 479.00
    },
    {
      "id": 10,
      "name": "Samsung Galaxy Tab S7",
      "price": 649.99
    }
  ]);

  return (
    <>
      <h3>Products list</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            products.map(prod => {
              return <tr key={prod.id}>
                <td>{prod.id}</td>
                <td>{prod.name}</td>
                <td>{prod.price}$</td>
                <td>
                  <button onClick={() => dispatch({ type: "ADD_TO_CART", payload: prod })}>Ajouter au panier</button>
                </td>
              </tr>
            })
          }
        </tbody>
      </table>

      <br/>
      <Cart/>
    </>
  )
}

export default App
