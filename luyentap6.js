let arr=[3, 5, 9, 10, 15, 16, 17];
function checkNum (n) {
        if (n<=1) { return false;}
        if (n<=3) return true;
       for (let i = 2; i < n; i++) {
           if (n % i === 0) return false;
       }
       return true;
}
function checkNum1(arr1) {
    let result = "";
    for (let i = 0; i < arr1.length; i++) {
        if (checkNum(arr1[i])) {
            result += `${arr1[i]} `;
        }
    }
    return `so nguyen to la: ${result}`;
}
let result=checkNum1(arr);
document.write(result);