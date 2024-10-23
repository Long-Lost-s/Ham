function checkPrime(n) {
    let sum = 0;
    let sum1 = 0;
    for (let i = 1; i <= n; i++) {
            if (i % 2 === 0) {
                sum += i;
            } else {
                sum1 += i;
            }
        }
    let sum2 = sum - sum1;
    return sum2;
}
let number = 20;
let result = checkPrime(number);
document.write(result);
