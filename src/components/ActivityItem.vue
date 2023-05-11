<script setup>
import { ref } from 'vue'
import { TrashIcon } from '@heroicons/vue/24/outline'
import { PERIOD_SELECT_OPTIONS } from '../constans'
import BaseButton from '../components/BaseButton.vue'
import BaseSelect from '../components/BaseSelect.vue'

defineProps({
	activity: {
		required: true,
		type: String
	}
})

const secondsToComplete = ref(15)
</script>

<template>
	<li class="flex flex-col gap-2 p-4">
		<div class="flex items-center gap-2">
			<BaseButton>
				<TrashIcon class="h-8" />
			</BaseButton>
			<span class="truncate text-xl">{{ activity }}</span>
		</div>
		<div>
			<BaseSelect
				:options="PERIOD_SELECT_OPTIONS"
				:selected="secondsToComplete"
				@select="secondsToComplete = $event"
				class="font-mono"
				placeholder="h:mm"
			/>
		</div>
	</li>
</template>