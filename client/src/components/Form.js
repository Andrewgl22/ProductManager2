import React from 'react';
import '../App.css';

const Form = (props) => {
    return(
        <div className='App'>
            <h1>Product Manager</h1>
            <form onSubmit={props.onSubmitHandler}>
                <label>Title</label>
                <input type='text' value={props.title} onChange={(e)=>props.setTitle(e.target.value)}/><br/>
                <label>Price</label>
                <input type='int' value={props.price} onChange={(e)=>props.setPrice(e.target.value)} /><br/>
                <label>Description</label>
                <input type='text' value={props.description} onChange={(e)=>props.setDescription(e.target.value)} /><br/>
                <input type='submit'/>
            </form>
        </div>
    )
}

export default Form;