import React, { Component } from 'react';
import { Wrapper, Content, InputText, ButtonCustom, SnackAlert, SocialButton } from 'components';
import { Login, resetAlert } from '../../app/controllers';
import Divider from '@material-ui/core/Divider';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    componentDidMount() {

    }

    submit() {
        const payload = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.login(payload)
    }

    handleSocialLogin(user) {
        const users = user._profile;
        this.props.login({
            email: users.email,
            password: users.id
        })
    }

    handleSocialLoginFailure() {

    }

    render() {
        const { AlertReducer } = this.props
        return (
            <Wrapper target="xs">
                <div className="login-page" style={{display:'flex', flexDirection:'column'}}>
                    <div>
                        <h1 style={{textAlign:'center'}}>Login</h1>
                        <Content frame={'8px 16px'} >
                            <InputText
                                placeholder="Email"
                                type="email"
                                variant="outlined"
                                value={this.state.email}
                                onChange={(e) => this.setState({ email: e.target.value })}
                            />
                            <InputText
                                placeholder="Password"
                                type="password"
                                variant="outlined"
                                value={this.state.password}
                                onChange={(e) => this.setState({ password: e.target.value })}
                            />
                            <ButtonCustom type="button" variant="contained" color="primary" text="Login" onClick={this.submit.bind(this)} />
                            <ButtonCustom type="button" color="primary" text="Register" onClick={() => this.props.history.push('/auth/register')} />
                            <Divider />
                            <p style={{ textAlign: 'center' }}>-- Atau --</p>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <SocialButton
                                    provider='google'
                                    appId='294632984492-tho0qpd4m3u1bbru9su7f99r61bd9mn2.apps.googleusercontent.com'
                                    onLoginSuccess={this.handleSocialLogin.bind(this)}
                                    onLoginFailure={this.handleSocialLoginFailure.bind(this)}
                                >
                                    Login with Google
                        </SocialButton>
                            </div>
                        </Content>
                    </div>
                    <SnackAlert open={AlertReducer.status} message={AlertReducer.message} severity={AlertReducer.type} callback={() => this.props.reset()} />
                </div>
            </Wrapper>
        );
    }
}

const mapStateToProps = (state) => {
    return state
}
const mapDispatchToProps = (dispatch) => {
    return {
        login: (payload) => dispatch(Login(payload)),
        reset: () => dispatch(resetAlert())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginScreen));
