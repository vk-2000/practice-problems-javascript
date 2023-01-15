function endsWithScript(str){
    return str.endsWith("Script");
}

const endsWithArrow = str => str.endsWith("Script");

console.log(endsWithScript("javaScript"));
console.log(endsWithScript("javascript"));

module.exports = endsWithScript;
module.exports = endsWithArrow;