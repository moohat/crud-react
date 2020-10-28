import React from 'react';
import { GET_USERS_LIST } from '../action/userAction';



let initialState = {
    data: false,
    errorUserList: false,
    title: 'CRUD REACT',

}

const users = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS_LIST:
            return {
                ...state,
                data: action.payload.data,
                errorUsersList: action.payload.errorMessage
            };
        
        


        default:
            return state;
    }

}

export default users
