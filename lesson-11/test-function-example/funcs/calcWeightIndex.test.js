/*
1. Given weight in kg, height in m.
2. Return weight / height * height, round to 2.
3. If given invalid data, throw error with correct message.

90, 1.9 => 24.93
90 => error 'height required'
 => error 'weight and height required'
1.9, 90 => error 'weight must be first argument and height - second'
90, 190 => error 'height must in in m.'
-90, -1.9 => error 'weight and height must be more 0'
"90", {height: 1.9} => error 'weight and heigt must be number'
*/

const calcWeightIndex = require("./calcWeightIndex");

describe("test calcWeightIndex function", ()=> {
    test("90, 1.9 => 24.93", ()=> {
        const result = calcWeightIndex(90, 1.9);
        expect(result).toBe(24.93);
        /*
        const expect = result => {
            return {
                result,
                toBe(value) {
                    return this.result === value;
                }
            }
        }
        */
    })

    test("90 => error 'height required'", ()=> {
        expect(() => calcWeightIndex(90)).toThrow('height required')
    })

    it(" => error 'weight and height required'", ()=> {
        expect(() => calcWeightIndex()).toThrow('weight and height required')
    })

    test("1.9, 90 => error 'weight must be first argument and height - second'", ()=> {
        expect(() => calcWeightIndex(1.9, 90)).toThrow('weight must be first argument and height - second')
    })
})