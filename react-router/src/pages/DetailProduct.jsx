import { useState } from "react"
import { useParams } from "react-router-dom"

export default () => {
    const { id } = useParams();
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

    const selectedProduct = products.find(item => item.id == id);

    return <>
        <h1>Product detail page</h1>
        
        {
            selectedProduct ?
            <>
                <ul>
                    <li><b>Name : </b> {selectedProduct.name}</li>
                    <li><b>Category : </b> {selectedProduct.category}</li>
                    <li><b>Price : </b> {selectedProduct.price}$</li>
                </ul>

                <p>{selectedProduct.description}</p>
            </>
            :
            <p>No product found with the id : {id}</p>
        }
    </>
}