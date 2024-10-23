function countUpperCase(alpha) {
    let uppercaseCount = 0;
    for (let i = 0; i < alpha.length; i++) {
        if (alpha[i] >="A" && alpha[i] <= "Z") uppercaseCount++;
    }
    if (uppercaseCount > 0) {
        return uppercaseCount;
    } else {
        return "The Strings is not contain upper char";
    }
}
let text ="Hello World!";
let text1=text.split("");
let result=countUpperCase(text1);
document.write(result);