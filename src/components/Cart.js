import { Typography, Button } from "@material-ui/core";
import React from 'react';

const Cart = (props) => {
    const {cartItems, onAdd, onRemove} = props;

    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    const taxPrice = itemsPrice * 0.15;
    const shippingPrice = itemsPrice > 2000 ? 0 : 20;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;

    return (
        <div className="block col-1">
            <Typography variant="h5" style={{marginBottom: 20}}>Cart Item</Typography>
            <div className="cart">
                <div>
                    {cartItems.length === 0 && <div>Cart is empty</div>}
                    {cartItems.map((product) =>(
                        <div key={product.id} className="row mb-5">
                            <div className="col-2">{product.title}</div>
                            <div className="col-2">
                                <Button variant="contained" color="primary" size="small" onClick={() => onAdd(product)} className="addItem">+</Button>
                                <Button variant="contained" color="secondary" size="small" onClick={() => onRemove(product)} className="removeItem">-</Button>
                            </div>
                            <div className="col-2 text-right">
                                {product.qty} X ${product.price.toFixed(2)}
                            </div>
                        </div>
                    ))}
                    {cartItems.length !==0 && (
                        <>
                            <hr></hr>
                            <div className="row mb-5">
                                <div className="col-2">
                                    Item Price
                                </div>
                                <div className="col-1 text-right">
                                    ${itemsPrice.toFixed(2)}
                                </div>
                            </div>
                            <div className="row mb-5">
                                <div className="col-2">
                                    Tax Price
                                </div>
                                <div className="col-1 text-right">
                                    ${taxPrice.toFixed(2)}
                                </div>
                            </div>
                            <div className="row mb-5">
                                <div className="col-2">
                                    Shipping Price
                                </div>
                                <div className="col-1 text-right">
                                    ${shippingPrice.toFixed(2)}
                                </div>
                            </div>
                            <div className="row mb-5">
                                <div className="col-2">
                                    <strong>Total Price</strong>
                                </div>
                                <div className="col-1 text-right">
                                    <strong>${totalPrice.toFixed(2)}</strong>
                                </div>
                            </div>
                            <hr></hr>
                            <div className="row">
                            <Button variant="contained" color="secondary" onClick={() => alert('Checkout From Will Come Later')}>Checkout</Button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Cart
