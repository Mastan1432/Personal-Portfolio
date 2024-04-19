document.addEventListener("DOMContentLoaded",function(){
    const cards=document.querySelectorAll('.card');

    cards.forEach((card) =>{
        const toggle =card.querySelector(".toggle");



        toggle.addEventListener("click",function(){
            card.classList.toggle("active");
        });
    });
});



const iconToggle=document.querySelector('.toggle_icon');
const navbarMenu=document.querySelector('.menu');
const menuLinks =document.querySelectorAll('.menu_link');
const iconClose =document.querySelector('.close_icon');


iconToggle.addEventListener('click',() =>{
    navbarMenu.classList.toggle('active');
})

iconClose.addEventListener('click',() =>{
    navbarMenu.classList.remove('active');
})

menuLinks.forEach((menuLink)=>{
    menuLink.addEventListener('click',()=>{
        navbarMenu.classList.remove('active');
    })
})

// change background header
function scrollHeader(){
    const header=document.getElementById('header');
    this.scrollY >=20 ?  header.classList.add('active'):header.classList.remove('active');
}

window.addEventListener('scroll',scrollHeader);

// hero typed effect
const typed =document.querySelector('.typed');

if(typed){
    let typed_strings= typed.getAttribute('data-typed-items');
    typed_strings=typed_strings.split(',');
    new Typed('.typed',{
        strings: typed_strings,
        loop:true,
        typedSpeed:100,
        backSpeed:50,
        backDelay:2000
    })
}


// scroll section active likn
const sections =document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY =window.scrollY;

    sections.forEach(section =>{
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;

        let sectionId = section.getAttribute('id');

        if(scrollY> sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.menu a[href *=' + sectionId + ']').classList.add('active-link');
        }
        else{
            document.querySelector('.menu a[href *=' + sectionId + ']').classList.remove('active-link');
        }
    })
}

window.addEventListener('scroll',scrollActive);

//resume scroll
const pages =document.querySelectorAll('.page');
const resume =document.querySelector('.resume');

function resumeActive(){
    const scrollY=window.scrollY;


    pages.forEach(page =>{
        const sectionHeight =page.offsetHeight;
        const sectionTop= page.offsetTop - 80;

        let sectionId  = page.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.resume_tabs a[href *=' + sectionId + ']').classList.add('current');
        }
        else{
            document.querySelector('.resume_tabs a[href *=' + sectionId + ']').classList.remove('current');
        }
    })
}

window.addEventListener('scroll',resumeActive);

//---projects---
let filterItems = document.querySelectorAll('.projects_filters li');

function activeprojects(){
    filterItems.forEach(el =>{
        el.classList.remove('filter-active');
        this.classList.add('filter-active');
    })
}

filterItems.forEach(el =>{
    el.addEventListener('click',activeprojects);
})
 //mitup filter

 let mixerprojects =mixitup('.projects_wrap-container',{
    selectors: {
        target: '.projects_items'
    },
    animation:{
        duration:300
    }
 })



