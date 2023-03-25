// mảng 

// cách khai báo:
let names = [
    "Anh Duy",
    "Ngoc Trinh",
    "Chi pu",
    "Ngoc Trinh",
    "Đàn Vĩnh Hưng",
    "Chi pu"
];
// console.log(names);

// let numbers = [1,100 ,40 ,3, 20];

// let isRich = false;
// let isHandsome = true;
// let hasGirlfriend = false;

// let features = [isRich ,isHandsome,hasGirlfriend];


// isRich = true;
// truy xuất giá trị 1 phần tử trong mảng ?
// console.log(names[1]); // lấy phần tử thứ 2 trong mảng 
// console.log(names[0]); // lấy phần tử thứ 1 trong mảng


// thay đổi giá trị bất kì cho mảng ?
// names[0] = "hello world"
// names[4] = "goodbye everyone"

// console.log(names);
// console.log(features);

// let array1 = ['a', 'b','c'];
// let array2 = ['a','b','c'];
// let array3 = array1;

// kiểm tra kiểu dữ liệu của mạng
// console.log(typeof (array1));
// console.log(array1 + array2); // chương trình tự động ép kiểu về string khi thực hiện phép cộng
// console.log(array1 == array2);
// console.log(array1 == array3);

// array1[0] = "hello";
// console.log(array1);


// hoán đổi giá trị 2 phần tử trong mảng 
// let tmp = names[0];
// names[0] = names[3];
// names[3] = tmp;
// console.log(names);


// duyệt mảng 
//c1: for ... let i = 0 ...
// for (let i = 0; i < names.length; i++) {
//     let stt = i + 1
//     // console.log(stt + ". " + names[i]);

//     let name = names[i];
//     if (name == 'Ngoc Trinh' || name == 'Chi pu') {
//         console.log(stt + '. ' + name);
//     }
// }
//c2 : for ... of
// let i = 0;
// for (const name of names) {
//     // làm việc với name ở trong này 
//     i++
// }


const numbers = [1, 7, 8, -3, 6, 10, 9];
// in ra số chắn trong numbers
// for(let i = 0; i < numbers.length; i++){
//     const number = numbers[i];
//     if (numbers[i] % 2 == 0) 
//     console.log(numbers[i]);
// }
// tính tổng phần tử
// let sum = 0;
// for(let i = 0; i < numbers.length; i++){
//     const number = numbers[i];
//     sum += number;
// }
// console.log(sum);
// tìm phần tử nhỏ nhất
let min = numbers[0];
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if (min > number) min = number; // tý hỏi 
}
console.log(min);


// thêm 3 số vào đầu mảng 
numbers.unshift(100, 1000 , -10);
console.log(numbers);

// thêm 3 số vào cuối mảng 
numbers.push(-9,10,50);
console.log(numbers);

//xóa 1 phần tử đầu tiên trong mảng 
let deletedFirstNumber = numbers.shift();
console.log("Giá trị phần tử đâu tiên bị xóa:" + deletedFirstNumber);

//xóa 1 phần tử cuối mảng 
let deletedLastNumber = numbers.pop();
console.log("giá trị phần tử cuối bị xóa:"+ deletedLastNumber);

// 