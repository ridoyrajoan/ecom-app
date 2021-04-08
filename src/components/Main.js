import React from 'react';
import Product from './Product'

const Main = (props) => {
    const { products, onAdd } = props;
    return (
        <div className="block col-2">
            <div className="main pad-mid">
                <Product products={products} onAdd={onAdd}/>
            </div>
        </div>
    )
}

export default Main
