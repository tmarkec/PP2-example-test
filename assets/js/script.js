const fruits = ["🍌", "🍏", "🍊", "🍌", "🍌", "🍏", "🍊", "🍏", "🍊", "🍊", "🍏", "🍌"];

let bnana = document.getElementById("banana-shelf");
let orange = document.getElementById("orange-shelf");
let apple = document.getElementById("apple-shelf");

function sortFruit() {
    for (let fruit of fruits) {
        if (fruit === "🍌") {
            bnana.innerHTML += ` ${fruit}`;
        } else if (fruit === "🍊") {
            orange.innerHTML += ` ${fruit}`;
        } else {
            apple.innerHTML += ` ${fruit}`;
        }
    }
}

sortFruit()


//similar approach to the problem, have a  look at the loops in both examples which approach your prefer and understand more
// const fruits = ["🍌", "🍏", "🍊", "🍌", "🍌", "🍏", "🍊", "🍏", "🍊", "🍊", "🍏", "🍌"];

// let bananaShelf = document.getElementById("banana-shelf");
// let orangeShelf = document.getElementById("orange-shelf");
// let appleShelf = document.getElementById("apple-shelf");

// function sortFruit() {
//     for (let i = 0; i < fruits.length; i++) {
//         if (fruits[i] === "🍌") {
//             bananaShelf.innerHTML += ` ${fruits[i]}`;
//         } else if (fruits[i] === "🍊") {
//             orangeShelf.innerHTML += ` ${fruits[i]}`;
//         } else {
//             appleShelf.innerHTML += ` ${fruits[i]}`;
//         }
//     }
// }


