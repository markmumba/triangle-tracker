function calculate()  {
    var side1 =parseInt(document.getElementById("first").value);
    var side2 = ParseInt(document.getElementById("second").value);
    var side3 =parseInt(document.getElementById("third").value);
    }
    
    var values =[side1,side2,side3];
    if (side1 <=0|| side2<=0|| side3<=0) {
    document.getElementById('show').innerHTML ='Your values dont make up a triangle'
    } else if (side1===side2 && side1===side3 && side2===side3) {
    document.getElementById('show').innerHTML ='This forms an equilateral triangle'
    } else if(side1===side2 || side2===side3 || side1===side3) {
    document.getElementById('show').innerHTML ='This is an isosceles triangle'
    } else if( side1 !==side2 && side2!== side3 && side1 !== side3) {
    document.getElementById ('show').innerHTML ='This is a scalene triangle'
    } else if(side1+side2<=side3 || side3+side2<=side1 || side1+side3 <=side2){
    document.getElementById ('show').innerHTML = 'Cannot form a triangle '
    } else {
    document.getElementById ('show').innerHTML = 'mse kwani Rada'
    }
    