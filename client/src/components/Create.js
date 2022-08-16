import {useState} from "react";
import axios from "axios";

function Create() {
    const [product, setProduct] = useState({})
    const handleCreate = () => {
        axios.post('http://localhost:3001/products', product
        ).then((response) => {
            console.log(response)
        })
        alert('Product created successfully');
        window.location.replace('/')
    }
    console.log(product)
    return (
        <>
            <h1>CREATE NEW PRODUCT</h1>
            <form>
                Name: <input type="text" name="name" placeholder="Name" value={product.name} onChange={(e) => {
                setProduct(prevState => ({
                    ...prevState,
                    name: e.target.value
                }))
            }} required/>
                Price: <input type="text" name="price" placeholder="Price" value={product.price} onChange={(e) => {
                setProduct(prevState => ({
                    ...prevState,
                    price: e.target.value
                }))
            }} required/>
                Description: <input type="text" name="description" placeholder="Description" onChange={(e) => {
                setProduct(prevState => ({
                    ...prevState,
                    description: e.target.value
                }))
            }} required/>
                Stock: <input type="number" name="stock" placeholder="Stock" onChange={(e) => {
                setProduct(prevState => ({
                    ...prevState,
                    stock: e.target.value
                }))
            }} required/>
                <button onClick={handleCreate} className="btn btn-primary">Create</button>
            </form>
        </>
    )
}

export default Create