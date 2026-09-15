let time = 14; // 2:00 PM in 24-hour format

if (time < 12) {
    console.log("Good morning!");
} else if (time < 18) {
    // Runs because 14 is not < 12, but it IS < 18
    console.log("Good afternoon!");
} else {
    console.log("Good evening!");
}