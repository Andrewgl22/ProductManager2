import React from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';

const DeleteButton = (props) => {

    const deleteButton = (e) => {
        axios.delete("http://localhost:8000/api/products/" + props.prodID)
        .then((delObj)=>{
            console.log(delObj)
            navigate('/products')
        })
        .catch((err)=>console.log(err))
        }

    return(<button onClick={deleteButton}>Delete Item</button>)
    }

export default DeleteButton;