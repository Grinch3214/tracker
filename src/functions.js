import { PAGE_ACTIVITIES, PAGE_PROGRESS, PAGE_TIMELINE, HOURS_IN_DAY } from './constans';

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