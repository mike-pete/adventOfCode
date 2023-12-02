import {expect, test} from '@jest/globals';
import { getCalibrationValueFromLine } from './solution'

test('adds 1 + 2 to equal 3', () => {
  expect(getCalibrationValueFromLine('')).toBe(true);
});