import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import {Link} from '@reach/router'; 

const ProdList = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
        .then(res=>setProducts(res.data))
        .catch(err=>console.log(err))
    }, []);
    
    return(
        <div className='App'>
            <h1>All Products:</h1>
            {
                products.map((product,index) => (
                    <p>
                        <Link to={`/products/${product._id}`}>{product.title}</Link>
                    </p>
                ))
            }
        </div>
        
        )
}

export default ProdList;