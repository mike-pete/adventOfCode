import fs from 'fs';
import readline from 'readline';


export const getCalibrationValueFromLine = (line:string) => {
    let firstNumber: string, lastNumber: string
    return true
}

const sumCalibrationValues = async () => {
    let sum = 0
    const file = readline.createInterface({
        input: fs.createReadStream('input.txt'),
        output: process.stdout,
        terminal: false
    })
    
    file.on('line', (line) => {
        getCalibrationValueFromLine(line)
    });
}


