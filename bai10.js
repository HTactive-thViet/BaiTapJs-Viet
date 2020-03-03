// Viết hàm JavaScript để kiểm tra xem ngày có phải là ngày cuối tuần không
var kiemTraNgayCuoiTuan = day =>{
    var d = new Date();
    d.setDate(day);
    if (d.getDay()==6 || d.getDay()==0) {
        console.log(`Ngày ${day} là cuối tuần`)
    } else console.log(`Ngày ${day} không phải cuối tuần`);
}
kiemTraNgayCuoiTuan("20");
