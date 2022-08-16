import {useEffect, useState} from "react";
import axios from "axios";
import Products from "../components/Products";
import {useLocation} from "react-router-dom";
function Home(){
    const [products,setProducts] = useState([])
    const {search} = useLocation();
    // console.log(search)
    useEffect(()=>{
        async function fetchData() {
            const res = await axios.get('http://localhost:3001/products/'+search)
            setProducts(res.data)
        }
        fetchData()
    },[search])
    return(
        <>
            <h1>PRODUCTS</h1>
            <table className="table table-sm table-dark">
                <Products props={products}/>
            </table>
        </>
    )
}
export default Home