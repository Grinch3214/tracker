<script setup>
import { ref, computed } from 'vue'
import TheHeader from './components/TheHeader.vue'
import TheNav from './components/TheNav.vue'
import { normalizePageHash, generateTimeLineItems, generateActivitySelectOptions, generateActivities } from './functions'
import { PAGE_ACTIVITIES, PAGE_PROGRESS, PAGE_TIMELINE } from './constans'
import TheActivities from './pages/TheActivities.vue'
import TheProgress from './pages/TheProgress.vue'
import TheTimeLine from './pages/TheTimeLine.vue'

const currentPage = ref(normalizePageHash())

function goTo(page) {
	currentPage.value = page
}

const timelineItems = ref(generateTimeLineItems())

const activities = ref(generateActivities())

const activitySelectOptions = computed(() => generateActivitySelectOptions(activities.value))

function deleteActivity(activity) {
	timelineItems.value.forEach((timelineItem) => {
		if(timelineItem.activityId === activity.id) {
			timelineItem.activityId = null
		}
	})
	activities.value.splice(activities.value.indexOf(activity), 1)
}

function createActivity(activity) {
	activities.value.push(activity)
}

function setTimeLineItemActivity({ timelineItem, activity }) {
	timelineItem.activityId = activity?.id || null
}

function setActivitySecondsToComplete(activity, secondsToComplete) {
	activity.secondsToComplete = secondsToComplete
}

</script>

<template>
  <TheHeader
    @go-to-timeline="goTo(PAGE_TIMELINE)"
		@go-to-progress="goTo(PAGE_PROGRESS)"
  />
	<main class="flex flex-grow flex-col">
		<TheTimeLine
		  v-show="currentPage === PAGE_TIMELINE"
		  :activity-select-options="activitySelectOptions"
		  :timeline-items="timelineItems"
			:activities="activities"
			@set-time-line-item-activity="setTimeLineItemActivity"
		/>
		<TheActivities
		  v-show="currentPage === PAGE_ACTIVITIES"
		  :activities="activities"
		  @create-activity="createActivity"
		  @delete-activity="deleteActivity"
			@set-activity-seconds-to-complete="setActivitySecondsToComplete"
		/>
		<TheProgress v-show="currentPage === PAGE_PROGRESS" />
	</main>
	<TheNav :current-page="currentPage" @navigate="goTo($event)" />
</template>

<style scoped>
</style>
