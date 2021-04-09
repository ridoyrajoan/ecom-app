import { Typography, Button } from "@material-ui/core";
import React from 'react';


import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';



const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #022c43',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));



const Cart = (props) => {
    const {cartItems, onAdd, onRemove} = props;

    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    const taxPrice = itemsPrice * 0.15;
    const shippingPrice = itemsPrice > 2000 ? 0 : 20;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;


    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };



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
                                <Button variant="contained" color="primary" size="small" onClick={() => onAdd(product)} className="addItem"><span className="material-icons">+</span></Button>

                                <Button variant="contained" color="secondary" size="small" onClick={() => onRemove(product)} className="removeItem"><span className="material-icons">-</span></Button>
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
                                <Button variant="contained" color="secondary" className="mt-5" onClick={handleOpen}>Checkout</Button>   

                                <Modal
                                    aria-labelledby="transition-modal-title"
                                    aria-describedby="transition-modal-description"
                                    className={classes.modal}
                                    open={open}
                                    onClose={handleClose}
                                    closeAfterTransition
                                    BackdropComponent={Backdrop}
                                    BackdropProps={{
                                    timeout: 500,
                                    }}
                                >
                                    
                                    <Fade in={open}>
                                    <div className={[classes.paper, 'checkoutForm'].join(' ')}>
                                        <h2 id="transition-modal-title">Checkout Form</h2>
                                        <form className={classes.root} noValidate autoComplete="off">
                                            <TextField id="standard-basic" label="Your Name" />
                                            <TextField id="standard-basic" label="Phone Number" />
                                            <div className={classes.root}>
                                                <TextField id="standard-basic" label="Email" />
                                            </div>
                                            <div className={classes.root}>
                                            <TextField id="standard-multiline-static" label="Address" multiline rows={4} />
                                            </div>
                                            <Button variant="contained" color="secondary">Place Order</Button>   
                                        </form>
                                    </div>
                                    </Fade>
                                </Modal>                             
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Cart
