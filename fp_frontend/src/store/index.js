import { createStore } from 'vuex'
import {auth} from './auth.store.module'
import {init} from './init.store.module'
export default createStore({
  modules:{
    auth,
    init,
  }
})
