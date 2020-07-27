const removeFromArray = function(input, ...args) {
    for (let i = 0; i < args.length; i++) {
        if(input.indexOf(args[i]) > -1) {
            removed = input.splice(input.indexOf(args[i]), 1);
        }
    }
    return input;
}

module.exports = removeFromArray
