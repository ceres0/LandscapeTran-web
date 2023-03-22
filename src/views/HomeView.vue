<script setup lang="ts">
import { defineComponent } from 'vue'
import Carousel from '@/components/Carousel.vue'
</script>

<template>
  <main>
    <n-loading-bar-provider>
      <n-message-provider>
        <n-notification-provider>
          <n-dialog-provider>
            <Carousel />
          </n-dialog-provider>
        </n-notification-provider>
      </n-message-provider>
    </n-loading-bar-provider>
  </main>
</template>
