
export const AUTH_INPUT_CHANGE = 'AUTH_INPUT_CHANGE';

export function authInputChange(obj){
    return {
        type: AUTH_INPUT_CHANGE,
        payload: obj,
    };
}