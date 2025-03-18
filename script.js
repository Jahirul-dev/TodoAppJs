let getForm = document.getElementById("add");
let getField = document.querySelector('.addForm');
let createNewiL = document.querySelector('.todos')

function genarator(val){
    let htmlCreate = `
          <li
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            <span>${val}</span>
            <i class="far fa-trash-alt delete"></i>
          </li>
    `

    createNewiL.innerHTML += htmlCreate

    
    
}

getForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    let formVal = getForm.add.value
    onclick = getField.value = " "
    console.log(formVal);

    genarator(formVal)
    
    
})












// addForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let valOfIn = document.querySelector(".addForm").value;
//   console.log(valOfIn);

//   createLI.innerHTML = `<li
//             class="list-group-item d-flex justify-content-between align-items-center"
//           >
//             <span>play mariokart</span>
//             <i class="far fa-trash-alt delete"></i>
//           </li>`;
//   getUl.append(createLI);
// });

//console.log(getULinner);

