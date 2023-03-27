<template>
	<n-space>
		<n-card hoverable>
			<!-- <n-image :src="getImg"> -->
		</n-card>
		<n-card hoverable>

		</n-card>
	</n-space>
</template>
<script setup lang="ts">

defineProps({
	src: {
		type: String,
		required: true
	}
})
function getImg(src: string) {
	// return new URL(src, import.meta.url).href
}
</script>