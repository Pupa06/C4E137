// 1. Tạo 1 thẻ input:email#my-email. Hãy tạo listener khi giá trị của input thay đổi để kiểm tra định dạng của email nhập vào.
// const $emailInput = document.getElementById('my-email');
// $emailInput.onchange = function () {
//     let email = $emailInput.value; // lấy giá trị nhập vào của ô input
//     // if (!isEmailValid(email)) alert('Vui lòng nhập lại email');
//     let emailValid = validateEmail(email);
//     if (!emailValid) alert('Vui lòng nhập lại');

// };

// const validateEmail = (email) => {
//     return String(email)
//         .toLowerCase()
//         .match(
//             /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//         );
// };

// 2.
// const numberA = document.getElementById("number-a");
// const numberB = document.getElementById("number-b");
// const addBtn = document.getElementById("add-btn");
// const subBtn = document.getElementById("sub-btn");
// const result = document.getElementById("result");

// addBtn.addEventListener("click", () => {
//   const sum = Number(numberA.value) + Number(numberB.value);
//   result.textContent = `Tổng của ${numberA.value} và ${numberB.value} là ${sum}`;
// });

// subBtn.addEventListener("click", () => {
//   const diff = Number(numberA.value) - Number(numberB.value);
//   result.textContent = `Hiệu của ${numberA.value} và ${numberB.value} là ${diff}`;
// });

// 3.
// Lấy đối tượng ảnh và 2 nút
// let myImage = document.getElementById('my-image');
// let increaseBtn = document.getElementById('increase-size-btn');
// let decreaseBtn = document.getElementById('decrease-size-btn');
// let currentWidth = 100;
// let currentHeight = 100;

// increaseBtn.addEventListener('click', function () {
//     currentWidth += 10;
//     currentHeight += 10;
//     myImage.style.width = currentWidth + 'px';
//     myImage.style.height = currentHeight + 'px';
// });

// decreaseBtn.addEventListener('click', function () {
//     currentWidth -= 10;
//     currentHeight -= 10;
//     myImage.style.width = currentWidth + 'px';
//     myImage.style.height = currentHeight + 'px';
// });

// slider 20
// const image = document.getElementById('my-image');
// const urlInput = document.getElementById('url-input');
// const widthInput = document.getElementById('width-input');
// const heightInput = document.getElementById('height-input');
// const borderInput = document.getElementById('border-input');
// const altInput = document.getElementById('alt-input');

// urlInput.addEventListener('input', () => {
//     image.src = urlInput.value;
// });

// widthInput.addEventListener('input', () => {
//     image.width = widthInput.value;
// });

// heightInput.addEventListener('input', () => {
//     image.height = heightInput.value;
// });

// borderInput.addEventListener('input', () => {
//     image.style.borderRadius = `${borderInput.value}px`;
// });

// altInput.addEventListener('input', () => {
//     image.alt = altInput.value;
// });


// slider 23
// const form = document.getElementById("signup-form");
// form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     const fullname = form.elements.fullname.value;
//     const gender = form.elements.gender.value;
//     const age = form.elements.age.value;
//     const address = form.elements.address.value;
//     const email = form.elements.email.value;
//     const password = form.elements.password.value;
//     if (!fullname || !gender || !age || !address || !email || !password) {
//         alert("Nhập đầy đủ thông tin");
//     } else if (!isValidEmail(email)) {
//         alert("Email không hợp lệ");
//     } else {
//         alert("Đăng ký thành công");
//         form.reset();
//     }
// });

// function isValidEmail(email) {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
// }

// 21
const taskList = document.getElementById("new-list");
const newTaskInput = document.getElementById("new-input");
const addTaskButton = document.getElementById("add-btn");

addTaskButton.addEventListener("click", () => {
    const newTaskText = newTaskInput.value;
    if (newTaskText !== "") {
        const newTaskItem = document.createElement("li");
        newTaskItem.textContent = newTaskText;
        taskList.appendChild(newTaskItem);
        newTaskInput.value = "";
    }
});