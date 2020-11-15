import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            marginBottom: 10,
            width: '100%',
        },
    },
}));

const InputText = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <TextField {...props} />
        </div>
    )
}

export default InputText;