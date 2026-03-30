import React from 'react';
import Check from '../assets/Check.png'
import Card from './Card';

const Product = ({ item , buyNow , setBuyNow }) => {
    // const [btnText , setBtnText] = useState('false')
   
    
    return (
        <div>
            <Card item={item} buyNow={buyNow} setBuyNow={setBuyNow}></Card>
        </div>
    );
};

export default Product;