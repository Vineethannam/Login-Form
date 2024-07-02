const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnlogin = document.querySelector(".btnlogin-popup");
const iconClose = document.querySelector(".close-icon");


registerLink.addEventListener('click',()=>{
    wrapper.classList.add('activate')
})
btnlogin.addEventListener('click',()=>{
    wrapper.classList.add('activate-popup')
})
iconClose.addEventListener('click',()=>{
    wrapper.classList.remove('activate-popup')
})
loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('activate')
})