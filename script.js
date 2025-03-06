let addForm = document.querySelector(".add");
let getUl = document.querySelector("ul");
let getULinner = getUl.innerHTML;
let createLI = document.createElement("tr");

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let valOfIn = document.querySelector(".addForm").value;
  console.log(valOfIn);
});

//console.log(getULinner);

createLI.innerHTML = `<li
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            <span>play mariokart</span>
            <i class="far fa-trash-alt delete"></i>
          </li>`;
