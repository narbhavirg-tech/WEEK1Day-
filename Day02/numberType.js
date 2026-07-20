function findNumberType(number)
{
    let result = "";
    if(number > 0)
        result = "The given number " + number + " is Positive" ;
    else if(number < 0)
        result = "The given number " + number + " is Negative" ;
    else
        result = "The given number " + number + " is Zero" ;

    return result;

}


console.log(findNumberType(35));
console.log(findNumberType(-35));
console.log(findNumberType(0));