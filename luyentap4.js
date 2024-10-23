function sumNum(n) {
    let sum = 0;
    for (let i = 1; i <= (n-1); i++) {
        if (n % i === 0) {
            sum += i;
        }
    }
}
function compareNum(n1, n2) {
    let sum1 = sumNum(n1);
    let sum2 = sumNum(n2);
    if (sum1 === n2 && sum2 === n1) {
        return true;
    } else {
        return false;
    }
}
let number1=10;
let number2=20;
let result=compareNum(number1, number2);
document.write(result);
