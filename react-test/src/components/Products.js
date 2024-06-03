import { useEffect, useState } from "react";
import Product from "./Product"

export default () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
        .then(resp => resp.json())
        .then(resp => {
          setProducts(resp.products);
        })
      }, [])

    const deleteProduct = (id) => {
        setProducts(products.filter(product => product.id != id));
    }

    return <div id='products'>
        {
            products.map((product) => {
                return <Product data={product} deleteProduct={deleteProduct} key={product.id}/>
            })
        }
    </div>
}