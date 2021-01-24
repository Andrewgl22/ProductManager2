import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router'

const View = (props) => {
    const [product, setProduct] = useState({})

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products/" + props.id)
        .then((res) => setProduct(res.data))
        .catch((err) => console.log(err))
    },[]);

    const deleteHandler = (prodID) => {
        axios.delete("http://localhost:8000/api/products/" + props.id)
        .then((res)=>{
            console.log(res.data.title)
            navigate('/products')
        })
        
        .catch((err)=>console.log(err))
    }

    return(
        <div className='App'>
            <h1>{product.title}</h1>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <button onClick={deleteHandler}>Delete Product</button><br></br>
            <Link to='/products'>Back to Main Page</Link>
        </div>

    )
}

export default View;