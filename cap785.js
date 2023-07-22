import "./styles.css";

document.querySelector("#header").addEventListener(
"click",
(e) => {
console.log("Header click");
},
false
);

document.querySelector("#account_links").addEventListener(
"click",
(e) => {
console.log("Account links click");
},
false
);

document.querySelector("#signup").addEventListener(
"click",
() => {
console.log("Sign up button click");
},
false
);

document.querySelector("#signin").addEventListener(
"click",
() => {
console.log("Sign in button click");
},
false
);