import { getProduct, getProducts } from "@/services/products.service";

const mutations = {
    setProduct(state, product){
        state.product = product
    },
    setProducts(state, products){
        state.products = products
    },
    setProductError(state, error){
        state.productError = error
    }
}

const actions = {
    async fetchProduct({ commit }, id){
        try {
            const product = await getProduct(id)
            commit('setProduct', product)
        } catch (error) {
            commit('setProductError', error)
        }
    },
    async fetchProducts({ commit }){
        try {
            const products = await getProducts()
            commit('setProducts', products)
        } catch (error) {
            commit('setProductError', error)
        }
    },
}

const getters = {
    product: ({ product }) => product,
    products: ({ products }) => products,
    productError: ({ productError }) => productError
}


const state = () => ({
    product: {},
    products: [],
    productError: null
});

export default {
    mutations,
    getters,
    actions,
    state
}