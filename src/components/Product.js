import React from 'react';
import { Typography } from "@material-ui/core";
import Item from './Item';
import useStore from '../store';

const Product = (props) => {

    const { products, onAdd } = props;

    const title = useStore(state => state.title)

    return (
        <div>
            {title.map(t => (
                <Typography variant="h5" style={{marginBottom: 20}}>{t}</Typography>
            ))}
            <div className="products row">
                {products.map(product => 
                    <Item key={product.id} product={product} onAdd={onAdd}/>
                )}
            </div>
        </div>
    )
}

export default Product
