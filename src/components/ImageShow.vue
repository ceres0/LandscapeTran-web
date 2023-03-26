<template>
	<n-card hoverable>
		<template #cover>
			<n-image lazy :src="getImg(src)" show-toolbar-tooltip>
				<template #placeholder>
					<div class="loading">
						Loading
					</div>
				</template>
			</n-image>
		</template>
		<n-space justify="space-between">
			<n-button text style="font-size: 24px" @click="dolike">
				<n-icon>
					<likeF v-if="liked" />
					<like v-else />
				</n-icon>
				<n-gradient-text :gradient="{
					from: 'rgb(85, 85, 85)',
					to: 'rgb(170, 170, 170)'
				}">{{ likenum }}</n-gradient-text>
			</n-button>
			<n-button text style="font-size: 24px" @click="dolike()">
				<n-icon>
					<share />
				</n-icon>
			</n-button>
		</n-space>
	</n-card>
</template>
<script lang="ts" setup>
import { defineComponent, ref, defineProps } from 'vue'
import { LikeOutlined as like, LikeFilled as likeF } from '@vicons/antd'
import { MdShareAlt as share } from '@vicons/ionicons4'
const liked = ref(false)
const likenum = ref(getRandomNum(10, 1000))
defineProps({
	src: {
		type: String,
		required: true
	}
})
function getImg(src: string) {
	return new URL('../assets/images/' + src, import.meta.url).href
}
function getRandomNum(Min: number, Max: number): number {
	var Range = Max - Min;
	var Rand = Math.random();
	return (Min + Math.round(Rand * Range));
}
function dolike() {
	liked.value = !liked.value
	if (liked.value) {
		likenum.value += 1
	} else {
		likenum.value -= 1
	}
}
</script>
<style>
.green {
	background-color: green;
	width: 100px;
	height: 100px;
}

.loading {
	width: 100px;
	height: 100px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #0001;
}
</style>