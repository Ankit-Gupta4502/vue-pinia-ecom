<script setup>
import useProductStore from '../store/useProductsStore';
import { storeToRefs } from 'pinia';
const store = useProductStore()
const { cartItems } = storeToRefs(store)
</script>

<template>
  <div class="flex  py-4  items-center justify-between container ">
    <h3>ShopClues</h3>
    <div class="flex items-cente space-x-4">
      <router-link to="/">Products</router-link>
      <div class="relative">
        <router-link to="/cart" >
        <span class="cart-icon">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
        </span>
          <span class="absolute w-5 h-5 rounded-full bg-black text-white grid place-items-center top-[-6px] right-[-10px]">
            <span class=" leading-[0px]  ">
  
              {{ cartItems.length }}
            </span>
          </span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
