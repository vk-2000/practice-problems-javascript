function isLeapYear(year){
    return year % 400 == 0 ? true : ((year % 4 == 0) && (year % 100 != 0) ? true : false)
}

const isLeapYearArrow = year => year % 400 == 0 ? true : ((year % 4 == 0) && (year % 100 != 0) ? true : false)

console.log(isLeapYearArrow(2001));

module.exports = isLeapYear;
module.exports = isLeapYearArrow;