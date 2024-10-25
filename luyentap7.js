// let result="";
// for (let i = 0; i <=6; i++) {
//     for (let j = 0; j <=i; j++) {
//         result += "*";
//     }
//     result += "<br>";
// }
// document.write(result);

// let result="";
// for (let i = 6; i >= 0; i--) {
//     for (let j = 0; j <=i; j++) {
//         result += "*";
//     }
//     result += "<br>";
// }
// document.write(result);

// let result="";
// for (let i = 6; i >=0; i--){
//     for (let k = 0; k <= 6 - i; k++){
//         result += " &nbsp;";
//     }
//     for (let j = 0; j<=i ; j++){
//         result += "*";
//     }
//     result += "<br>";
// }
// document.write(result);

let result="";
for (let i = 6; i >=0; i--){
    for (let k = 0; k <=i; k++){
        result += " &nbsp;";
    }
    for (let j = 0; j<= 6-i ; j++){
        result += "*";
    }
    result += "<br>";
}
document.write(result);
