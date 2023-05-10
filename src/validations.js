export function isNull(value) {
	return value === null
}

export function isUndefined(value) {
	return value === undefined
}

export function isNumber(value) {
	return typeof value === 'number' 
}

export function isUndefinedOrNull(value) {
	return isNull(value) || isUndefined(value)
}

export function isNumberOrNull(value) {
	return isNumber(value) || isNull(value)
}