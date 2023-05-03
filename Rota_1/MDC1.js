function MDC1(a,b){
    let resto = 0;

    while (b != 0) {
        resto = a % b;
        a = b;
        b = resto;
    }
return("O MDC eh: " + a);
}

module.exports ={
    MDC1
}