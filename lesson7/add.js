// let a = "hello";
// let b = 10;

//nhập dữ liệu từ bàn phím và gán giá trị vừa nhập vào trong 1 biến

// let input = prompt("hãy nhập vào đây để gán giá trị cho biến 'input'"); // dữ liệu có kiểu string
// console.log(input);

// let x = Number(prompt("nhập số x"));
// let y = Number(prompt("nhập số y"));

// let z = x + y;
// console.log(z);
// console.log(input);

// let name = "Anh Duy";
// {
//     // bên trong 1 khối lệnh
//     let name = "someone";
//     let age = 23;
//     {
//         let address = "thai binh";
//         // dùng được age ở trong này

//         // address chỉ tồn tại được trong khối này
//     }

//     console.log(name);


// }
// console.log(age); // không tồn tại được ở ngoài khối lệnh 

// let age = prompt("Nhập vào tuổi của bạn");

// nếu age nhỏ hơn 18 thì => "không cho vào"
// nếu age lớn hơn 18 thì => "Vào thoải mái"

// if (age < 18) {
//     console.log("Không cho vào");
// } else {
//     console.log("Vào thoải mái");
// }


// nhập vào phân loại của 1 học sinh : 1, 2 ,3
// nếu phân loại là 1 => 'Thằng này xứng đáng có 10 người yêu'
// nếu phân loại là 2 => '9.5 điểm'
// nếu phân loại là 3 => 'Cần cố gắng hơn'

// let rank = prompt('nhập vào phân loại');
// if (rank == 1) {
//     console.log('thằng này xứng đáng có 10 người yêu');
// } else if (rank == 2 ) {
//     console.log('9,5 điểm');
// } else if (rank == 3 ) 
// {
//     console.log('Cần cố gắng hơn');
// }
//  else {
//     console.log('nhập đúng rank của bạn')
// }

// let text = prompt('Nhập vào 1 chuỗi');
// if(text.length < 8) {
//     console.log('chuỗi ngắn quá');
// } else {
//     console.log('chuỗi này được');
// }


// in ra dòng "I LOVE YOU" 500 lần , mỗi dòng có đánh số thứ tự
// for(let count = 1; count <= 500; count++) {
//     console.log(count + ". I LOVE YOU");
// }


// let sum = 0;
// for (let count = 1; count <=50; count++) {
//     sum += count;
// }
// console.log(sum);


// let num = 10 ;
// while (num >= 6) {
//     console.log(num);
//     num = Math.floor(Math.random() *10);
// }

// in ra dãy số từ 1 - 200

// let index = 1;
// while (index <= 200) {
//     console.log(index);
//     index++;
// }

// let s = prompt("Chuỗi s");
// // console.log(s.length);
// let l = prompt("Số 1");
// while (s.length < l) {
//     s += 'a';
// }
// console.log(s);


// let x = prompt("nhập số x");
// let y = prompt("nhập số y");

// if (
//     x >= 0
//     && x <y
//     && y <= 100
// ) {
// while (x<y){
//     x++;
//     y--;
// }
// console.log(x,y);
// } else {
//     console.log("Nhập sai giá trị");
// }

// while(i <= 500){
//     i++
//     console.log(i);

// }

// for (let x = 1; x <= 300; x+=2) {
//     if ( x % 3 == 0) {
//         console.log(x);
//     }
// }

let sqr = "";
for (i = 1; i <= 3; i++) {
    for (j = 1; j <= 3; j++) {
        sqr += "* "
    }
    sqr += "\n"
}

console.log(sqr);
// * * * 
// * * *
// * * * 
