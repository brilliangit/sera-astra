import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 0,
        minHeight: '100vh',
        backgroundColor: '#FFFFFF'
    }
}));

const Wrapper = ({ target, children }) => {
    const classes = useStyles();
    return (
        <Container maxWidth={target} className={classes.root}>
            {children}
        </Container>
    )
}

export default Wrapper;