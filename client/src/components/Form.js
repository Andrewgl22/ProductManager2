import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';
import { navigate } from '@reach/router'

const Form = (props) => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState()
    const [description, setDescription] = useState("")

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description
        })
            .then((res)=>{
                console.log(res.data.title);
                props.setProducts(props.products);
                navigate('/products');
            })
            .catch((err)=>console.log(err))
    }

    return(
        <div className='App'>
            <h1>Product Manager</h1>
            <form onSubmit={onSubmitHandler}>
                <label>Title</label>
                <input type='text' onChange={(e)=>setTitle(e.target.value)}/><br/>
                <label>Price</label>
                <input type='int' onChange={(e)=>setPrice(e.target.value)} /><br/>
                <label>Description</label>
                <input type='text' onChange={(e)=>setDescription(e.target.value)} /><br/>
                <input type='submit'/>
            </form>
        </div>
    )
}

export default Form;