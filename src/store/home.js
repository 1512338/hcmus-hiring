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
export const actions = {
  setHello({ commit }, value) {
    commit("STORE_HELLO", value);
  },
//   fetchAllAssetTypes({ commit }) {
//     return this.$axios.get("/assets/api/1/assets/assettypes")
//       .catch(error => console.log(error))
//       .then(response => {
//         const assetTypes = response.data;
//         commit("SET_ASSET_TYPES", assetTypes);
//       });
//   }
};

// Global Mutations
export const mutations = {
  STORE_HELLO(state, value){
    state.hello = value;
  }
};