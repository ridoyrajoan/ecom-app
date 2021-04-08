import React from 'react';
import { Button, Typography } from "@material-ui/core";

const Header = (props) => {
    return (
        <header className="header block">
            <Typography style={{ display: "inlineBlock" }} variant="h5">eCommerce App</Typography>
            <Button variant="contained" color="secondary">Cart {' '}
                {props.countCartItems ? (
                    <span>({props.countCartItems})</span>
                ) : (
                    ' '
                )}
            </Button>
        </header>
    )
}

export default Header
