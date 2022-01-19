export const FETCH_TOKEN = 'FETCH_TOKEN';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const EDIT_NAME = 'EDIT_NAME';

export const login = (user) => {
    return {
        type: LOGIN,
        user: user,
        token: user.token,
    };
};

export const fetchToken = (token, user) => {
    return {
        type: FETCH_TOKEN,
        token,
        remember: token.body.remember,
    };
};

export const logout = () => {
    return {
        type: LOGOUT,
        user: '',
        token: '',
    };
};

export const editName = (user) => {
    return {
        type: EDIT_NAME,
        user: user.body,
    };
};
