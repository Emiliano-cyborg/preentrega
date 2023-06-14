document.addEventListener("DOMContentLoaded", function() {
const dropdowns = document.getElementsByClassName("dropdown")

for(let drop of dropdowns){
  drop.addEventListener("mouseover",function(){
    drop.children[1].classList.remove("d-none")
    drop.children[1].classList.add("d-flex")
  })
  drop.addEventListener("click",function(){
    drop.children[1].classList.add("d-none")
    drop.children[1].classList.remove("d-flex")
  })
}
console.log (dropdowns)
});
