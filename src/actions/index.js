import types from './types';
import axios from 'axios';

export const getMovieQuote = () => async dispatch => {
    const axiosConfig = {
        headers: {
            authorization: localStorage.getItem('token')
        }
    } 
    const resp = await axios.get('http://api.reactprototypes.com', axiosConfig);
    

    dispatch({
        type: types.GET_MOVIE_QUOTE,
        quote: resp.data.message
    })
}

export const signIn = userValues => async dispatch => {

    try{
        const resp = await axios.post('http://api.reactprototypes.com/signin', userValues);

        localStorage.setItem('token', resp.data.token);
    
        dispatch({
            type: types.SIGN_IN
        });
    } catch(err){
        dispatch({
            type: types.SIGN_IN_ERROR,
            error: 'Invalid email and/or password'
        });
    }
}

// export function signIn(userInfo){
//     return async function (dispatch){

//     }

// }

export function signOut(){
    localStorage.removeItem('token');
    return {
        type: types.SIGN_OUT
    }
}


export function signUp(userInfo){
    return async function(dispatch){
        const resp = await axios.post('http://api.reactprototypes.com/signup', userInfo)

        localStorage.setItem('token', resp.data.token);

        dispatch({
            type: types.SIGN_UP
        })

        // dispatch({
        //     type: types.SIGN_UP
        // })
    }
}