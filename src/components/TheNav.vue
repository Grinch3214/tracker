<script setup>
import { normalizeClass, ref } from 'vue';
import { ClockIcon, ListBulletIcon, ChartBarIcon } from '@heroicons/vue/24/outline'
import { PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS } from '../constans'
import NavItem from './NavItem.vue'

const navItems = {
	[PAGE_TIMELINE]: ClockIcon, 
	[PAGE_ACTIVITIES]: ListBulletIcon, 
	[PAGE_PROGRESS]: ChartBarIcon
}

const currentPage = ref(normalizePageHash())

function normalizePageHash() {
	const hash = window.location.hash.slice(1)

	if(Object.keys(navItems).includes(hash)) {
		return hash
	}
	window.location.hash = PAGE_TIMELINE
	return PAGE_TIMELINE
}

</script>

<template>
	<nav class="sticky bottom-0 z-10 bg-white">
		<ul class="flex items-center justify-around border-t">
			<NavItem 
			v-for="(icon, item) in navItems"
			:key="item"
			:href="`#${item}`"
			:class="{ 'bg-gray-200 pointer-events-none': item === currentPage }"
			@click="currentPage = item"
			>
				<component :is="icon" class="h-6 w-6" /> {{ item }}
			</NavItem>
		</ul>
	</nav>
</template>