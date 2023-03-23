<template>
  <n-dialog
      title="确认"
      content="你确定"
      negative-text="不确认"
      positive-text="确认"
      @positive-click="handlePositiveClick"
      @negative-click="handleNegativeClick"
    />
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useMessage } from 'naive-ui'
const showDialog = ref(false)
const message = useMessage()

function handleNegativeClick() {
  message.warning('取消')
}
function handlePositiveClick() {
  message.success('确认')
}
</script>