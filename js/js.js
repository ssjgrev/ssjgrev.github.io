//header
const header = document.querySelector(".head");
const navLinks = document.querySelectorAll(".head_item");




//header scroll
window.addEventListener("scroll", checkScroll);


document.addEventListener("scrollf5", checkScroll);


    function checkScroll() {
        let scrollpos = window.scrollY;
    if(scrollpos > 0) {
        header.classList.add("color");
    } else {
        header.classList.remove("color");
    }};



for(let navItem of navLinks) {
    navItem.addEventListener("click", function() {
    });

}

//textfff

