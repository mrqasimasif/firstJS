var num1 , num2 , oper;
console.log("This program is a basic JavaScript calculator")
var num1 = 100;
var num2 = 50;
var oper = '+';
var result = calculate(num1 , num2 , oper);
console.log("The output for the expression is : ", result);
console.log("PRogram Ends!");


function calculate (numb1 , numb2 , ope) {
    if(ope == '+')
        return numb1+numb2;
    else if(ope == '*')
        return numb1*numb2;
    else if(ope == '-')
        return numb1-numb2;
    else if(ope == '/')
        return numb1/numb2;
    else if(ope == '%')
        return numb1%numb2;
}
