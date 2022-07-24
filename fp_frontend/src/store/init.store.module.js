
export const init = {
  namespaced: true,
  
  state(){
    return {
        initConstant:{}
    }
  },
  actions: {
    
  },
  mutations: {
    setInit(state,payload){
        state.initConstant = payload
    }
  },
};
