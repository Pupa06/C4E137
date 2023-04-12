// 1
function isPrimeNumber(number) {
    if (number < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

function calculate() {
    const a = parseInt(document.getElementById("a").value);
    const b = parseInt(document.getElementById("b").value);

    if (isNaN(a) || isNaN(b) || a >= b) {
        document.getElementById("result").innerHTML =
            "Vui lòng nhập đúng giá trị a, b (a < b)";
        return;
    }

    let sum = 0;

    for (let i = a; i <= b; i++) {
        if (isPrimeNumber(i)) {
            sum += i;
        }
    }

    document.getElementById("result").innerHTML = `Tổng các số nguyên tố trong khoảng [${a}, ${b}] là ${sum}`;
}

//2
function numberOneTriangle(n) {
    let row = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            row += "* ";
        }
        row += "<br>";
    }
    document.getElementById("triangle").innerHTML = row;
}
numberOneTriangle(4);

