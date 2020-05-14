import {add} from '../utils/functions'

test('adds 2 integers', () => {
    expect(add(5,3)).toBe(8)
})

test('add string and integer', () => {
    expect(add('9','10')).toBe(19)
})

test('returns NaN if non-numbers are passed', () => {
    expect(add('string','chicken')).toBeNaN()
})