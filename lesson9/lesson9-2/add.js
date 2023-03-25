// 1.1 Tính tích của các phần tử trong mảng đó.

// const arr = [2, 3, 4, 5];
// let tich = 1;
// for (let i = 0; i < arr.length; i++) {
//   tich *= arr[i];
// }
// console.log("Tích của các phần tử trong mảng là:", tich);


///1.2 Tìm số nhỏ nhất mà chia hết cho 2 trong mảng.

// const arr = [3, 5, 2, 8, 1, 6];
// let min = Math.max(...arr);
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0 && arr[i] < min) {
//     min = arr[i];
//   }
// }
// if (min === Math.max(...arr)) {
//   console.log("Không tìm thấy số nào chia hết cho 2 trong mảng");
// } else {
//   console.log(`Số nhỏ nhất mà chia hết cho 2 trong mảng là: ${min}`);
// }


//1.3 Tìm số lớn nhất mà chia hết cho 3 trong mảng.

// const arr = [10, 15, 3, 21, 9, 8];
// let max = Number.NEGATIVE_INFINITY;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 3 === 0 && arr[i] > max) {
//     max = arr[i];
//   }
// }

// if (max === Number.NEGATIVE_INFINITY) {
//   console.log("Không tìm thấy số nào chia hết cho 3 trong mảng");
// } else {
//   console.log(`Số lớn nhất mà chia hết cho 3 trong mảng là: ${max}`);
// }


//1.4 Tính giá trị trung bình của mảng.

// const arr = [5, 10, 15, 20, 25];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// // tính giá trị trung bình của mảng
// const average = sum / arr.length;
// console.log(`Giá trị trung bình của mảng là: ${average}`);


//1.5 Lọc ra các số nguyên tố trong mảng.
// const arr = [2, 5, 7, 10, 12, 13, 17, 20, 23];
// const primes = arr.filter(num => {
//   // Kiểm tra xem số có phải là số nguyên tố hay không
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return num > 1; // Trả về true nếu số đó là số nguyên tố
// });
// console.log(`Các số nguyên tố trong mảng là: ${primes}`);


//1.6 Kiểm tra xem trong mảng có số nhỏ hơn 10 hay không.
// const arr = [5, 12, 7, 15, 9];
// const hasNumberLessThan10 = arr.some(num => num < 10);
// if (hasNumberLessThan10) {
//   console.log("Mảng có số nhỏ hơn 10");
// } else {
//   console.log("Mảng không có số nhỏ hơn 10");
// }


//1.7 Kiểm tra xem tất cả phần tử trong mảng có lớn hơn 20 không.
// const arr = [25, 30, 22, 28, 21,18,2,5];
// const NumbersThan20 = arr.every(num => num > 20);
// if (NumbersThan20) {
//   console.log("Tất cả phần tử trong mảng đều lớn hơn 20");
// } else {
//   console.log("Mảng có ít nhất một phần tử nhỏ hơn hoặc bằng 20");
// }


//1.8.1 Nhập vào số n cho đến khi n là 1 số trong mảng s.
// const s = [3, 7, 12, 9, 16];
// let n = prompt("Nhập vào số n:");
// while (!s.includes(Number(n))) {
//   n = prompt("Nhập lại số n:");
// }
// console.log(`Số ${n} là một số trong mảng s`);

//1.8.2 random
// let n = prompt("Nhập vào số n:");
// let str1 = prompt("Nhập vào dãy số (số viết liền nhau): ");
// let numbers = str1.split("");
// console.log(numbers);
// while (!str1.includes(Number(n))) {
//   n = prompt("Nhập lại số n:");
// }
// console.log(`Số ${n} là một số trong mảng s`);


//2.1 Khai báo 1 mảng s gồm các chuỗi bất kỳ. Nhập vào 1 chuỗi text.Tìm 1 chuỗi đầu tiên có độ dài nhỏ nhất trong mảng.
// const s = ['this', 'is', 'an', 'example', 'of', 'string', 'array'];
// const text = prompt('Nhập vào chuỗi text: ');
// let shortest = s[0]; // giả sử chuỗi đầu tiên là chuỗi ngắn nhất
// for (let i = 0; i < s.length; i++) {
//   if (s[i].length < shortest.length) {
//     shortest = s[i];
//   }
// }

// console.log(`Chuỗi ngắn nhất trong mảng là: ${shortest}`);


//2.2 Tìm những chuỗi trong mảng có chứa giá trị text.
// const s = ['this', 'is', 'an', 'example', 'of', 'string', 'array'];
// const text = prompt('Nhập vào chuỗi text: ');
// const result = [];
// for (let i = 0; i < s.length; i++) {
//     if (s[i].includes(text)) {
//         result.push(s[i]);
//     }
// }
// if (result.length > 0) {
//     console.log(`Các chuỗi trong mảng có chứa giá trị "${text}" là: ${result.join(', ')}`);
// } else {
//     console.log(`Không có chuỗi trong mảng có chứa giá trị "${text}"`);
// }


//2.3 Tạo mảng mới newS gồm các phần tử có giá trị là 3 ký tự đầu tiên của từng phần tử trong s.
// let s = ['abcde', 'fghij', 'klmno'];
// let newS = s.map(str => str.substr(0, 3));
// console.log(newS);


//2.4 Tạo ra 1 chuỗi là sự kết hợp của các phần tử trong s. Mỗi phần tử cách nhau bởi dấu ‘-’.
// let s = ["Hello", "world", "this", "is", "JavaScript"];
// let text = " ";
// let combinedString = s.join("-");
// console.log(combinedString);


//3.1 Nhập vào 2 dãy số d1, d2. Mỗi số trong mỗi dãy cách nhau bởi dấu ‘,’.Kiểm tra xem tất cả các giá trị số trong d1 có nằm trong d2 không.
// let d1 = "1,2,3,4,5";
// let d2 = "3,5,7,9,11";
// let arr1 = d1.split(",").map(Number);
// let arr2 = d2.split(",").map(Number);
// let allInArr2 = arr1.every(num => arr2.includes(num));
// if (allInArr2) {
//     console.log("Tất cả các giá trị số trong d1 đều nằm trong d2");
// } else {
//     console.log("Tồn tại giá trị số trong d1 không nằm trong d2");
// }


//3.2 Kiểm tra xem có phần tử nào trong d2 chia hết cho tổng của d1 không.
// let d1 = "1,2,3,4,5";
// let d2 = "10,20,30,40,50";
// let arr1 = d1.split(",").map(Number);
// let arr2 = d2.split(",").map(Number);
// let sum = 0;
// for (let i = 0; i < arr1.length; i++) {
//   sum += arr1[i];
// }
// // let sum = arr1.reduce((a, b) => a + b, 0);
// let result = arr2.some(num => num % sum === 0);
// if (result) {
//   console.log("Có phần tử trong d2 chia hết cho tổng của d1");
// } else {
//   console.log("Không có phần tử trong d2 chia hết cho tổng của d1");
// }


//3.3 
// let d1 = "1,2,3,4,5";
// let d2 = "10,20,30,40,50";
// let arr1 = d1.split(",");
// let arr2 = d2.split(",");
// let newArr = [];
// for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] % 2 === 0) {
//         newArr.push(arr1[i]);
//     }
// }

// for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i] % 2 === 0) {
//         newArr.push(arr2[i]);
//     }
// }
// console.log(`Mảng mới chứa các số chia hết cho 2 trong d1 và d2: ${newArr}`);