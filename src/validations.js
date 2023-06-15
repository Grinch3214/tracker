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

export function isNotEmptyString(value) {
  return isString(value) && value.length > 0
}

export function isString(value) {
  return typeof value === 'string'
}

export function isSelectValueValid(value) {
	isNotEmptyString(value) || isNumberOrNull(value)
}