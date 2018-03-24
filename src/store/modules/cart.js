import shop from '@/api/shop'

export default {
    namespaced: true,

    state: {
        item: [], // id, quantity
        checkoutStatus: null
    },

    getters: {
        cartProducts (state, getters, rootState, rootGetters) {
            return state.item.map(cartItem => {
                const product = rootState.products.items.find(product => product.id === cartItem.id);
                return {
                    title: product.title,
                    price: product.price,
                    quantity: cartItem.quantity
                }
            })
        },

        cartTotal (state, getters) {

            let total = 0;
            getters.cartProducts.forEach(product => {
                total += product.price * product.quantity;
            });

            return total;
        },
    },

    mutations: {

        pushProductToCart(state, productId) {
            state.item.push({
                id: productId,
                quantity: 1
            })
        },

        incrementItemQuantity(state, cartItem) {
            cartItem.quantity++
        },

        setCheckoutStatus (state, status) {
            state.checkoutStatus = status
        },

        emptyCart (state) {
            state.item = []
        }
    },

    actions: {
        addProductToCart({state, getters, commit, rootState, rootGetters}, product) {
            if (rootGetters['products/productsIsInStock'](product)) {
                // find card item
                const cartItem = state.item.find(item => item.id === product.id);
                if (!cartItem) {
                    // pushProductToCart
                    // console.log(cartItem);
                    commit('pushProductToCart', product.id)
                }
                else {
                    // incrementItemQuantity
                    // console.log(cartItem);
                    commit('incrementItemQuantity', cartItem)
                }

                commit('products/decrementProductInventory', product, {root:true})
            }
        },

        checkout({state, commit}) {
            shop.buyProducts(
                state.item,
                () => {
                    commit('emptyCart');
                    commit('setCheckoutStatus', 'success');
                },
                () => {
                    commit('setCheckoutStatus', 'fail');
                }
            )
        }
    }
}