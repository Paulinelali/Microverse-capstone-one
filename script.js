let hamburger = document.querySelector(".hamburger");
let cancelMobileMenu = document.querySelector(".cancel-mobile-menu-icon");
let mainNav = document.querySelector(".nav-announcement-wrapper");
let header = document.querySelector(".header");
const body = document.getElementById("body")


function toggleMobileMenu(){
    mainNav.classList.toggle("init-hide");
    hamburger.classList.toggle("init-hide");
    cancelMobileMenu.classList.toggle("init-hide");
    header.classList.toggle("full-height");
}

hamburger.addEventListener("click", () => {
    toggleMobileMenu();
    body.classList.add("no-scroll")
    
    // body.classList.add("no-scroll");
})

cancelMobileMenu.addEventListener("click", () => {
    toggleMobileMenu();
    body.classList.remove("no-scroll")  // document.querySelector(".nav-announcement-wrapper").classList.toggle("init-hide");
    // body.classList.remove("no-scroll");
})












// speakers object

let speakersContainer = document.querySelector(".speakers-wrapper")

const speakers = [
    {
        img: "./assets/contributor1.jpg",
        bg: "./assets/bgFrame.png",
        name: "Mosh Hemdani",
        title: "Software Developer",
        description: "Mosh Hemdani is a postdoctoral software engineer at the SEART research group, at Software Institute, USI, Switzerland.",
    },
    {
        img: "./assets/mother-2.jpg",
        bg: "./assets/bgFrame.png",
        name: "Juliana Pereira",
        title: "Kollagen University",
        description: "Juliana is a Lecturer (Assistant Professor) in Software Engineering at the School of Computing Science, University of Glasgow, United Kingdom.",
    },

    {
        img: "./assets/mother-3.jpg",
        bg: "./assets/bgFrame.png",
        name: "Saba Alimadadi",
        title: "Simon Fraser University",
        description: "Saba Alimadadi is an Assistant Professor in the Department of Computer Science and Engineering at Simon Fraser University.",
    },
    {
        img: "./assets/mother-4.jpg",
        bg: "./assets/bgFrame.png",
        name: "Sven Apel",
        title: "Saarland University",
        description: "Sven Apel is an associate professor in the School of Electrical Engineering and Computer Science at Washington State University, Pullman.",
    }
]

function speaker(speakersArr) {
    const speakersWrapper = document.querySelector(".speakers-wrapper");

    for(let i = 0; i < speakersArr.length; i += 1 ){
        
        
const speakerTemplate = `

<div class="speaker speaker-${i}">
    <div class="img-bg">
        <img src="${speakersArr[i].img}" alt="" class="speaker-image">
    </div>
    <div class="speaker-content">
        <h3 class="speaker-name">${speakersArr[i].name}</h3>
        <p class="speaker-title">${speakersArr[i].title}</p>
        <hr>
        <p>${speakersArr[i].description}</p>
    </div>
</div>
`
speakersWrapper.innerHTML += speakerTemplate;
}
}


// Create show more and show less btn
let ShowMoreOrLess = document.querySelector(".showMoreOrLess");
function showMoreOrLess(text, angle) {
    let btn = `
    <button class="show-more-less">${text} <span>${angle}</span></button>
`
ShowMoreOrLess.innerHTML = btn;
}

function showMore() {
    showMoreOrLess("Show More", "&#8744;");
    let less = document.querySelector(".show-more-less");
    let initHideSpeaker_1 = document.querySelector(".speaker-2")
    let initHideSpeaker_2 = document.querySelector(".speaker-3")

    initHideSpeaker_1.classList.add("init-hide");
    initHideSpeaker_2.classList.add("init-hide");



    function toggleMoreLess() {
        less.classList.toggle("show-less");
        if(less.innerHTML == "Show More <span>∨</span>"){
            less.innerHTML = "Show Less "+ "<span>&#8743;</span>";

            initHideSpeaker_1.classList.remove("init-hide");
            initHideSpeaker_2.classList.remove("init-hide");
        }

        else if(less.innerHTML != "Show More <span>∧</span>"){
            less.innerHTML = "Show More <span>∨</span>";
            initHideSpeaker_1.classList.add("init-hide");
            initHideSpeaker_2.classList.add("init-hide");

        }
        
    }
    less.addEventListener("click", toggleMoreLess)

}



// nav-link

let navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach( link => {
    link.addEventListener("click", () => {
        toggleMobileMenu();
        body.classList.remove("no-scroll")
    })
})

window.onload = () => {
    speaker(speakers);
    showMore()
}