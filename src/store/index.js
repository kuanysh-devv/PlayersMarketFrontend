import { createStore } from 'vuex'
import product from './product'
import category from './category'
import cart from './cart'


export default createStore({
  modules: { 
    product,
    category,
    cart
  }
})
