import React from 'react';
import { Typography } from "@material-ui/core";
import Item from './Item'

const Product = (props) => {

    const { products, onAdd } = props;

    return (
        <div>
            <Typography variant="h5" style={{marginBottom: 20}}>Products</Typography>
            <div className="products row">
                {products.map(product => 
                    <Item key={product.id} product={product} onAdd={onAdd}/>
                )}
            </div>
        </div>
    )
}

export default Product
