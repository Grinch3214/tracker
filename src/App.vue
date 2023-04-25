<script setup>
import { CheckCircleIcon } from '@heroicons/vue/24/solid'
import { ClockIcon, ListBulletIcon, ChartBarIcon } from '@heroicons/vue/24/outline'

const navItems = ['timeline', 'activities', 'progress']

</script>

<template>
  <header class="sticky top-0 z-20 border-b bg-white flex justify-between items-center px-4">
		<a href="#" class="inline-flex items-center my-2">
			<img src="./assets/track-svgrepo-com.svg" alt="Logo" width="50" height="50">
			<span class="pl-1 font-bold text-1xl">On Track</span>
		</a>
		<a href="#" class="text-sm">
			<div v-if="false" class="flex items-center gap-1">
				Day Complete!
				<CheckCircleIcon class="h-7 text-green-500" />
			</div>
			<div v-else class="flex items-center gap-1">
				<div>Progress: <span class="font-mono">20%</span></div>
				<div class="h-3 w-3 rounded-full bg-red-500"></div>
			</div>
		</a>
	</header>
	<main class="flex flex-grow flex-col">
	</main>
	<nav class="sticky bottom-0 z-10 bg-white">
		<ul class="flex items-center justify-around border-t">

			<li
				v-for="item in navItems"
				:key="item"
				class="flex-1"
			>
				<a class="flex flex-col items-center p-2 text-xs capitalize" :href="`#${item}`">
					<ClockIcon v-if="item === 'timeline'" class="h-6 w-6" /> 
					<ListBulletIcon v-else-if="item === 'activities'" class="h-6 w-6" /> 
					<ChartBarIcon v-else-if="item === 'progress'" class="h-6 w-6" /> 
					{{ item }}
				</a>
			</li>
		</ul>
	</nav>
</template>

<style scoped>
</style>
