<script setup>
import TimeLineItem from '../components/TimeLineItem.vue'

defineProps({
	timelineItems: {
		required: true,
		type: Array
	},
	activities: {
		required: true,
		type: Array
	},
	activitySelectOptions: {
		required: true,
		type: Array
	}
})

const emit = defineEmits({
	setTimeLineItemActivity(timelineItem, activity) {
		return [timelineItem, activity ].every(Boolean)
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
				:activities="activities"
				@select-activity="emit('setTimeLineItemActivity', { timelineItem, activity: $event })"
			/>
		</ul>
	</div>
</template>