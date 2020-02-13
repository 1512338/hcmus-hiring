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
    register({commit}, user){
        // eslint-disable-next-line no-console
        console.log("hello",user)
        axios.post("http://127.0.0.1:8000/api/accounts/users/", user)
        .then(response => {
            // eslint-disable-next-line no-console
            console.log(response)
        })
        .catch(e=>{
            // eslint-disable-next-line no-console
            console.log(e)
        })
        commit("STORE_USER_INFO")
    }
};

export const mutationsAuth = {
    STORE_USER_INFO(state, user){
        state.user = user;
    }
};