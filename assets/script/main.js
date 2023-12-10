const showMenu = document.getElementById('toggle_menu');
const closeMenu = document.getElementById('close_menu');
const menuLinks = document.getElementById('nav_links');

showMenu.addEventListener('click', () =>{
   menuLinks.classList.add('show_menu')
});

closeMenu.addEventListener('click', () =>{
    menuLinks.classList.remove('show_menu');
    // console.log('ffhk')
 })