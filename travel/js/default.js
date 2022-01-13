
// jQuery
// $(function(){
//     $('#btn-nav').on({
//         'click':function(){
//           $('.header,.nav').toggleClass('show-nav');
//         },
//     })
// })

// js
window.onload = function(){
    let btnNav = document.getElementById('btn-nav');
    btnNav.addEventListener('click',function(){
    let _header = document.getElementById('header');
    let _nav = document.getElementById('nav');
    _header.classList.toggle('show-nav');
    _nav.classList.toggle('show-nav');
    })
}
   