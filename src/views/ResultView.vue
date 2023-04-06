<template>
	<!-- <n-layout content-style="padding: 24px;" style="background-color: rgba(245, 245, 220 , 0.9);height: 700px;"> -->
	<n-result status="success" title="成功">
		<template #footer>
			<n-grid>
				<n-gi :span="6" :offset="4">
					<n-card hoverable>
						<n-image :src="getImg(oriFile)" />
					</n-card>
				</n-gi>
				<n-gi :span="6" :offset="4">
					<n-card hoverable>
						<n-image :src="getImg(tranFile)" />
					</n-card>
				</n-gi>
			</n-grid>
		</template>
	</n-result>
	<!-- </n-layout> -->
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute();
const oriFile = route.query.oriFile as string;
const tranFile = route.query.tranFile as string;
defineProps({
	oriFile: {
		type: String,
		required: true
	},
	tranFile: {
		type: String,
		required: true
	}
})
function getImg(src: string) {
	return new URL("../../img/" + src, import.meta.url).href
}
</script>