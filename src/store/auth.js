import axios from 'axios';

export const strict = false;

const initialState = () => ({
    user: {}
  });
export const stateAuth = initialState();

export const getters = {
    getHello: (state) => {
        return state.hello
    },
};

export const actionsAuth = {
    login({commit}, userAuth){
        axios.post("http://127.0.0.1:8000/api/accounts/login", userAuth)
        .then(response => {
            commit("STORE_USER_INFO", response.data)
            window.localStorage.setItem('userInfo', JSON.stringify(response.data));
            axios.defaults.headers.common['Authorization'] = 'Token ' + response.data.token;
        })
        .catch(e=>{
            // eslint-disable-next-line no-console
            console.log(e)
        })
    },
    logout(){
        axios.defaults.headers.common['Authorization'] = '';
        window.localStorage.removeItem('userInfo');
    },
    register(user){
        axios.post("http://127.0.0.1:8000/api/accounts/users/", user)
        .then(response => {
            return response
        })
        .catch(e=>{
            // eslint-disable-next-line no-console
            console.log(e)
        })
    }
};

export const mutationsAuth = {
    STORE_USER_INFO(state, user){
        state.user = user;
    }
};