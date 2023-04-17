let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-toggle');

navBarToggle.addEventListener("click",function(){
    mainNav.classList.toggle('active');
});

let popup =document.getElementById("popup");

function openPopup(){
    popup.classList.add('open-popup')
}
function closePopup(){
    popup.classList.remove('open-popup')
}