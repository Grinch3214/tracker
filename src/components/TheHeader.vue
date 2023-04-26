<script setup>
import TheLogo from './TheLogo.vue'
import TheHeaderProgress from './TheHeaderProgress.vue'

const emit = defineEmits(['goToTimeline', 'goToProgress'])
</script>

<template>
	<header class="sticky top-0 z-20 border-b bg-white flex justify-between items-center px-4">
		<TheLogo @click="emit('goToTimeline')" />
		<TheHeaderProgress @click="emit('goToProgress')" />
	</header>
</template>