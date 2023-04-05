// localStorage

// Lưu dữ liệu vào localStorage
// localStorage.setItem('name','Anh duy');
// localStorage.setItem('address','Thai Binh');
// localStorage.setItem('weight','50');

// thay đổi cái name thì viết lại localStorage.setItem(...);

// localStorage.setItem('favorites',['a','b','c','d']);
// localStorage.setItem('pet',{type:'cat',name:'Bod',age:'50'});

// lấy dữ liệu từ localStorage
// const value = localStorage.getItem('weight'); // kiểu dữ liệu trả về : string || null
// console.log(value + 10 );

// const favorites = localStorage.getItem('favorites'); 
// console.log(favorites);

// const pet = localStorage.getItem('pet');
// console.log(pet);



// const favorites = ['money', 'sleeping', 'girl'];
// const pet = { type: 'cat', name: 'Bod', age: '2' };
// const users = [
//     { id: 1, name: 'John', usernames: 'user_a', password: '123456' },
//     { id: 2, name: 'Mike', usernames: 'user_b', password: '123456' }
// ];

// biến đổi object | array => string
// const favoritesJSON = JSON.stringify(favorites);
// console.log(favoritesJSON);

// const petJSON = JSON.stringify(pet);
// console.log(petJSON);

// lưu lại users vào localstorage
// const usersJSON = JSON.stringify(users);
// localStorage.setItem('users', usersJSON);
// console.log(usersJSON);

// biến đổi string => object | array
// const newPet = JSON.parse(petJSON);
// console.log(newPet);


// lấy users từ localstorage
// const value = localStorage.getItem('users');
// const newUsers = JSON.parse(value);
// console.log(newUsers);

const $seconds = document.getElementById('seconds');
const $startTimerBtn = document.getElementById('start-timer-btn');
const $pauseTimerBtn = document.getElementById('pause-timer-btn');
const $resetTimerBtn = document.getElementById('reset-timer-btn');

let timer = null;

$startTimerBtn.onclick = function () {
    timer = setInterval(() => {
        let value = $seconds.innerHTML;
        value = value - 1;
        $seconds.innerHTML = value;

        if (value == 0) {
            clearInterval(timer);
            return;
        }
    }, 1000);
};

$pauseTimerBtn.onclick = function () {
    clearInterval(timer);
};

$resetTimerBtn.onclick = function () {
    clearInterval(timer);
    $seconds.innerHTML = 30;
};


// spread
let nums1 = [1,2,3,4];
let nums2 = [8 , 9 ,10];

let res1 = [...nums1, 10,9];

let res2 = [...nums1,...nums2];
console.log(res2);

let part1 = { type: 'cat', name: 'Bob'};

let part2 = { age :20};

let summary = {...part1, ...part2 ,name: 'Peter'};
console.log(summary);


// destructuring 
// let type = summary.type;
// let name = summary.name;

let {type , name} = summary;
console.log(type, name);


let [a, b] = nums1;
console.log(a, b);