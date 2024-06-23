const fibonacci = function(num) {
    if (!isNaN(parseInt(num))) {
        num = Number(num) ;
    } else return "OOPS" ;
    if (num < 0) return "OOPS";
    if (num === 0) return 0 ;
    if (num === 1) return 1 ;
    let u0 = 1 ;
    let u1 = 1;
    while (num-2) {
        let aux = u1 ;
        u1 = u0 + u1;
        u0 = aux;
        num--;
    }
    return u1;
};

// Do not edit below this line
module.exports = fibonacci;
