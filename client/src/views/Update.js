import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
import {Link, navigate} from '@reach/router'
import Form from '../components/Form'

const Update = (props) => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${props.id}`)
        .then(res=> {
            console.log(res.data)
            setTitle(res.data.title);
            setPrice(res.data.price);
            setDescription(res.data.description);
        })
        .catch(err=>console.log(err))
    }, []);

    const updateProduct = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/${props.id}`, {
            title,
            price,
            description
            })
            .then((res)=> {
                navigate('/products')
            })
            .catch(err=>console.log(err))
    }

    return(
        <div className='App'>
            <h1>Update Product</h1>
            <Form onSubmitHandler={updateProduct} title={title} price={price} description={description} setTitle={setTitle} setPrice={setPrice} setDescription={setDescription}/>
            <Link to='/products'>Back to Main Page</Link>
        </div>
    )
}

export default Update;