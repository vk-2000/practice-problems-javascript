function changeCapitalization(str){
    let changedString = "";
    for (let i = 0; i < str.length; i++) {
        let ch = str[i];
        if(str.charAt(i) === str.charAt(i).toUpperCase())
            changedString += str.charAt(i).toLowerCase(ch);
        else
            changedString += str.charAt(i).toUpperCase(ch);
    }
    return changedString;
}

const changeCapitalizationArrow = (str) => {
    let changedString = "";
    for (let i = 0; i < str.length; i++) {
        let ch = str[i];
        if(str.charAt(i) === str.charAt(i).toUpperCase())
            changedString += str.charAt(i).toLowerCase(ch);
        else
            changedString += str.charAt(i).toUpperCase(ch);
    }
    return changedString;
}

console.log(changeCapitalization("aB Bc 123"));
console.log(changeCapitalizationArrow("ab bc 123"));