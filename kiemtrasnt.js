kiemTraSNT = n => {
    var dem = 0;
    if (n < 2) {
        console.log(`${n} không phải là số nguyên tố`);
    }
    if(n == 2) {
        console.log(`${n} là số nguyên tố`);
    }
    for(var i = 2; i < Math.sqrt(n); i++) {
        if (n % i == 0) {
            dem+=1;
        }
    }
    debugger;
    if(dem>0){
        console.log(`${n} không phải là số nguyên tố`);
    } else console.log(`${n} là số nguyên tố`)

}
kiemTraSNT(3);
