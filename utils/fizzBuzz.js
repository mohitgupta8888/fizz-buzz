
function generateFizzBuzz(count) {
    const fizzBuzz = [];
    for (let i = 1; i <= count; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            fizzBuzz.push("FizzBuzz");
            continue;
        }
        if (i % 3 === 0) {
            fizzBuzz.push("Fizz");
            continue;
        }
        if (i % 5 === 0) {
            fizzBuzz.push("Buzz");
            continue;
        }

        fizzBuzz.push(i);
    }
    return fizzBuzz;
}

module.exports = { generateFizzBuzz }