import { sum } from "../sum"

test("Test sum function", () => {
    const result = sum(3,4)

    //Assertion
    expect(result).toBe(7)
})