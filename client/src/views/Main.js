import React, {useState} from 'react';
import ProdList from '../components/ProdList';
import Form from '../components/Form';

const Main = () => {
    const [products, setProducts] = useState([])

    return(
        <div>
            <Form products={products} setProducts={setProducts} />
            <ProdList products={products} setProducts={setProducts}  />
        </div>
    )
}

export default Main;
