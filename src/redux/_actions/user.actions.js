//importing functions and variables redux

import { userConstants } from '../_constants';
import { userService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

//exporting functions of logging and management of development logs

export const userActions = {
    login,
    logout,
};

//login funcion

function login(username, password) {
    return dispatch => {
        //send console.log of requested login with x username
        dispatch(request({ username }));
        localStorage.setItem('User', username)
        history.push('/home')
        //calling login service
        // userService.login(username, password)
        //     .then(
        //         user => { 
        //             //sending user to main page protected route
        //             history.push('/home');

        //             //send console.log complete login with x username
        //             dispatch(success(user));
        //         },
        //         error => {
        //              //send console.log error
        //             dispatch(failure(error.toString()));
        //              //send and alert of login
        //             dispatch(alertActions.error(error.toString()));
        //         }
        //     );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

//logout function

function logout() {
    //calling logout service
    userService.logout();
    return { type: userConstants.LOGOUT };
}
