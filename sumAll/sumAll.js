const sumAll = function(min, max) {
    let int1, int2 = 0;
    
    if (min < 0 || max < 0) {
        return 'ERROR';
    } else if (typeof min != 'number' || typeof max != 'number') {
        return 'ERROR';
    }
    
    if (min < max) {
        int1 = min; int2 = max;
    } else {
        int1 = max; int2 = min;
    }
    let output = 0;
    for (let i = int1; i <= int2; i++) {
        output += int1;
        int1++;
    }
    return output;
}

module.exports = sumAll
