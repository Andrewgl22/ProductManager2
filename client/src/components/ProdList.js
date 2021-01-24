import React, { useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import {Link} from '@reach/router'; 

const ProdList = (props) => {

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
        .then(res=>props.setProducts(res.data))
        .catch(err=>console.log(err))
    }, [props.products]);

    const deleteHandler = (prodID) => {
        axios.delete("http://localhost:8000/api/products/" + prodID)
        .then((delObj)=>{
            console.log(delObj)
            props.setProducts(props.products.filter((product)=>product._id !== prodID))
        })
        
        .catch((err)=>console.log(err))
    }

    return(
        <div className='App'>
            <h1>All Products:</h1>
            {
                props.products.map((product,index) => (
                    <p>
                        <Link to={`/products/${product._id}`}>{product.title}</Link><br></br>
                        <Link to={`/products/${product._id}/edit`}>Edit Item</Link>
                        <button onClick={(e)=>deleteHandler(product._id)}>Delete Item</button>
                        
                    </p>
                ))
            }
        </div>
        
        )
}

export default ProdList;