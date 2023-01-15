function countVowels(str) {
    let vowels = 0;
    for(let i=0;i<str.length;i++){
        switch (str.charAt(i).toUpperCase()) {
            case 'A':
            case 'E':
            case 'I':
            case 'O':
            case 'U': 
                vowels++;
                break;
            default:
                break;
        }
    }
    return vowels;
}

const countVowelsArrow = str => {
    let vowels = 0;
    for(let i=0;i<str.length;i++){
        switch (str.charAt(i).toUpperCase()) {
            case 'A':
            case 'E':
            case 'I':
            case 'O':
            case 'U': 
                vowels++;
                break;
            default:
                break;
        }
    }
    return vowels;
}

console.log(countVowels("codeacademy"));

module.exports = countVowels;
module.exports = countVowelsArrow;