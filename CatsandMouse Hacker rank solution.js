

function catAndMouse(x,y,z){
    
var catA = Math.abs(x-z); // 1 - 3 = -1 both negative numbers so we use abs and cause we dealing with numberline additon and subtraction

var catB = Math.abs(y-z); // 2 -3 = -2

var mouse = z; // 3




if(catA < catB){
    return ('Cat B');
}
 if (catB < catA ){
    return ('Cat A');
}
else if (catA == catB){
    return ('Mouse C');
}

}