// Quy ước nhỏ : tất cả biến lưu phần tử html đều có dâu $ ở đầu 

// Truy xuất phần tử thông qua id
// const $title = document.getElementById('big-title');

// console.log($title);

// Truy xuất phần tử thông qua class
// const $paragraphs = document.getElementsByClassName('red-paragraph');

// for (const $paragraph of $paragraphs) {
//     console.log($paragraph.children);
// }

// Truy xuất phần tử thông qua tên thẻ
// const $images = document.getElementsByTagName('img');
// console.log($images);

// document.querySelector(), document.querySelectorAll() => tìm hiểu thêm 
// truy xuất thằng con:$paragraph.children

// lấy ra nội dung của phần tử 
// let titleContent = $title.innerHTML;
// console.log(titleContent);

// $title.innerHTML = "Nội dung mới 😊";

// lấy ra thuộc tính 1 phần tử 
// let titleAttributesValue = $title.getAttribute('id');
// console.log(titleAttributesValue);

// thêm mới/thay đổi thuộc tính 1 phần tử 
// $title.setAttribute('data-goodbye', 'This is goodbye');
// $title.setAttribute('data-Hello', 'This is hello');

// xóa thuộc tính của 1 phần tử 
// $title.removeAttribute('data-goodbye');

// thay đổi định dạng của phần tử 
// $title.style.color = 'red';
// $title.style.backgroundColor = 'black';
// $title.style.display = 'flex';
// $title.setAttribute('title','color: red; background-color: alpha')

// thêm phần tử vào trang web
// const $link = document.createElement('a');
// $link.innerHTML = "This is link to somewhere";
// $link.setAttribute('href','http://google.com/search');

// document.body.prepend($link);
// $title.before($link); // thêm $link vào trước $title
// $title.after($link); // thêm $link vào sau $title
// $title.append($link); // thêm $link vào trong $title

// xóa phần tử trên trang web 
// $title.remove();
// $title.parentElement.remove(); xóa hết 

// listener sau ghi đè listener trước
// $title.onclick = handleClickTitle1;
// $title.onclick = handleClickTitle2;

// thêm listener 
// $title.addEventListener("click", handleClickTitle1);
// $title.addEventListener("click", handleClickTitle2);

// function handleClickTitle1 (){
//     console.log(' Hello');
// }

// function handleClickTitle2 (){
//     console.log('goodbye');
// }

const $emailInput = document.getElementById('my-email');
$emailInput.onchange = function () {
    let email = $emailInput.value; // lấy giá trị nhập vào của ô input
    // if (!isEmailValid(email)) alert('Vui lòng nhập lại email');
    let emailValid = validateEmail(email);
    if (!emailValid) alert('Vui lòng nhập lại');

};

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};