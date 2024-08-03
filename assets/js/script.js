
function slide(){
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    document.getElementById('next').addEventListener('click', () => {
        slides[currentSlide].classList.remove('active');
        slides[currentSlide].classList.add('hiding');
        currentSlide = (currentSlide + 1) % totalSlides;
        slides[currentSlide].classList.add('active');
        setTimeout(() => {
            slides.forEach(slide => slide.classList.remove('hiding'));
        }, 1000);
    });

    document.getElementById('prev').addEventListener('click', () => {
        slides[currentSlide].classList.remove('active');
        slides[currentSlide].classList.add('hiding');
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        slides[currentSlide].classList.add('active');
        setTimeout(() => {
            slides.forEach(slide => slide.classList.remove('hiding'));
        }, 1000);
    }); 
}
slide()

function toogle(){
    const monthly = document.getElementById('monthly');
    const annually = document.getElementById('annually');

    monthly.addEventListener('click', () => {
        monthly.classList.add('active');
        annually.classList.remove('active');
    });

    annually.addEventListener('click', () => {
        annually.classList.add('active');
        monthly.classList.remove('active');
    });
}
toogle()

function month(){
    document.addEventListener('DOMContentLoaded', () => {
        let month = document.querySelector('.toggle-container .month');
        let year = document.querySelector('.toggle-container .year');
        let monthAmount = document.querySelectorAll('.card-plan .cards .price .month');
        let yearAmount = document.querySelectorAll('.card-plan .cards .price .year');
        let monthAmount1 = document.querySelectorAll('.card-plan .cards-1 .price .month');
        let yearAmount1 = document.querySelectorAll('.card-plan .cards-1 .price .year');
    
        year.onclick = () => {
            year.classList.add('active');
            month.classList.remove('active');
    
            monthAmount.forEach(mo => { mo.style.display = 'none'; });
            yearAmount.forEach(yr => { yr.style.display = 'block'; });
            monthAmount1.forEach(mo => { mo.style.display = 'none'; });
            yearAmount1.forEach(yr => { yr.style.display = 'block'; });
        };
    
        month.onclick = () => {
            year.classList.remove('active');
            month.classList.add('active');
    
            monthAmount.forEach(mo => { mo.style.display = 'block'; });
            yearAmount.forEach(yr => { yr.style.display = 'none'; });
            
            monthAmount1.forEach(mo => { mo.style.display = 'block'; });
            yearAmount1.forEach(yr => { yr.style.display = 'none'; });
        };
    });
    
}
month()


function init(){
    
    gsap.registerPlugin(ScrollTrigger);
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    
    ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, 
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });
    
    
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    ScrollTrigger.refresh();
    
}
init()

function page1anim(){
    
gsap.from(".content h1", {
    y:-40,
    duration:1,
    stagger:2,
    opacity:0
})
gsap.to(".content p", {
    y:-10,
    duration:1,
    stagger:2,
    opacity:1
})
gsap.from(".arrow",{
    x:70,
    duration:1,
    opacity:0
})  
gsap.from(".navbar-nav li, .btn, .navbar-brand",{
    y:-20,
    duration:1,
    stagger:0.1,
    opacity:0
})
}
page1anim()
