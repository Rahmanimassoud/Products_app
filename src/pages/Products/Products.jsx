import { useState } from "react";
import "./index.css";


const Products = () => {

    const [products, setProducts] = useState([])

    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: ''
    })

    const handelSubmit = (e)=> {
        e.preventDefault();
        setProducts([...products, product])
        setProduct({name: "", description: "", price: ""})
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setProduct({...product, [name]: value})
    }

    return (
        <div className="container">
        <h1>Products Page</h1>

        <form className="form" onSubmit={handelSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Product Name</label>
            <input type="text" 
            className="form-control"
            name="name" value={product.name}
            onChange={handleChange}/>
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <input type="text"
            className="form-control"
            name="description"
            value={product.description}
            onChange={handleChange}/>
          </div>
        
          <div className="mb-3">
            <label htmlFor="price" className="form-label">Price</label>
            <input type="text"
            className="form-control"
            name="price"
            value={product.price}
            onChange={handleChange}/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <ul>
            {products.map((eachProduct, index)=> {
                return <li key={index}>
                    Product Name: {eachProduct.name}
                    Product Description: {eachProduct.description}
                    Product Price $: {eachProduct.price}
                </li>
            })}
        </ul>
      </div>
    )
};

export default Products;
