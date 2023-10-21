let getSum = function () {
    let res = 0;
    return function (x) {
        res += x;
        return res;
    }
};
let sum = getSum();
console.log(sum(4));
console.log(sum(6)); 
console.log(sum(10));
console.log(sum(7));
let sum2 = getSum(); 
console.log(sum2(4));
console.log(sum2(10));
console.log(sum2(7));
console.log(sum2(3));



let a = prompt('Введіть перше число', '2');
console.log(a);
let b = prompt('Введіть друге число', '4');
console.log(b)
function getProduct(a) {
    return (b) => {
        return res = a*b
    }
}
const dodat = getProduct(a)(b)
console.log(`Добуток двох введених вами чисел ${a}*${b}=${dodat}`)
alert(`Добуток двох введених вами чисел ${a}*${b}=${dodat}`)


function showNumber() {    
    for (let i = 0; i < 5; i++) {
        c = +prompt('Введіть число більше 100', '120');
        console.log(c)
    if (isNaN(c)) {
        alert('Ви ввели не число, спробуйте ще раз');
    } if (c > 100) {
        alert(`Ви ввели число, більше 100, молодець!, ${c}`);
        break;
    }  if (c < 100 && i === 4) {
        alert('Ви так не разу і не ввели число більше 100, до побачення')
        break;
    } if (c < 100) {
        alert('Ви ввели число менше 100, спробуйте ще раз');
    }
    }
}
showNumber();