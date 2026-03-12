const palindromes = function (str = "e") {
    str = str.toLowerCase();
    str = str.replaceAll(/[^0-9a-z]/g, "");
    const halfOfLength = Math.floor(str.length/2);

    for(let i=0; i<halfOfLength; i++){
        if(str[i]!==str[str.length-1-i]){
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
