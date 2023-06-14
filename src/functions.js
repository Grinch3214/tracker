import { 
	PAGE_ACTIVITIES,
	PAGE_PROGRESS,
	PAGE_TIMELINE,
	HOURS_IN_DAY,
	SECONDS_IN_HOUR
} from './constans';

export function normalizePageHash() {
	const hash = window.location.hash.slice(1)

	if([PAGE_ACTIVITIES, PAGE_PROGRESS, PAGE_TIMELINE].includes(hash)) {
		return hash
	}
	window.location.hash = PAGE_TIMELINE
	return PAGE_TIMELINE
}

export function generateTimeLineItems() {
	const timeloneItems = []

	for (let hour = 0; hour < HOURS_IN_DAY; hour++) {
		timeloneItems.push({ hour })
	}

	return timeloneItems
}

export function generateActivities() {
	return ['Coding', 'Training', 'Reading'].map((name, hours) => ({
		id: id(),
		name,
		secondsToComplete: hours * SECONDS_IN_HOUR
	}))
}

export function id() {
	return Date.now().toString(36) + Math.random().toString(36).substring(2)
}

export function generateActivitySelectOptions(activities) {
	return activities.map((activity) => ({	label: activity.name, value: activity.id }))
}