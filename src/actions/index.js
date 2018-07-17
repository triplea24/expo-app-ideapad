
export const AUTH_INPUT_CHANGE = 'AUTH_INPUT_CHANGE';

export function authInputChange({field,value}){
    return {
        type: AUTH_INPUT_CHANGE,
        payload: {field,value},
    };
}