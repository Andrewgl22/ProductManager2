import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from '@reach/router'
import DeleteButton from '../components/DeleteButton'

const View = (props) => {
    const [product, setProduct] = useState({})

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products/" + props.id)
        .then((res) => setProduct(res.data))
        .catch((err) => console.log(err))
    },[]);

    return(
        <div className='App'>
            <h1>{product.title}</h1>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <DeleteButton prodID={product._id} products={product} setProducts={setProduct}/><br></br>
            <Link to='/products'>Back to Main Page</Link>
        </div>

    )
}

export default View;