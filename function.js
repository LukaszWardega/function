//triangleArea function

function getTriangleArea(a,h) {
    if (a <= 0 || h <=0)  {
        return ('Nieprawidłowe dane'); 
    }
    var result = a*h/2;
    return result;   
}
console.log( getTriangleArea(10,6) );

var trojkat1 = getTriangleArea(4,4),
    trojkat2 = getTriangleArea(4,6);
    trojkat3 = getTriangleArea(2,48);

console.log(trojkat1);
console.log(trojkat2);
console.log(trojkat3);