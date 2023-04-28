<script setup>
import { NAV_ITEMS } from '../constans'
import NavItem from './NavItem.vue'

// defineProps(['currentPage'])
defineProps({
	currentPage: {
		type: String,
		required: true
	}
})

const emit = defineEmits(['navigate'])

</script>

<template>
	<nav class="sticky bottom-0 z-10 bg-white">
		<ul class="flex items-center justify-around border-t">
			<NavItem 
			v-for="(icon, item) in NAV_ITEMS"
			:key="item"
			:href="`#${item}`"
			:class="{ 'bg-gray-200 pointer-events-none': item === currentPage }"
			@click="emit('navigate', item)"
			>
				<component :is="icon" class="h-6 w-6" /> {{ item }}
			</NavItem>
		</ul>
	</nav>
</template>