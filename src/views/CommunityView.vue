<script setup lang="ts">
import ImageShow from '@/components/ImageShow.vue'
const srcList = [
	'0001.png',
	'0002.png',
	'0003.png',
	'0004.png',
	'0005.png',
	'0006.png',
	'0007.png'
]
</script>
<template>
	<n-layout>
		<n-grid x-gap="12" :cols="4">
			<n-gi v-for="src in srcList">
				<ImageShow v-bind:src="src" />
			</n-gi>
		</n-grid>
	</n-layout>
</template>

<style>
@media (min-width: 1024px) {
	.about {
		min-height: 100vh;
		display: flex;
		align-items: center;
	}
}
</style>
