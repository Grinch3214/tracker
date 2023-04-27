<script setup>
import { ref } from 'vue';
import TheHeader from './components/TheHeader.vue'
import TheNav from './components/TheNav.vue'
import { normalizePageHash } from './functions'
import { PAGE_ACTIVITIES, PAGE_PROGRESS, PAGE_TIMELINE } from './constans';
import TheActivities from './pages/TheActivities.vue';
import TheProgress from './pages/TheProgress.vue';
import TheTimeLine from './pages/TheTimeLine.vue';

const currentPage = ref(normalizePageHash())

function goTo(page) {
	currentPage.value = page
}

</script>

<template>
  <TheHeader
    @go-to-timeline="goTo(PAGE_TIMELINE)"
		@go-to-progress="goTo(PAGE_PROGRESS)"
  />
	<main class="flex flex-grow flex-col">
		<TheTimeLine v-show="currentPage === PAGE_TIMELINE" />
		<TheActivities v-show="currentPage === PAGE_ACTIVITIES" />
		<TheProgress v-show="currentPage === PAGE_PROGRESS" />
	</main>
	<TheNav :current-page="currentPage" @navigate="goTo($event)" />
</template>

<style scoped>
</style>
