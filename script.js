let addForm = document.querySelector(".add");

addForm.addEventListener('submit', e=>{
    e.preventDefault(); 
    let valOfIn = document.querySelector('.addForm').value;
    console.log(valOfIn);
    
})