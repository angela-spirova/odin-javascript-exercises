const removeFromArray = function(arr, ...arg) {
    for(let i=0; i<arg.length; i++){
        for(let j=0; j<arr.length; j++){
            if(arr[j]===arg[i]){
                arr.splice(j--,1)
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;