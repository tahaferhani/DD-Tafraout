import { useState } from "react"
import { Link } from "react-router-dom"

export default () => {
    const [products, setProducts] = useState([
        {
          "id": 1,
          "name": "Smartphone",
          "category": "Electronics",
          "price": 699.99,
          "description": "A high-end smartphone with a powerful processor and stunning display."
        },
        {
          "id": 2,
          "name": "Laptop",
          "category": "Electronics",
          "price": 1199.99,
          "description": "A sleek and powerful laptop perfect for both work and play."
        },
        {
          "id": 3,
          "name": "Wireless Headphones",
          "category": "Accessories",
          "price": 199.99,
          "description": "Noise-cancelling wireless headphones with superior sound quality."
        },
        {
          "id": 4,
          "name": "Coffee Maker",
          "category": "Home Appliances",
          "price": 89.99,
          "description": "A versatile coffee maker that brews your favorite coffee quickly and easily."
        }
      ])

    return <>
        <h1>Products page</h1>

        <ul>
        {
            products.map(prod => {
                return <li key={prod.id}>
                    {prod.name} - <b>{prod.price}$</b> <Link to={`/detail-product/${prod.id}`}>Detail</Link>
                </li>
            })
        }
        </ul>
    </>
}