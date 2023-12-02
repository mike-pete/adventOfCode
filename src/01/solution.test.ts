import { expect, test } from '@jest/globals'
import { getCalibrationValueFromLine } from './solution'

test('1abc2 -> 12', () => {
	expect(getCalibrationValueFromLine('1abc2')).toBe(12)
})

test('pqr3stu8vwx -> 38', () => {
	expect(getCalibrationValueFromLine('pqr3stu8vwx')).toBe(38)
})

test('a1b2c3d4e5f -> 15', () => {
	expect(getCalibrationValueFromLine('a1b2c3d4e5f')).toBe(15)
})

test('treb7uchet -> 77', () => {
	expect(getCalibrationValueFromLine('treb7uchet')).toBe(77)
})
