const isAuthenticated = () => {
    return sessionStorage.getItem('username') !== null
}

const login = () => {
    sessionStorage.setItem('username', 'username')
    sessionStorage.setItem('jwtToken', 'XXXXXX')
}

const logout = () => {
    sessionStorage.clear()
}

export {
    isAuthenticated,
    login,
    logout
}