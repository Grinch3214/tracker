<script setup>
import ActivityItem from '../components/ActivityItem.vue'
import TheActivityForm from '../components/TheActivityForm.vue'

defineProps({
	activities: {
		required: true,
		type: Array
	}
})
const emit = defineEmits(['deleteActivity', 'createActivity'])

</script>

<template>
	<div class="flex flex-col grow">
		<ul class="divide-y grow">
			<ActivityItem
			  v-for="activity in activities"
			  :key="activity"
			  :activity="activity"
				@delete="emit('deleteActivity', activity)"
			/>
		</ul>
		<TheActivityForm @submit="emit('createActivity', $event)" />
	</div>
</template>