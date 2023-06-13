<script setup>
import { ref } from 'vue'
import { TrashIcon } from '@heroicons/vue/24/outline'
import { PERIOD_SELECT_OPTIONS, BUTTON_TYPE_DANGER } from '../constans'
import BaseButton from '../components/BaseButton.vue'
import BaseSelect from '../components/BaseSelect.vue'

defineProps({
	activity: {
		required: true,
		type: Object
	}
})

const emit = defineEmits(['delete'])

const secondsToComplete = ref(null)
</script>

<template>
	<li class="flex flex-col gap-2 p-4">
		<div class="flex items-center gap-2">
			<BaseButton :type="BUTTON_TYPE_DANGER" @click="emit('delete')">
				<TrashIcon class="h-8" />
			</BaseButton>
			<span class="truncate text-xl">{{ activity.name }}</span>
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