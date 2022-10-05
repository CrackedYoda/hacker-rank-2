// hacker rank 1



// function to check liked
function viraladvertising(n){
    let cumulatives = 0;
    let shared =  5;
    let nooflikes = 0;

    for(var i = 1;i<=n;i++){

       nooflikes = math.floor(shared/2);  // no of likes for eacchday 
       cumulatives += nooflikes;
      shared = nooflikes * 3;
    }
    return cumulatives;


}
