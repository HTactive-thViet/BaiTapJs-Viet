// Viết hàm JavaScript để lấy ngày lớn nhất từ một mảng ngày.
var ngayLonNhatTrongMang = array1 => {
    var max = 0;
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] > max) {
            max = array1[i];
        }
    }
    console.log(max);
}
ngayLonNhatTrongMang([23,31,30,28,31,32,322,92,92])