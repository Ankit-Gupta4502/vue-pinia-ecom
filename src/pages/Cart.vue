<script setup >
import useProductStore from '../store/useProductsStore';
import { storeToRefs } from 'pinia';
const store = useProductStore()
const { cartItems } = storeToRefs(store)
const {  updateQuantity, removItem } = store

</script>
<template>
    <div class="py-10">
        <div class="container">
            <h2 class="text-2xl font-semibold"> Cart Items </h2>
            <div class="mt-5">
                <h2 class="text-2xl text-center" v-if="!cartItems.length">
                    Nothing to display
                </h2>
                <div v-else class=" items-start grid gap-6 grid-cols-[auto_300px]">
                    <div class="space-y-4">

                        <div class=" p-6 items-center space-x-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex "
                            :key="item.id" v-for="item in cartItems">
                            <img :src="item.image" class="object-cover  h-[10rem] rounded-full min-w-[10rem] " alt="">
                            <div>
                                <a href="#">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> {{
                                        item.title }} </h5>
                                </a>
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> {{ item.description }} </p>

                                <div class="flex space-x-4 items-center mb-3 ">
                                    <p class="text-black/60 "> {{ item.price }} $ </p>

                                    <div class="flex  rounded-md w-20  justify-between ">
                                        <span role="button" class="text-rose-600 font-bold text-lg"
                                            @click="() => item.quantity > 1 ? updateQuantity(item.id, 'remove') : removItem(item.id)">
                                            -
                                        </span>
                                        <span class="font-semibold text-blue-600 "> {{ item.quantity }} </span>
                                        <span class="text-emerald-600 font-bold text-lg" role="button"
                                            @click="()=> updateQuantity(item.id,'add')"> + </span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="shadow space-y-3 p-6">
                        <div class="flex items-center">
                            <span class="font-semibold text-lg w-3/4 ">
                                Total Items
                            </span>
                            <span class="text-md">
                                {{ cartItems.length }}
                            </span>
                        </div>

                        <div class="flex items-center">
                            <span class="font-semibold text-lg w-3/4 ">
                                Total Quantity
                            </span>
                            <span class="text-md">
                               {{  store.getAllProductsQuantity }}
                            </span>
                        </div>
                        <hr />
                       
                        <hr />
                        <div class="flex items-center mt-3">
                            <span class="font-semibold text-lg w-3/4 ">
                                Total Amount
                            </span>
                            <span class=" font-semibold text-blue-600 text-md">
                                {{ store.totalAmount }} $
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>