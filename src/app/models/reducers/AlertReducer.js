import * as CONFIG from '../../configs';
let initialState = {
    type: 'reset',
    status: false,
    message: ''
}
const AlertReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONFIG.ALERT_MESSAGE_SUCCESS:
            return { ...state, type: 'success', status: true, message: action.message };
        case CONFIG.ALERT_MESSAGE_FAILED:
            return { ...state, type: 'error', status: true, message: action.message };
        case CONFIG.ALERT_MESSAGE_WARNING:
            return { type: 'warning', status: true, message: action.message };
        case CONFIG.ALERT_MESSAGE_INFO:
            return { type: 'info', status: true, message: action.message };
        case CONFIG.ALERT_HTTP:
            return { type: 'error', status: true, message: action.message };
        case CONFIG.ALERT_RESET:
            return { ...state, type: 'reset', status: false, message: '' };
        default:
            return state
    }
}

export default AlertReducer;