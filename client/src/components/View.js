import React, { useState, useEffect } from 'react';
import axios from 'axios';

const View = (props) => {
    const [product, setProduct] = useState({})

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products/" + props.id)
        .then((res) => setProduct(res.data))
        .catch((err) => console.log(err))
    },[]);

    return(
        <div className='App'>
            <h1>Title: {product.title}</h1>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
        </div>
    )
}

export default View;