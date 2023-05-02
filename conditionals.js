// == checks equality of values
// === checks equality of values AND types

// && for and
// || for or
// ! for not

// Order of operations:
// () > ! > && > ||

let x = 7;
let y = 8;
let z = 9;

// if statement syntax

if ((x == y)) {
    console.log("hello");
}
else if (!(x == z)) {
    console.log("hola")
}
else {
    console.log("Goodbye");
}


// Switch Cases
let day = 6;
switch (day) {
    case 0:
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("invalid day")
        break;
}

// Ternary Operator (if else in one line)

let userStatus = 'offline';

// let color;
// if(userStatus === 'offline') {
//     color = 'red';
// }
// else {
//     color = 'green';
// }

let color = userStatus === 'offline' ? 'red' : 'green'; // Same thing as code above