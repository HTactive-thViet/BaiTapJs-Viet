// Viết hàm JavaScript nhận vào 1 array các phần tử có dạng {pk: 1, lastname: "abc", phone: "3213123123"} và đầu ra trả về 1 mảng có độ dài giống mảng nhập vào nhưng phần tử của mảng có dạng sau: {id: 1, ten: "abc", sodienthoai: "3213123123"}
var chuyenKey = (inArray)=>{
    var outArray = [];
    for (let i = 0; i < inArray.length; i++) {
        outArray.push(
            {
                'id' : inArray[i]['pk'], 
                'ten' : inArray[i]['lastname'],
                'sodienthoai': inArray[i]['phone']
            }
        );
    }
    console.log(outArray);
}
chuyenKey([{pk: 1, lastname: "viet", phone: "3213"},{pk: 2, lastname: "thu", phone: "75753"},{pk: 3, lastname: "dddd", phone: "75753"}])