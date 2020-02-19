import axios from 'axios';

export const strict = false;

const initialState = () => ({
    user: {},
  });
export const stateAuth = initialState();

export const getters = {
    getHello: (state) => {
        return state.hello
    },
};

export const actionsAuth = {
    login({commit}, userAuth){
        return new Promise((resolve, reject) => {
            axios.post("http://127.0.0.1:8000/api/accounts/login", userAuth)
            .then(response => {
                if(response.status == 200){
                    commit("STORE_USER_INFO", response.data)
                    window.localStorage.setItem('userInfo', JSON.stringify(response.data));
                    axios.defaults.headers.common['Authorization'] = 'Token ' + response.data.token;
                }
                resolve(response);
            }, error => {
                reject(error);
                commit("")
            })
        })
    },
    logout({commit}){
        axios.defaults.headers.common['Authorization'] = '';
        window.localStorage.removeItem('userInfo');
        commit("REMOVE_USER_INFO")
    },
    register({commit}, user){
        return new Promise((resolve, reject) => {
            axios.post("http://127.0.0.1:8000/api/accounts/users/", user)
            .then(response => {
                resolve(response);
            }, error => {
                reject(error);
                commit("")
            })
        })
    }
};

export const mutationsAuth = {
    STORE_USER_INFO(state, user){
        state.user = user
    },
    REMOVE_USER_INFO(state){
        state.user = {}
    }
};