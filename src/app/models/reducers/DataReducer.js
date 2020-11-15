import * as CONFIG from '../../configs/constant';

const InitialState = {};
const DataReducer = (state = InitialState, action) => {
    switch (action.type) {
        case CONFIG.GET_DATA_PERSON:
            return { 
                ...state, 
                person: action.data.data,
                pagingPerson:{
                    page: action.data.page,
                    perPage: action.data.per_page,
                    total: action.data.total,
                    totalPages: action.data.total_pages,
                }
             }
        default:
            return state
    }
}

export default DataReducer;