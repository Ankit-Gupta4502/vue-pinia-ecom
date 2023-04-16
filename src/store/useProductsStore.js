import { defineStore } from "pinia";
import { useStorage } from '@vueuse/core'
const useProductStore = defineStore("productStore", {
    state: () => {
        return {
            products: [],
            cartItems: useStorage("cartItems",[]),
            allProducts: [],
            loading: true
        }
    },
    getters: {
        getAllProductsQuantity: (state) => {
            return state.cartItems.reduce((acc, item) => acc += item.quantity, 0)
        },
        totalAmount: (state) => {
            return state.cartItems.reduce((acc, item) => acc += item.price * item.quantity, 0).toFixed(2)
        }
    },
    actions: {
        addCartItems(item) {
            this.cartItems.push(item)
        },
        async getData() {
            const response = await fetch("https://fakestoreapi.com/products")
            const data = await response.json()
            this.products = data
            this.allProducts = data
            this.loading = false
        },
        filterItems(name) {
            this.products = this.allProducts.filter((item) => item.title.toLowerCase().includes(name.toLowerCase()))
        },
        sortItems(sortBy) {
            this.products = this.products.sort((a, b) => sortBy === "low" ? a.price < b.price ? -1 : 1 : a.price > b.price ? -1 : 1)
        },
        removItem(id) {
            console.log("workinig");
            this.cartItems = [...this.cartItems].filter((item) => item.id !== id)
        },
        updateQuantity(id, type = "add") {
            this.cartItems = this.cartItems.map((item) => {
                if (item.id === id) {
                    return { ...item, quantity: type === "add" ? item.quantity + 1 : item.quantity - 1 }
                }
                return item
            })
        }
    }

})

export default useProductStore