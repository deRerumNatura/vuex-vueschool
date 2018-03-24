<template>
    <div>
        <h1>Product List</h1>
        <h1 v-if="loading" >GOOD! </h1>
        <ul v-else>
            <li v-for="product in products">
                {{product.title}} - {{product.price | currency}} - {{product.inventory}}
                <button
                        :disabled="!productsIsInStock(product)"
                        @click="addProductToCart(product)"
                >Add to Cart</button>
            </li>
        </ul>
    </div>
</template>

<script>
    import {mapState, mapGetters, mapActions} from 'vuex'

    export default {
        data() {
            return {
                loading: false
            }
        },
        computed: {
            ...mapState({
                products: state => state.products.items
            }),

            ...mapGetters({
                productsIsInStock: 'products/productsIsInStock'
            })
        },
        // computed: { // = data +-
        //     products () {
        //         return this.$store.state.products
        //     },
        //
        //     productsIsInStock () {
        //         return this.$store.getters.productsIsInStock
        //     }
        // },

        methods: {
            ...mapActions({
                fetchProducts: 'products/fetchProducts',
                addProductToCart: 'cart/addProductToCart'
            }),

            // addProductToCart (product) {
            //     this.$store.dispatch('addProductToCart', product)
            // }
        },

        created () {
            this.loading = true;
            this.fetchProducts()
                .then(() => this.loading = false)
        }
    }
</script>

<style scoped>

</style>