function concatStrings(array) {
    let result = array[0].slice(1).concat(array[1].slice(1));
    return result;
}

const concatStringsArrow = array => array[0].slice(1).concat(array[1].slice(1));


console.log(concatStringsArrow(['code', 'academy']));

module.exports = concatStrings;
module.exports = concatStringsArrow;