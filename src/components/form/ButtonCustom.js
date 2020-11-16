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

const ButtonCustom = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Button {...props}>
                {props.text}
            </Button>
        </div>
    )
}

export default ButtonCustom;