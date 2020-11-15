import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginBottom: 10,
            width:'100%'
        },
    },
}));

const ButtonCustom = ({ variant, color, text }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Button variant={variant} color={color}>
                {text}
            </Button>
        </div>
    )
}

export default ButtonCustom;