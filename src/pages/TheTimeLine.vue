<script setup>
import TimeLineItem from '../components/TimeLineItem.vue'
import { generateTimeLineItems } from '../functions'

const timelineItems = generateTimeLineItems()

</script>

<template>
	<div class="mt-7">
		<ul>
			<TimeLineItem
				v-for="timelineItem in timelineItems"
				:key="timelineItem.hour"
				:timeline-item="timelineItem"
			/>
		</ul>
	</div>
</template>