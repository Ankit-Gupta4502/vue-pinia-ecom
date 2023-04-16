<script setup>
import { defineProps } from "vue"
import useProductStore from "../store/useProductsStore";
import { storeToRefs } from "pinia";
const store = useProductStore()
const { cartItems, } = storeToRefs(store)
const { addCartItems, removItem } = store
const props = defineProps({
    name: String,
    price: Number,
    desc: String,
    image: String,
    id: Number
})
</script>

<template>
    <div className="flex font-sans shadow-xl rounded-md" key={item.id}>
        <div className="flex-none w-48 relative">
            <img :src="image" alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        </div>
        <form className="flex-auto p-6">
            <div className="flex flex-wrap">
                <h1 className="flex-auto text-lg font-semibold text-slate-900">
                    {{ name }}
                </h1>
                <div className="text-lg font-semibold text-slate-500">
                    {{ price }} $
                </div>
            </div>
            <div className=" mt-4 mb-6 pb-6 border-b border-slate-200">
                <p className='text-sm leading-5 text-slate-700 max-w-[400px]'>
                    {{ desc }}
                </p>
            </div>
            <div class="flex space-x-3">

                <button className="h-10 disabled:opacity-50 px-6 font-semibold rounded-md bg-black text-white" type="button"
                    v-on:click="() => !cartItems.some((item) => item.id === id) && addCartItems({ id, title: name, price, image, description: desc, quantity: 1 })">
                    {{ cartItems.some((item) => item.id === id) ? "Already in Cart" : " Add To Cart" }}
                </button>

                <button v-if="cartItems.some((item) => item.id === id)"
                    className="h-10 disabled:opacity-50 px-6 font-semibold rounded-md text-black border border-black" type="button"
                    @click="() => removItem(id)">
                    Remove Item
                </button>
            </div>

        </form>
    </div>
</template>