import {useEffect, useState} from "react";
import axios from "axios";
import {useLocation} from "react-router-dom";

function Product() {
    const location = useLocation();
    const [product, setProduct] = useState({})
    const path = location.pathname.split("/")[2];
    const [fix, setFix] = useState(true)
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get('http://localhost:3001/products/' + path)
            setProduct(res.data)
        }
        fetchData()
    }, [path]);
    const deleteItem = () =>{
        const deleteData = async() =>{
            await axios.delete(`http://localhost:3001/products/${product.id}`);
            alert('Product deleted successfully')
            window.location.replace('/')
        }
        deleteData()
    }

    const handleFix= ()=>{
        const fixData = async() =>{
            await axios.put(`http://localhost:3001/products/${product.id}`,product);
            alert('Product fix successfully')
            window.location.replace('/')
        }
        fixData()
    }
    console.log(product);

    return (
        <>  <h1>Product</h1>
            <form >
                <ul>
                    <li>Id:{product.id}</li>
                  <li>{fix?<>Name:{product.name}</>:<input type="text" name="name" placeholder='name' value={product.name} onChange={(e) =>{ setProduct(prevState => ({...prevState,
                      name:e.target.value}))}} />}</li>
                    <li>{fix?<>Price:{product.price}</>:<input type="text" name="price" placeholder='price' value={product.price} onChange={(e) =>{ setProduct(prevState => ({...prevState,
                        price:e.target.value}))}}/>}</li>
                    <li>{fix?<>Description:{product.description}</>:<input type="text" name="description" placeholder='description' value={product.description} onChange={(e) =>{ setProduct(prevState => ({...prevState,
                        description:e.target.value}))}}/>}</li>
                    <li>{fix?<>Stock:{product.stock}</>:<input type="text" name="stock" placeholder='stock' value={product.stock} onChange={(e) =>{ setProduct(prevState => ({...prevState,
                        stock:e.target.value}))}}/>}</li>
                    <li>
                        {fix?<span className="btn btn-info btn-lg glyphicon glyphicon-pencil" onClick={() => {
                            setFix(!fix)
                        }}></span>:<><button  className="btn btn-primary" onClick={handleFix}>Confirm</button><button className="btn btn-danger" onClick={() => {
                            setFix(!fix)}}>Cancel</button></>}
                    </li>
                    <li>
                        <span className="btn btn-danger" onClick={deleteItem}>Delete</span>
                    </li>
                </ul>
            </form>


        </>
    )

}

export default Product