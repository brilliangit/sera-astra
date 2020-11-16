import * as CONFIG from '../../configs/constant';

const InitialState = {
    isLogin: false,
    token:''
};
const LoginReducer = (state = InitialState, action) => {
    switch (action.type) {
        case CONFIG.LOGIN_SUCCESS:
            return { isLogin: true, token: action.data}
        case CONFIG.LOGIN_FAILURE:
            return { isLogin: false, token: ''}
        case CONFIG.LOGOUT:
            return {}
        default:
            return state
    }
}

export default LoginReducer;