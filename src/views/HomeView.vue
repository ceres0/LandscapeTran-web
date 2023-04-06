<script setup lang="ts">
import Carousel from '@/components/Carousel.vue'
import TranDialog from '@/components/TranDialog.vue'
import CommunityView from './CommunityView.vue';
// import { NButton, NGrid } from 'naive-ui';
</script>

<template>
  <main>
    <!-- <n-layout content-style="padding: 24px;"> -->
    <n-space vertical>
      <n-grid>
        <n-gi span="6" :offset="4">
          <n-gradient-text :gradient="{
            from: 'rgb(85, 85, 85)',
            to: 'rgb(170, 170, 170)'
          }" style="padding: 70px 0;" :size="30">
            探索山水之美
          </n-gradient-text>
          <n-gradient-text :gradient="{
            from: 'rgb(85, 85, 85)',
            to: 'rgb(170, 170, 170)'
          }" style="padding: 0px 0;" :size="30">
            开启风格迁移的艺术之旅
          </n-gradient-text>
        </n-gi>
        <n-gi span="8" :offset="4">
          <n-loading-bar-provider>
            <n-message-provider>
              <n-notification-provider>
                <n-dialog-provider>
                  <Carousel />
                </n-dialog-provider>
              </n-notification-provider>
            </n-message-provider>
          </n-loading-bar-provider>
        </n-gi>
      </n-grid>
      <n-grid>
        <n-gi :offset="11">
          <n-message-provider>
            <TranDialog />
          </n-message-provider>
        </n-gi>
      </n-grid>
      <n-card>
        <!-- <div class="green"> -->
        <CommunityView />
        <!-- </div>  -->
      </n-card>
    </n-space>
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