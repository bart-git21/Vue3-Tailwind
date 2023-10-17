<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { pictureApi } from '@/utils/pictureApi'

const getImg = ref('')
async function getPicture() {
  try {
    const src = await pictureApi.getImgSrc()
    src && (getImg.value = src)
  } catch (err) {
    // handle the error
    if (err instanceof Error) {
      console.log(err.name) // the type of error
      console.log(err.message) // the description of the error
      console.log(err.stack) // the stack trace of the error
    } else {
      // handle other errors
    }
  }
}
onMounted(() => {
  getPicture()
})
</script>

<template>
  <div class="shadow-box grid justify-items-center">
    <h1 class="text-center mb-4 text-5xl font-bold">Random Picture Game</h1>
    <div
      class="max-w-max block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
    >
      <img class="w-full max-h-96 rounded-t-lg" :src="getImg" alt="the dog" />
      <div class="px-6 py-4">
        <h3 class="mb-2 text-3xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          There is an awesome dog!
        </h3>
        <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          To show another photo click the button below.
        </p>
        <div class="px-6 pt-4 pb-2">
          <button
            type="button"
            @click="getPicture"
            class="btn"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            Get another photo
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.shadow-box {
  box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
}
</style>
