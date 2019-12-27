const TOKEN_KEY = 'PROUD2BFIVESYS';

export const login = () => {
    localStorage.setItem(TOKEN_KEY, 'TestLogin');
}

export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
}

export const isLogin = () => {
    if (localStorage.getItem('User')) {
        return true;
    }

    return false;
}