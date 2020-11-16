import * as CONF from '../configs';
import axios from 'axios';

export const Login = (payload) => {
    return async dispatch => {
        await axios.post('https://reqres.in/api/login', payload )
            .then(resp => {
                if (resp.data){
                    const data = resp.data.token
                    if (data){
                        dispatch({ type: CONF.LOGIN_SUCCESS, data})
                        const message = 'Login Berhasil'
                        dispatch({ type: CONF.ALERT_MESSAGE_SUCCESS, message})
                    }
                }
            })
            .catch(error => {
                console.log(error)
                const message = 'Login Gagal'
                dispatch({ type: CONF.ALERT_HTTP, message })
            })
    }
}

export const Register = (payload) => {
    return async dispatch => {
        await axios.post('https://reqres.in/api/register', payload )
            .then(resp => {
                const data = resp.data;
                const message = 'Register Berhasil'
                dispatch({ type: CONF.ALERT_MESSAGE_SUCCESS, message })
            })
            .catch(error => {
                const message = 'Register Gagal'
                dispatch({ type: CONF.ALERT_HTTP, message })
            })
    }
}

export const Logout = () => {
    return async dispatch => {
        dispatch({ type: CONF.LOGOUT })
    }
}