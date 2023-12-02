import fs from 'fs'
import path from 'path'
import readline from 'readline'

export const getCalibrationValueFromLine = (line: string) => {
	let firstNumber = ''
	let lastNumber = ''

	for (let char of line) {
		const isNumber = !Number.isNaN(parseInt(char))
		if (isNumber) {
			if (!firstNumber) {
				firstNumber = char
			}
			lastNumber = char
		}
	}
	console.log(firstNumber)
	return parseInt(firstNumber + lastNumber)
}

const sumCalibrationValues = async () => {
	let sum = 0

	const file = readline.createInterface({
		input: fs.createReadStream(path.resolve(__dirname, 'input.txt')),
		output: process.stdout,
		terminal: false,
	})

	file.on('line', (line) => {
		const value = getCalibrationValueFromLine(line)
		sum += value
	})

	file.on('close', () => {
		console.log(sum)
	})
}

sumCalibrationValues()
