<script setup>
import ActivityItem from '../components/ActivityItem.vue'

defineProps({
	activities: {
		required: true,
		type: Array
	}
})
const emit = defineEmits(['deleteActivity'])
</script>

<template>
	<div>
		<ul class="divide-y">
			<ActivityItem
			  v-for="activity in activities"
			  :key="activity"
			  :activity="activity"
				@delete="emit('deleteActivity', activity)"
			/>
		</ul>
	</div>
</template>