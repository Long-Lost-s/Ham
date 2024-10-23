let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
function checkPrime(arr) {
    let sum = 0;
    let sum1 = 0;
    for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                sum += arr[i];
            } else {
                sum1 += arr[i];
            }
        }
    let sum2 = sum - sum1;
    return sum2;
}
let result = checkPrime(arr1);
document.write(result);
