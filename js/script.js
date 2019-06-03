function calculate() {

    

    var side1 = document.getElementById("first").value;
    var side2 = document.getElementById("second").value;
    var side3 = document.getElementById("third").value;
 
    var values = (side1, side2, side3);

    
    if (side1 <= 0 || side2 <= 0 || side3 <= 0) 
    {
        prompt ('Your values dont make up a triangle <br> <img src="image/tenor.gif" >')
    } 
    else if (side1 === side2 && side1 === side3 && side2 === side3) 
    {
        prompt ('This forms an equilateral triangle <br> <img src="image/tenor.gif" >')
    } 
    else if (side1 === side2 || side2 === side3 || side1 === side3) 
    {
        prompt ('This is an isosceles triangle <br> <img src="image/tenor.gif" > ')
    } 
    else if (side1 !== side2 && side2 !== side3 && side1 !== side3) 
    {
        prompt ('This is a scalene triangle <br> <img src="image/tenor.gif" >')
    } 
    else if (side1 + side2 <= side3 || side3 + side2 <= side1 || side1 + side3 <= side2) 
    {
        prompt ('Cannot form a triangle <br> <img src="image/85.jpg" >')
    } 
    else 
    {
        prompt ('endea schoolfees yako')
    }
}