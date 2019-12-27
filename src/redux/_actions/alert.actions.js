//alerts if well done, can send snackbars to front
//plans in the future with that e-e 

//importing functions and variables redux

import { alertConstants } from '../_constants';

//exporting functions of logging and management of development logs

export const alertActions = {
    success,
    error,
    clear
};

function success(message) {
    return { type: alertConstants.SUCCESS, message };
}

function error(message) {
    return { type: alertConstants.ERROR, message };
}

function clear() {
    return { type: alertConstants.CLEAR };
}