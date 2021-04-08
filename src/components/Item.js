import React from 'react';
import {  Button } from "@material-ui/core";

const Item = (props) => {
    const { product, onAdd } = props;
    return (
        <div className="col-1 single-product">
            <img className="thumb-image" src={"https://express-ecommerce-npevl.ondigitalocean.app/" + product.image} alt={product.title}/>
            <div className="item-title">{product.title}</div>
            <div className="price">${product.price}</div>
            <Button onClick={() => onAdd(product)} variant="contained" color="primary">Add to Cart</Button>
        </div>
    )
}

export default Item
