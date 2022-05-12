const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(()=>{
        splash.classList.add('display-none');
    }, 2000);
})



function togglePopup(){
    document.getElementsById("popup-1").classList.toggle("active");
}