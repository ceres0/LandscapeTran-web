<script setup lang="ts">
import Carousel from '@/components/Carousel.vue'
import TranDialog from '@/components/TranDialog.vue'
</script>

<template>
  <main>
    <n-grid :cols="5">
      <div class="light-green">
        <n-grid-item :offset="3">
            <n-loading-bar-provider>
              <n-message-provider>
                <n-notification-provider>
                  <n-dialog-provider>
                    <Carousel /> 
                  </n-dialog-provider>
                </n-notification-provider>
              </n-message-provider>
            </n-loading-bar-provider>
        </n-grid-item>
      </div>
      <div class="green">
        <n-grid-item :offset="2">
          <!-- <n-button @click="showDialog = true">Show Dialog</n-button>
          <TranDialog v-model:show="showDialog" /> -->
        </n-grid-item>
      </div>
    </n-grid>
  </main>
</template>

<style scoped>
.light-green {
  background-color: rgba(0, 128, 0, 0.12);
}
.green {
  background-color: rgba(0, 128, 0, 0.24);
}
</style>