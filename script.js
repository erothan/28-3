let num1 = Number(prompt("Enter first number"));
let num2 = Number(prompt("Enter Second number"));
let num3 = Number(prompt("Enter third number"));

let num12 = num1 + num2;
let num13 = num1 + num3;
let num23 = num2 + num3;


if ( num12 > num3 && num13 > num2 && num23 > num1){
    alert("This numbers can make a triangels.")
}
else{
    alert("This numbers can't make a triangle.")
}