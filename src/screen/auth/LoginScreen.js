import React, { Component } from 'react';
import { Wrapper, Content, InputText, ButtonCustom } from 'components';
import Divider from '@material-ui/core/Divider';

class LoginScreen extends Component {
    constructor(props) {
        super(props);
    }

    googleLogin() {

        console.log('fgfdgdfg')
    }

    googleFailure() {
        console.log('jancuukkk')
    }

    render() {
        return (
            <Wrapper target="xs">
                <div className="login-page">
                    <Content frame={'8px 16px'} >
                        <InputText
                            placeholder="Email"
                            variant="outlined"
                        />
                        <InputText
                            placeholder="Password"
                            type="password"
                            variant="outlined"
                        />
                        <ButtonCustom variant="contained" color="primary" text="Login" />
                        <ButtonCustom color="primary" text="Register" />
                        <Divider />
                        <p style={{textAlign:'center'}}>Atau login dengan</p>
                    </Content>
                </div>
            </Wrapper>
        );
    }
}

export default LoginScreen;
