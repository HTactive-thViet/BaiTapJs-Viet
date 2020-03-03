// Bài 6: Viết hàm JavaScript chấp nhận hai đối số, một chuỗi và một chữ cái và hàm sẽ đếm số lần xuất hiện của chữ cái được chỉ định trong chuỗi. Ví dụ 'htactive.com, 't' Kết quả mong đợi : 2
var timKiTuTrongChuoi = (chuoi,kitu) => {
    var array1 = [];
    var dem=0;
    for (var x = 0, y = 1; x < chuoi.length; x++ , y++) {
        array1[x] = chuoi.substring(x, y);
    }
    for (let i = 0; i < array1.length; i++) {
        if (kitu=== array1[i]) {
            dem +=1;
        }
    }
    console.log(dem);
}
timKiTuTrongChuoi("iadhkahkdkkk","k");
