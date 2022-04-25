const {
    returnTwo,
    greeting,
    add,
    subtract,
    multiply,
    divide
} = require('./functions')

test('Should return 2', () => {
    expect(returnTwo()).toEqual(2)
})

test('Should greet James', () => {
    expect(greeting('James')).toBe('Hello, James!')
})

describe('Math Functions', () => {
    test('Should add 1 and 2', () => {
        expect(add(1,2)).toBe(3)
        expect(add(5,9)).toBe(14)
    })
    
    test('Should subtract 2 from 1', () => {
        expect(subtract(2,1)).toBe(1)
        expect(subtract(10,9)).toBe(1)
    })
    
    test('Should multiply 1 and 2', () => {
        expect(multiply(1,2)).toBe(2)
        expect(multiply(5,2)).toBe(10)
    })
    
    test('Should divide 2 by 1', () => {
        expect(divide(2,1)).toBe(2)
        expect(divide(4,2)).toBe(2)
    })
})