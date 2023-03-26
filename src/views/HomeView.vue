<script setup lang="ts">
import Carousel from '@/components/Carousel.vue'
import TranDialog from '@/components/TranDialog.vue'
import CommunityView from './CommunityView.vue';
// import { NButton, NGrid } from 'naive-ui';
</script>

<template>
  <main>
    <n-layout content-style="padding: 24px;">
      <n-grid>
        <n-grid-item span="8" :offset="14">
          <div class="light-green">
            <n-loading-bar-provider>
              <n-message-provider>
                <n-notification-provider>
                  <n-dialog-provider>
                    <Carousel />
                  </n-dialog-provider>
                </n-notification-provider>
              </n-message-provider>
            </n-loading-bar-provider>
          </div>
        </n-grid-item>
      </n-grid>
    </n-layout>
    <n-layout content-style="padding: 24px;">
      <n-grid>
        <n-grid-item :offset="11">
          <n-message-provider>
          <TranDialog />
        </n-message-provider>
      </n-grid-item>
      </n-grid>
    </n-layout>
    <n-layout embedded content-style="padding: 24px;">
      <!-- <n-layout-header><n-gradient-text :gradient="{
                              from: 'rgb(85, 85, 85)',
                              to: 'rgb(170, 170, 170)'
                            }" size="30">社区</n-gradient-text></n-layout-header> -->
      <n-layout-content>
        <n-card>
          <!-- <div class="green"> -->
          <CommunityView />
          <!-- </div>  -->
        </n-card>
      </n-layout-content>
    </n-layout>
  </main>
</template>

<style scoped>
.light-green {
  background-color: rgba(0, 128, 0, 0.12);
}

.green {
  background-color: rgba(0, 128, 0, 0.24);
}

.tranButton {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
</style>