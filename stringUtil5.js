function replaceCharacters(str) {
    let replaced = "";
    [...str].forEach((chr, index) => {
        if(chr.match(/[a-z]/i)){
            if(chr === chr.toUpperCase()){
                let code = chr.charCodeAt() - 'A'.charCodeAt();
                code = (code + 1)%26;
                replaced += String.fromCharCode(code + 'A'.charCodeAt());
            }
            else {
                let code = chr.charCodeAt() - 'a'.charCodeAt();
                code = (code + 1)%26;
                replaced += String.fromCharCode(code + 'a'.charCodeAt());
            }
        }
        else {
            replaced += chr;
        }
    })
    return replaced;
}

const replaceCharactersArrow = str => {
    let replaced = "";
    [...str].forEach((chr, index) => {
        if(chr.match(/[a-z]/i)){
            if(chr === chr.toUpperCase()){
                let code = chr.charCodeAt() - 'A'.charCodeAt();
                code = (code + 1)%26;
                replaced += String.fromCharCode(code + 'A'.charCodeAt());
            }
            else {
                let code = chr.charCodeAt() - 'a'.charCodeAt();
                code = (code + 1)%26;
                replaced += String.fromCharCode(code + 'a'.charCodeAt());
            }
        }
        else {
            replaced += chr;
        }
    })
    return replaced;
}

console.log(replaceCharacters("abs12cdez AZ"));