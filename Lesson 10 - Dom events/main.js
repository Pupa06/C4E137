// 1. DOM manipulation
// 1.1. Tìm kiếm element trong DOM
// 1.1.1. getElementById
let btn1 = document.getElementById('btn1');
// console.log(btn1);
// --> HTMLElement

// 1.1.2. getElementsByClassName
let items = document.getElementsByClassName('item');
// console.log(items);
// --> HTMLCollection

// 1.1.3. getElementsByTagName
let btns = document.getElementsByTagName('button');
// console.log(btns);
// --> HTMLCollection

// 1.1.4. querySelector: tìm kiếm theo CSS selector, trả về phần tử đầu tiên thỏa mãn 
let item1 = document.querySelector('.item');
// console.log(item1);
// --> trả về phần tử đầu tiên có class là item

// 1.1.5. querySelectorAll: tìm kiếm theo CSS selector, trả về tất cả các phần tử thỏa mãn
let itemsSelector = document.querySelectorAll('.item');
// console.log(itemsSelector);
// --> trả về tất cả các phần tử có class là item (NodeList)

// 1.2. Thay đổi style của element
// 1.2.1. Thay đổi style bằng cách gán giá trị cho thuộc tính style của element
item1.style.backgroundColor = 'red';
item1.style.color = 'white';

// 1.2.2. Thay đổi style bằng cách thêm class vào element
btn1.classList.add('active');
// --> lúc này element btn1 sẽ có 2 class là btn1 và active

// 1.2.3. Thay đổi style bằng cách thêm inline style vào element
btn1.setAttribute('style', 'background-color: green; color: white;');
// --> lúc này element btn1 sẽ có 2 thuộc tính style là background-color và color

// 1.3. Thay đổi nội dung của element: nội dung của element chính là phần text nằm giữa cặp thẻ đóng và thẻ mở
// 1.3.1. Thay đổi nội dung bằng cách gán giá trị cho thuộc tính innerHTML hoặc textContent của element
item1.innerHTML = 'Item 1 - changed';
// --> lúc này element item1 sẽ có nội dung là Item 1 - changed

// 1.4. Thêm element mới vào DOM
// Bước 1. Tạo element mới
let newItem = document.createElement('div');
newItem.classList.add('item');
newItem.innerHTML = 'Item 7';
// Bước 2. Thêm element mới vào DOM
let box = document.querySelector('.box');
box.appendChild(newItem);
// --> lúc này element newItem sẽ được thêm vào cuối element cha box

// 1.5. Xóa element khỏi DOM
// Bước 1. Tìm element cần xóa
let item2 = document.querySelector('.item:nth-child(2)');
// --> .item:nth-child(2) là CSS selector, tìm kiếm phần tử có class là item và là phần tử con thứ 2 của element cha
// Bước 2. Xóa element khỏi DOM
item2.remove();

// 1.6. Thay đổi attribute của element
// Bước 1. Tìm element cần thay đổi
let btn2 = document.getElementById('btn2');
// Bước 2. Thay đổi attribute
btn2.setAttribute('disabled', true);
// --> lúc này element btn2 sẽ có thuộc tính disabled có giá trị là true

// 2. DOM events
let textInp = document.getElementById('textInp');
// Cách 1: sử dụng thuộc tính on + tên sự kiện 
textInp.onchange = function (e) {
    // console.log(e);
    console.log(e.target.value);
}
// --> mỗi lần nhập vào ô input và ấn enter thì hàm onchange sẽ thực hiện và nó lấy ra giá trị của ô input

// Cách 2: sử dụng hàm addEventListener
textInp.addEventListener('input', function (e) {
    console.log(e.target.value);
})
// --> người dùng nhập gì thì nó sẽ hiển thị ra màn hình ngay lập tức cái đó


// Ví dụ: todo list
let addBtn = document.getElementById('btn-add');
let content = document.querySelector('.content');
addBtn.addEventListener('click', function (e) {
    let text = textInp.value;
    let newItem = document.createElement('li');
    let content = document.querySelector('.content');
    newItem.innerHTML = text;
    content.appendChild(newItem);
    textInp.value = '';
})

