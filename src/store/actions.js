import shop from '@/api/shop'

export default {
        // fetchProducts({commit}) {
        //     return new Promise((resolve, reject) => {
        //
        //         shop.getProducts(products => {
        //             commit('setProducts', products);
        //             resolve()
        //         })
        //     })
        // },
// ----------------------CART----------------------------------------

        // addProductToCart({state, getters, commit}, product) {
        //     if (getters.productsIsInStock(product)) {
        //         // find card item
        //         const cartItem = state.cart.find(item => item.id === product.id);
        //         if (!cartItem) {
        //             // pushProductToCart
        //             // console.log(cartItem);
        //             commit('pushProductToCart', product.id)
        //         }
        //         else {
        //             // incrementItemQuantity
        //             // console.log(cartItem);
        //             commit('incrementItemQuantity', cartItem)
        //         }
        //
        //         commit('decrementProductInventory', product)
        //     }
        // },

        // checkout({state, commit}) {
        //     shop.buyProducts(
        //         state.cart,
        //         () => {
        //             commit('emptyCart');
        //             commit('setCheckoutStatus', 'success');
        //         },
        //         () => {
        //             commit('setCheckoutStatus', 'fail');
        //         }
        //     )
        // }
}