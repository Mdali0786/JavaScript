const date = new Date();
const day = date.getDay();

let hours = date.getHours();

const format = hours >= 12 ? "PM" : "AM";
if (hours > 12) {
hours = Math.abs(hours - 12);
}

const minutes = date.getMinutes();
const seconds = date.getSeconds();

const weekDays = [
"Sunday",
"Monday",
"Tuesday",
"Wednesday",
"Thursday",
"Friday",
"Saturday",
];

console.log(
`Today is : ${weekDays[day]}\nCurrent Time is : ${hours}:${minutes}:${seconds} ${format}\n`
);