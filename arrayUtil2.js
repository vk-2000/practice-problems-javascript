function longestString(array){
    let longest = array[0];
    return array.reduce((longest, current) => current.length > longest.length ? current : longest, longest)
}

const longestStringArrow = (array) => array.reduce((longest, current) => current.length > longest.length ? current : longest, array[0])

console.log(longestStringArrow(["", "love", "code code code", "academy"]));

module.exports = longestString;
module.exports = longestStringArrow;
