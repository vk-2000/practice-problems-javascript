function areDigitSame(num){
    let digit = num % 10;
    while(num != 0){
        let lastDigit = num%10;
        num = Math.floor(num/10);
        if(digit != lastDigit){
            return false
        }
    } 
    return true;
}

const areDigitSameArrow = (num) => {
    let digit = num % 10;
    while(num != 0){
        let lastDigit = num%10;
        num = Math.floor(num/10);
        if(digit != lastDigit){
            return false
        }
    } 
    return true;
}

console.log(areDigitSame(2223));
console.log(areDigitSame(444));