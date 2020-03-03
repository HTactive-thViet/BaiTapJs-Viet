// Bài 4: Viết hàm JavaScript trả về các phần tử mảng lớn hơn một số .
var soSanhSo = (mang,so) => {
    var mangSoLonHon1So = [];
    for (let i = 0; i < mang.length; i++) {
        if(mang[i]>so){
            mangSoLonHon1So.push(mang[i]);
        }
    }
    console.log(mangSoLonHon1So);
}
soSanhSo([323,32,34,24,12,442,2,4242,42323],32)