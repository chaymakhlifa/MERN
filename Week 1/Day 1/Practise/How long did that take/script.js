Number.prototype.isPrime = function() {
    for( let i=2; i<this; i++ ) {
        if( this % i === 0 ) {
            return false;
        }
    }
    return true;
}

function isPrimeRec(n){
    if(n<=2){
        return
    }
    console.log(n);
    return n % isPrimeRec(n-1)!=0
}
 
 console.log(isPrimeRec(6));
