import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ loggingIn,component: Component, ...rest }) => {

    return (
        <Route {...rest} render={props => {
            if (loggingIn){
                return <Redirect to={{ pathname: '/dashboard'}} />
            }
            return <Component {...props} />
        }}
        />
    )
}
const mapStateToProps = (state) => {
    return {
        loggingIn: state.LoginReducer.isLogin
    }
}

export default connect(mapStateToProps)(PublicRoute);