
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

