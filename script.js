let addForm = document.querySelector(".add");
let getUl = document.querySelector("ul");
let getULinner = getUl.innerHTML;

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let valOfIn = document.querySelector(".addForm").value;
  console.log(valOfIn);
});

console.log(getULinner[1]);
