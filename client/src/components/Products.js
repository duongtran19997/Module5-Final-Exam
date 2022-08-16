import {Link} from "react-router-dom";
import {useState} from "react";

function Products({props}){
    return(
        <><tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col"> Feature</th>
        </tr>
            {props?.map((product,index)=>(
                <tr key={index} >
                        <td scope="row">{product.id}</td>
                    <td scope="row">   <Link  to={`/product/${product.id}`}>
                        {product.name}
                    </Link></td>
                    <td scope="row">  <Link  to={`/product/${product.id}`} class="btn btn-info btn-lg">
                       <span class="glyphicon glyphicon-pencil"></span>
                    </Link> </td>
                </tr>
            ))}
        </>
    )
}
export default Products