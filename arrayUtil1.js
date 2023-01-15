function largestEven(array){
    let largest = Number.NEGATIVE_INFINITY;
    for(let i=0; i<array.length; i++){
        if(array[i]%2==0 && array[i]>largest){
            largest = array[i];
        }
    }
    if(largest == Number.NEGATIVE_INFINITY)
        return -1;
    return largest;
}

const largestEvenArrow = (array) => {
    let largest = Number.NEGATIVE_INFINITY;
    for(let i=0; i<array.length; i++){
        if(array[i]%2==0 && array[i]>largest){
            largest = array[i];
        }
    }
    if(largest == Number.NEGATIVE_INFINITY)
        return -1;
    return largest;
}

console.log(largestEven([1,-221,13,-14,5]));

