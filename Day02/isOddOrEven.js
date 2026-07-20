function isOddOrEven(number)
{
    let result="";
    if(number%2 === 0)
    {
        result = console.log("The given number "  + number + " is even");
    }
    else
    {
        result = console.log("The given number " + number + " is odd");
    }
    return result;
}


isOddOrEven(20);
isOddOrEven(25);