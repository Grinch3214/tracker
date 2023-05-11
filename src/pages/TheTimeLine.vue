<script setup>
import TimeLineItem from '../components/TimeLineItem.vue'

defineProps({
	timelineItems: {
		required: true,
		type: Array
	},
	activitySelectOptions: {
		required: true,
		type: Array
	}
})
</script>

<template>
	<div class="mt-7">
		<ul>
			<TimeLineItem
				v-for="timelineItem in timelineItems"
				:key="timelineItem.hour"
				:timeline-item="timelineItem"
				:activity-select-options="activitySelectOptions"
			/>
		</ul>
	</div>
</template>