const colors = document.querySelectorAll(".color");
colors.forEach((color) => {
color.addEventListener("click", () => {
const colorValue = color.style.backgroundColor;
console.log(`This color is ${colorValue}`);
});
});