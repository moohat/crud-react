import axios from 'axios';

export const GET_USERS_LIST = "GET_USERS_LIST";
export const GET_USER_DETAIL = "GET_USER_DETAIL";

export const getUsersList = () => {
    return dispatch => {
        // Make a request for a user with a given ID
        axios.get('http://my-json-server.typicode.com/moohat/fakedb/data')
            .then( (response) => {
                // handle success
                const data = response.data
                dispatch({
                    type: GET_USERS_LIST,
                    payload: {
                        data,
                        errorMessage: false,
                    }
                })
            })
            .catch( (error) => {
                // handle error
                console.log(error);

                dispatch({
                    type: GET_USERS_LIST,
                    payload: {
                        data: false,
                        errorMessage: error.message,
                    }
                })
            });
            
    }


}

export const getUserDetail = (id) => {
    return dispatch => {
        // Make a request for a user with a given ID
        axios.get("http://my-json-server.typicode.com/moohat/fakedb/data/"+id)
            .then( (response) => {
                // handle success
                const data = response.data
                dispatch({
                    type: GET_USER_DETAIL,
                    payload: {
                        data,
                        errorMessage: false,
                    }
                })
            })
            .catch( (error) => {
                // handle error
                console.log(error);

                dispatch({
                    type: GET_USER_DETAIL,
                    payload: {
                        data: false,
                        errorMessage: error.message,
                    }
                })
            });
            
    }


}

export const deleteUserDetail = (id) => {
    return dispatch => {
       
                dispatch({
                    type: GET_USER_DETAIL,
                    payload: {
                        data: false,
                        errorMessage: false,
                    }
                })
            }
            
    


}