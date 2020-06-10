var getSumOfDiagonals = function(gridSize){
    var maxNumber = gridSize * gridSize;
    var count = 0;
    var increment = 1;
    var incrementCounter = 0;
    for(var i = 1; i <= maxNumber; i++){
        count += i;
        i += increment;
        incrementCounter = (incrementCounter + 1) % 4;
        if(incrementCounter == 0){
            increment += 2;
        }
    }
    
    return count;
}

console.log(getSumOfDiagonals(5));
console.log(getSumOfDiagonals(1001));
