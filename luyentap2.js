function sumNum(arr) {
    let total=0;
    let index=0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            if (i % 2 === 0) {
                total += arr[i];
                index++;
            }
        }
    }
    let ave=total/index;
    return ave;
}
let arr1=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let result=sumNum(arr1);
document.write(result);