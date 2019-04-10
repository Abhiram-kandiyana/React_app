
const initState = {
    AuthError: null,
    LogOutError:null

}
const AuthReducer = (state=initState,action) => {
    switch(action.type) {
       
        case 'LOGIN_ERROR':
        console.log('LOGIN ERROR')
        return {
            ...state,
            AuthError:'LOGIN FAILED'
        }
        case 'LOGIN_SUCCESS':
        console.log("LOGIN SUCCESS")
        return {
            ...state,
            AuthError:null
        }
        case 'SIGNOUT_SUCCESS' :
        console.log('logout success')
        return {
            ...state,
            LogOutError: null
        }
        case 'LOGOUT_ERROR':
        console.log('LOGIN ERROR')
        return {
            ...state,
            LogOutError:'LOGOUT FAILED'
        }
        case 'SIGNUP_ERROR':
        console.log('signup failure')
        return {
            ...state,
            AuthError:action.err.message
        }
        case 'SIGNUP_SUCCESS':
        console.log('signup success')
        return {
            ...state,
            AuthError:null
        }
        default:
        return state;
    }
}

export default AuthReducer;