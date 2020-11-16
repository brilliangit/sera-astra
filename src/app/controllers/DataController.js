import * as CONF from '../configs';
import axios from 'axios';

export const getDataPerson = (offset) => {
    return async dispatch => {
        const payload = {
            page: offset
        }
        await axios.get('https://reqres.in/api/users', { params: payload })
            .then(resp => {
                const data = resp.data
                dispatch({ type: CONF.GET_DATA_PERSON, data })
            })
            .catch(error => console.log(err))
    }
}

export const resetAlert = () => {
    return async dispatch => {
        dispatch({ type: CONF.ALERT_RESET})
    }
}
