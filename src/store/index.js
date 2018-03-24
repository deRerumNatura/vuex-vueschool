import Vuex from 'vuex'
import Vue from 'vue'
import actions from './actions'
import cart from './modules/cart'
import products from './modules/products'


Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        cart,
        products
    },
    state: {

    },

    getters: {
        // =========================Products================================
        // avaibleProducts(state, getters) {
        //     return state.products.filter(product => product.inventory > 0)
        // },
        // ====================================================================
        // ----------------------CART----------------------------------------
        // cartProducts (state) {
        //     return state.cart.map(cartItem => {
        //         const product = state.products.find(product => product.id === cartItem.id)
        //         return {
        //             title: product.title,
        //             price: product.price,
        //             quantity: cartItem.quantity
        //         }
        //     })
        // },
        //
        // cartTotal (state, getters) {
        //
        //     let total = 0;
        //     getters.cartProducts.forEach(product => {
        //         total += product.price * product.quantity;
        //     });
        //
        //     return total;
        // },
        // ------------------------------CART
        // =======Prroduct==========================================

        // productsIsInStock () {
        //     return (product) => {
        //         return product.inventory > 0
        //     }
        // }
    },

    // actions,

    mutations: {
        // setProducts(state, products) {
        //     // update products
        //     state.products = products
        // },

// ----------------------CART----------------------------------------
//         pushProductToCart(state, productId) {
//             state.cart.push({
//                 id: productId,
//                 quantity: 1
//             })
//         },

        // console.log(cartItem);
        // incrementItemQuantity(state, cartItem) {
        //     cartItem.quantity++
        // },
// ---------------------------------------------
//         ============================================
//         decrementProductInventory(state, product) {
//             product.inventory--
//         },
        // =============================================
// ----------------------CART----------------------------------------
//         setCheckoutStatus (state, status) {
//             state.checkoutStatus = status
//         },
//
//         emptyCart (state) {
//             state.cart = []
//         }
// ---------------------------------------------
    }
})