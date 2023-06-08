<script setup>
import { PlusIcon } from '@heroicons/vue/24/outline'
import BaseButton from './BaseButton.vue'

const emit = defineEmits(['submit'])

let activity = ''

function submit() {
	emit('submit', activity)
}
</script>

<template>
	<form @submit.prevent="submit" class="sticky bottom-[57px] flex gap-2 border-t bg-white p-4">
			<input
			  :value="activity"
				@input="activity = $event.target.value"
			  class="w-full rounded border px-4 text-xl"
			  placeholder="Activity name"
			  type="text"
			>
			<BaseButton>
				<PlusIcon  class="h-8 w-8" />
			</BaseButton>
		</form>
</template>