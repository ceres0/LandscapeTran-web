<template>
  <n-button size="large" dashed class="tranButton" @click="showModal = true">
    <template #icon>
      <n-icon size="50"><cash-icon /></n-icon>
    </template>
  </n-button>
  <n-modal v-model:show="showModal" :mask-closable="false" preset="dialog" title="画风迁移" negative-text="算了"
    @negative-click="onNegativeClick">
    <n-upload multiple directory-dnd list-type="image" action="/api/upload" :max="1" accept=".png,.jpg,.jpeg"
      @finish="handleFinish">
      <!-- {{ BaseAPI }} -->
      <n-upload-dragger>
        <div style="margin-bottom: 12px">
          <n-icon size="48" :depth="3">
            <archive-icon />
          </n-icon>
        </div>
        <n-text style="font-size: 16px">
          点击或者拖动图片到该区域来上传
        </n-text>
        <n-p depth="3" style="margin: 8px 0 0 0">
          仅支持png、jpg、jpeg格式的图片文件
        </n-p>
      </n-upload-dragger>
    </n-upload>
  </n-modal>
</template>
<script lang="ts" setup>
import { useMessage } from 'naive-ui'
import type { UploadFileInfo } from 'naive-ui'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { CashOutline as CashIcon, ArchiveOutline as ArchiveIcon } from '@vicons/ionicons5'

const message = useMessage()
const showModal = ref(false)
const router = useRouter()
// console.log(BaseAPI)

function onNegativeClick() {
  message.success('Cancel')
  showModal.value = false
}
const handleFinish = ({
  file,
  event
}: {
  file: UploadFileInfo
  event?: ProgressEvent
}): UploadFileInfo => {
  console.log(event)
  console.log(file)
  message.success("上传成功")
  let fileUrl = (event?.target as XMLHttpRequest).response
  console.log(fileUrl)
  file.url = String(fileUrl)
  router.push('/')
  return file
}

</script>
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