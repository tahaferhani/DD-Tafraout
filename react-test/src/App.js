import { useEffect, useState } from 'react';
import './App.css';
import SayHello from './components/SayHello';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
    .then(resp => resp.json())
    .then(resp => {
      setProducts(resp.products);
    })
  }, [])

  return (
    <div className="App">
      <SayHello name="Kamal" age="20"/>
      <SayHello name="Said" age="30"/>
      <SayHello name="Fatima" age="25"/>
      <div id='products'>
        {
          products.map(({ id, title, price, thumbnail }) => {
            return <div className='product' key={id}>
              <img width={50} src={thumbnail}/>
              <h2>{title}</h2>
              <span>{price} $</span>
            </div>
          })
        }
      </div>
    </div>
  );
}

export default App;

// https://dummyjson.com/products