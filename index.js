const uList = document.getElementById('menu');

const title = document.querySelectorAll('.title');

const nav = document.querySelectorAll('nav');

const dropdown = document.querySelectorAll('.dropdown');

/* console.log(uList); */

/* console.log(title); */

/* console.log(nav);

console.log(dropdown); */
/* 
title.onclick = (title) => {
    title.target
} */
uList.onclick = (event) => {

    title.forEach((dropdown) => 
    {
      dropdown.children[0].style.display="none";
    
    });
    
    if (event.target.nodeName === "LI") {
        event.target.children[0].style.display="flex";
    }     

}


/* title.onclick = (title) => {
    title.target
} */

/* uList.forEach((title) => 
{
    title.onclick = (dropdown) => {
        dropdown.style.display="flex";
    }

}); */

/* uList.addEventListener('click', () => {
    dropdown.style.display="flex";
  
})

 */
