const slides = document.querySelectorAll('.slide');
slides[0].classList.add('active');

for (const slide of slides) {
    slide.addEventListener('click', ()=>{
        clearClasses();

        slide.classList.add('active');

    })
}

const clearClasses = () => {
    slides.forEach((slide)=>{
        slide.classList.remove('active')

    });
}
