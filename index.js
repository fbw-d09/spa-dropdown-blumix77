const uList = document.getElementById('menu');

const title = document.querySelectorAll('.title');

const nav = document.querySelectorAll('nav');

const dropdown = document.querySelectorAll('.dropdown');

uList.onclick = (event) => {

    title.forEach((dropdown) => 
    {
      dropdown.children[0].style.display="none";
    
    });

    if (event.target.nodeName === "LI") { 
        if (event.target.children[0].style.display==="none") {
        event.target.children[0].style.display="flex";
        event.target.children[0].style.flexDirection="column";
        event.target.children[0].style.justifyContent="center";
    } else {
        event.target.children[0].style.display = "none";
    }
    }     

}

