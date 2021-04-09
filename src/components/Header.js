import React from 'react';
import { Button, Typography } from "@material-ui/core";
import useStore from '../store';

const Header = (props) => {
    const logo = useStore(state => state.logo)
    return (
        <header className="header block">
            {logo.map(l => (
                <Typography style={{ display: "inlineBlock" }} variant="h5">{l}</Typography>
            ))}
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
