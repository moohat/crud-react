import React from 'react';
import { GET_USERS_LIST, GET_USER_DETAIL } from '../action/userAction';



let initialState = {
    data: false,
    errorUserList: false,
    getUserDetail: false,
    errorUserDetail:false,
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
        case GET_USER_DETAIL:
            return {
                ...state,
                getUserDetail: action.payload.data,
                errorUserDetail: action.payload.errorMessage
            };
        


        default:
            return state;
    }

}

export default users
