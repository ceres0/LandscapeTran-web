<template>
  <n-button size="large" dashed class="tranButton" @click="showModal = true">
    <template #icon>
      <n-icon size="50"><cash-icon /></n-icon>
    </template>
  </n-button>
  <n-modal v-model:show="showModal" :mask-closable="false" preset="dialog" title="画风迁移" negative-text="算了"
    @negative-click="onNegativeClick">
    <n-upload multiple directory-dnd action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f" :max="5">
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
          请不要上传敏感数据，比如你的银行卡号和密码，信用卡号有效期和安全码
        </n-p>
      </n-upload-dragger>
    </n-upload>
  </n-modal>
</template>
<script lang="ts">
import { useMessage } from 'naive-ui'
import type { UploadFileInfo } from 'naive-ui'
import { defineComponent, ref } from 'vue'
import { CashOutline as CashIcon, ArchiveOutline as ArchiveIcon } from '@vicons/ionicons5'

export default defineComponent({
  components: {
    CashIcon,
    ArchiveIcon
  },
  setup() {
    const message = useMessage()
    const showModalRef = ref(false)

    return {
      showModal: showModalRef,
      onNegativeClick() {
        message.success('Cancel')
        showModalRef.value = false
      },
      onPositiveClick() {
        message.success('Submit')
        showModalRef.value = false
      },
      async beforeUpload(data: {
        file: UploadFileInfo
        fileList: UploadFileInfo[]
      }) {
        if (data.file.file?.type !== 'image/png' && data.file.file?.type !== 'image/jpeg' && data.file.file?.type !== 'image/jpg') {
          message.error('只能上传png格式的图片文件，请重新上传')
          return false
        }
        return true
      }
    }
  }
})
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