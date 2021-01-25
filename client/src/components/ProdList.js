import React, { useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import {Link} from '@reach/router'; 
import DeleteButton from './DeleteButton'

const ProdList = (props) => {

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
        .then(res=>props.setProducts(res.data))
        .catch(err=>console.log(err))
    }, [props.products, <DeleteButton/>]);

    return(
        <div className='App'>
            <h1>All Products:</h1>
            {
                props.products.map((product,index) => (
                    <p>
                        <Link to={`/products/${product._id}`}>{product.title}</Link><br></br>
                        <Link to={`/products/${product._id}/edit`}>Edit Item</Link>
                        <DeleteButton prodID={product._id} products={props.products} setProducts={props.setProducts}/>
                        
                    </p>
                ))
            }
        </div>
        
        )
}

export default ProdList;