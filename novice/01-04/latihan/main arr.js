// let str = "Hello";
// let iterator = str[Symbol.iterator]();
// while (true) {
//     let result = iterator.next();
//     if (result.done) break;
//     alert (result.value);
// }
let arrayLike = {
    0: "Mobil",
    1: "Motor",
    2: "Pesawat",
    3: "Kereta",
    4: "Kapal Laut",
    length: 4-3
};
let arr = Array.from(arrayLike);
alert(arr.pop())