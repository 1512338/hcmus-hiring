/* index.js */

export const strict = false;

// Global State object
const initialState = () => ({
  lang: "en",
  hello:"hello world !!!"
});
export const stateHome = initialState();

// Global Getter functions
export const getters = {
  getHello: (state) => {
    return state.hello
  },
};
  
// Global Actions
export const actionsHome = {
  setHello({ commit }, value) {
    commit("STORE_HELLO", value);
  },
  setLanguage({ commit }, language) {
    commit("SET_LANGUAGE", language);
  },
};

// Global Mutations
export const mutationsHome = {
  STORE_HELLO(state, value){
    state.hello = value;
  },
  SET_LANGUAGE(state, language) {
    state.lang = language;
  }
};