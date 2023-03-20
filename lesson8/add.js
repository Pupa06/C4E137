//1
// for (let x = 1; x <= 500; x++) {
//     console.log(x);
// }

//2
// for (let i = 1; i <= 300; i++) {
//     if (i % 2 == 0 && i % 3 == 0) {
//       console.log(i);
//     }
//   }

//3
// let sum = 0;

// for (let i = -30; i <= 50; i++) {
//   if (i % 2 == 0) {
//     sum += i;
//   }
// }

// console.log(sum);

//4
// let n = prompt("Nhập vào số n:");
// let giaiThua = 1;

// for (let i = 1; i <= n; i++) {
//   giaiThua *= i;
// }

// console.log(`Giai thừa của ${n} là ${giaiThua}`);

//5
// let a = prompt("Nhập số a:");
// let b = prompt("Nhập số b:");
// let x = prompt("Nhập số x:");

// for (let i = a; i <= b; i++) {
//   if (i % x == 0) {
//     console.log(`Số nhỏ nhất trong khoảng [${a}, ${b}] chia hết cho ${x} là: ${i}`);
//     break;
//   }
// }

//6
// let n = prompt("Nhập vào số n:");
// let s = 0;

// for (let i = 1; i <= n; i++) {
//   s += 1 / (i * (i + 1));
// }

// console.log(`Giá trị biểu thức là: ${s}`);

//7
// let n = prompt("Nhập vào số n:");
// console.log(`Các ước của ${n} là:`);

// for (let i = 1; i <= n; i++) {
//   if (n % i === 0) {
//     console.log(i);
//   }
// }

//8
// let n = prompt("Nhập vào số n:");
// let isPrime = true;

// if (n < 2) {
//   isPrime = false;
// } else {
//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }
// }

// if (isPrime) {
//   console.log(`${n} là số nguyên tố`);
// } else {
//   console.log(`${n} không là số nguyên tố`);
// }

//9
// let s = prompt("Nhập vào chuỗi s:");
// let l = prompt("Nhập vào số l:");

// while (s.length < l) {
//   s = "0" + s;
// }

// console.log(`Chuỗi mới: ${s}`);

//10
// let m = prompt("Nhập vào số m:");
// let n = prompt("Nhập vào số n:");

// while (m !== n) {
//   if (m > n) {
//     m -= n;
//   } else {
//     n -= m;
//   }
// }

// console.log(`Ước chung lớn nhất là ${m} `);

//11
// let m = prompt("Nhập số m:");
// let n = prompt("Nhập số n:");
// let i = 1;

// while (true) {
//   if (i % m === 0 && i % n === 0) {
//     break;
//   }
//   i++;
// }
// console.log(`Bội chung nhỏ nhất của ${m} và ${n} là: ${i}`);

//12
// const correct = Math.floor(Math.random() * 20) + 1 ;
// let answer;
// let count = 0;
// console.log(correct);

// while (count < 5) {
//   answer = Number(prompt("Nhập số bạn đoán từ 1 đến 20:"));
//   if (answer === correct) {
//     console.log("Đoán đúng");
//     break;
//   } else {
//     console.log("Đoán sai");
//     count++;
//   }
// }

// if (count === 5) {
//   console.log("Bạn đã thua cuộc");
// }

//13
// let n = prompt("Nhập vào số n (2 <= n <= 10)");
// while (n < 2 || n > 10) {
//   n = prompt("Giá trị n không hợp lệ! Vui lòng nhập lại (2 <= n <= 10)");
// }
// for (let i = 1; i <= 10; i++) {
//   console.log(n + " x " + i + " = " + (n * i));
// }

//14
// let row = '';
// for (let i = 1; i <= 3; i++) {
//   for (let j = 1; j <= 3; j++) {
//     row += '* ';
//   }
//   row += "\n" 
// }
// console.log(row);

//15
// let row = "";
// for (let i = 1; i <= 3; i++){
//     for(let j = 1 ; j <= 4 ;j++){
//         row += "* "
//     }
//     row += "\n"
// }
// console.log(row);

//16
// let n = 3;
// for (let i = 1; i <= 3; i++) {
//   let row = '';
//   for (let j = 1; j <= i; j++) {
//     row += '* ';
//   }
//   console.log(row);
// }

//17
// let w = prompt("Nhập vào chiều cao của bạn (cm): ");
// let h = prompt("Nhập vào cân nặng của bạn (kg): ");
// console.log(height);
// let bmi = h/(height*height);
// if (bmi < 18.5) {
//   console.log("Nhẹ cân");
// } else if (bmi < 23) {
//   console.log("Bình thường");
// } else if (bmi < 25) {
//   console.log("Thừa cân");
// } else {
//   console.log("Béo phì");
// }

