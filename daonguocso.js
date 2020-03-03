let daoNguocSo = (n=0) => {
    let chuoiDaoNguoc="";
    var x = n.toString();    
    for(let i=x.length;i>=1;i--){
        for (let j=i-1; j>=i-1; j--) {
            chuoiDaoNguoc = chuoiDaoNguoc.concat(x.slice(j,i));
        }        
    }
    console.log(chuoiDaoNguoc);
}
daoNguocSo();
