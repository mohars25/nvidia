// const links = document.querySelectorAll ("nav li");

// icons.addEventListener("click", () => {
//     nav.classList.toggle("active");
// });

// links.forEach((link)=>{
//     link.addEventListener('click', () => {
//         nav.classList.remove("active");
//     });
// });


const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});


