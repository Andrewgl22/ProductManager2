import React, {useState} from 'react';
import ProdList from '../components/ProdList';
import Form from '../components/Form';
import axios from 'axios';
import {navigate} from '@reach/router';

const Main = () => {
    const [products, setProducts] = useState([])
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
                setProducts(products);
                navigate('/products');
            })
            .catch((err)=>console.log(err))
    }

    return(
        <div>
            <Form products={products} onSubmitHandler={onSubmitHandler} setTitle={setTitle} setPrice={setPrice} setDescription={setDescription} />
            <ProdList products={products} setProducts={setProducts}  />
        </div>
    )
}

export default Main;
