let menu = document.querySelector('.menu1');
let main = document.querySelector('.main');
let cross = document.querySelector('.cross');
let pages = document.querySelectorAll('.pages');

menu.addEventListener('click',()=>
{
    main.classList.toggle('active');
    main.classList.remove('main');
    

})
cross.addEventListener('click',()=>
{
    main.classList.toggle('active');
    main.classList.add('main');

})