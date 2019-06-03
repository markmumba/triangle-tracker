function calculate() {

    

    var side1 = document.getElementById("first").value;
    var side2 = document.getElementById("second").value;
    var side3 = document.getElementById("third").value;
 
    var values = (side1, side2, side3);

    
    if (side1 <= 0 || side2 <= 0 || side3 <= 0) 
    {
        alert ('Your values dont make up a triangle')
    } 
    else if (side1 === side2 && side1 === side3 && side2 === side3) 
    {
        alert ('This forms an equilateral triangle')
    } 
    else if (side1 === side2 || side2 === side3 || side1 === side3) 
    {
        alert ('This is an isosceles triangle')
    } 
    else if (side1 !== side2 && side2 !== side3 && side1 !== side3) 
    {
        alert ('This is a scalene triangle')
    } 
    else if (side1 + side2 <= side3 || side3 + side2 <= side1 || side1 + side3 <= side2) 
    {
        alert ('Cannot form a triangle')
    } 
    else 
    {
        alert ('endea schoolfees yako')
    }
}