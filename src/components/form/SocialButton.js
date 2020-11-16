import React from 'react'
import SocialLogin from 'react-social-login';
import Button from '@material-ui/core/Button';

class SocialButton extends React.Component {
    render() {
        return (
            <Button variant="outlined" color="primary" onClick={this.props.triggerLogin} {...this.props}>
                {this.props.children}
            </Button>
        );
    }
}

export default SocialLogin(SocialButton);