// mảng 

// cách khai báo:
// let names = [
//     "Anh Duy",
//     "Ngoc Trinh",
//     "Chi pu",
//     "Ngoc Trinh",
//     "Đàn Vĩnh Hưng",
//     "Chi pu"
// ];
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


// const numbers = [1, 7, 8, -3, 6, 10, 9];
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
// let min = numbers[0];
// for (let i = 0; i < numbers.length; i++) {
//     const number = numbers[i];
//     if (min > number) min = number; // tý hỏi 
// }
// console.log(min);


// thêm 3 số vào đầu mảng 
// numbers.unshift(100, 1000 , -10);
// console.log(numbers);

// thêm 3 số vào cuối mảng 
// numbers.push(-9,10,50);
// console.log(numbers);

//xóa 1 phần tử đầu tiên trong mảng 
// let deletedFirstNumber = numbers.shift();
// console.log("Giá trị phần tử đâu tiên bị xóa:" + deletedFirstNumber);

//xóa 1 phần tử cuối mảng 
// let deletedLastNumber = numbers.pop();
// console.log("giá trị phần tử cuối bị xóa:"+ deletedLastNumber);



// Mảng object

// Khai báo biến 
// const mySelf1 = {
//     //firstName||"name"
//     // đặc điểm thuộc tính 
//     firstName: "Duy",
//     lastName: "Anh",
//     dob: "04/11/2000",
//     address: "Thai Binh",
//     pet: {
//         name: 'Bod',
//         age: 2,
//         kind: 'dog'
//     }
//     //hành vi ( phương thức)
// }
// console.log(mySelf1);

// const mySelf2 = {
//     //firstName||"name"
//     // đặc điểm thuộc tính 
//     firstName: "Duy",
//     lastName: "Anh",
//     dob: "04/11/2000",
//     address: "Thai Binh",
//     pet: {
//         name: 'Bod',
//         age: 2,
//         kind: 'dog'
//     }
//     //hành vi ( phương thức)
// }
// console.log(mySelf2);

// lấy ra giá trị của thuộc tính "name" trong mySelf
// console.log(mySelf1.firstName);
// console.log(mySelf1['firstName']);

// const key = 'firstName';
// console.log(mySelf1[key]);

// nếu pet ở trong thì không bằng nhau còn ở ngoài thì bằng nhau 
// console.log(mySelf1.pet == mySelf2.pet);

// thay đổi giá trị
// mySelf1.lastName = "Van";

// thay đổi thuộc tính 
// mySelf1.dob = "04/1/2000";

// console.log(mySelf1);

//xóa thuộc tính 
// delete mySelf1.pet;
// console.log(mySelf1);

// mảng là vòng for ... of còn object là for ... in 

// for (let key in mySelf1) {
//     console.log("Đặc điểm " + key + " có giá trị là :" + mySelf1[key]); // khác mySelf.key (object)
// }

//Khai báo function( function có nhiều đầu vào nhưng chỉ 1 đầu ra (return))

// let a = inputNumber('a');
// let b = inputNumber('b');
// function inputNumber(label) {
//     let input = NaN;
//     do {
//         input = Number(prompt("Nhập vào số " + label +  " : "));
//     } while (isNaN(input));

//     return input; // trả về giá trị khi gọi hàm và không thực thi các đoạn code bên dưới (function dừng luôn)
// }

// function test() {
//     let a = 100;
//     let b = 10;

//     // closure (bao đóng )
//     function calculateAB(){
//         return a + b;
//     }

//     return calculateAB;
// }

// const res1 = test();
// console.log(res1); 

// gọi function 
// a = inputNumber('a');
// b = inputNumber('b');

// console.log(a + b);


// function có tính chất hoisting : sử dụng function trước khi khai báo

// function doSomething(){
//     console.log("Do something here");
// }

// function sayHello() {
//     console.log("Hello world");
// }

// function executeAfterSeconds(seconds, word) {
//     console.log("Thực thi gì đó sau " + seconds + " giây");
//     setTimeout(word, seconds * 1000);
// }


// executeAfterSeconds(3, sayHello);
// executeAfterSeconds(5, doSomething);

//khai báo arrow function 
// const doAnything = () => {

// }

// const doNothing = (a, b, c, d) => {
//     return "hello";
// }

//function sum (a,b,c){
//     return a + b + c;
// }
// const sum = (a, b, c) => a + b + c;

// const anhDuy = {
//     name : "Anh Duy",
//     flirt: () => {
//         console.log(this);
//     },
// run: function () {
//     console.log(this);
// }
// };

// anhDuy.flirt();
// anhDuy.run();

function checkTriangle(a, b, c) {
    if (a + b > c && a + c > b && b + c > a) {
        return true;
    } else
    return false;

}
checkTriangle(3, 4, 5); 
checkTriangle(3, 4, 6); 
checkTriangle(3, 4, 7);
checkTriangle(3, 4, 8);


function checkValiDate(day, month, year) {
    if (year % 4 == 0) {
        if (month == 2) {
            if (day == 29) {
                return true;
            }
        }
    } else if (month == 4 || month == 6 || month == 9 || month == 12) {
        if (day == 31) {
            return true;
        }

    } else if (month == 5 || month == 7 || month == 11 || month == 13) {
        if (day == 30) {
            return true;
        }

    } 
}

checkValiDate(29, 12, 2000);
