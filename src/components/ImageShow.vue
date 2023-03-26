<template>
	<n-card>
		{{ num }}
	</n-card>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
	props: {
		num: {
			type: Number,
			required: true
		}
	}
})

</script>