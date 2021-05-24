const lista = document.querySelector('.lista');
const menu =document.querySelector('.menu-navegacion');

console.log(menu)
console.log(lista)

lista.addEventListener('click', ()=>{
   menu.classList.toggle("spread")
} )

