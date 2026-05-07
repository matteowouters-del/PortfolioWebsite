let carousels = document.querySelectorAll('.window');
carousels.forEach(function(carousel){
    let row = carousel.querySelector('.imagerow');
    let images = carousel.querySelectorAll('.carouselimg');
    
    let index  = 0;
    
    let dotsContainer = document.createElement('div');
    dotsContainer.classList.add('dots');
    let dots = [];

    images.forEach(function(image, index){
        let dot = document.createElement('button');
        dot.classList.add('dot');

        if(index === 0){
            dot.classList.add('active');
        }

        dot.addEventListener('click', function(){
            row.style.transform = `translateX(-${index * 100}%)`;
            dots.forEach(function(dot){
                dot.classList.remove('active');
            })
            dots[index].classList.add('active');
        });
        dotsContainer.appendChild(dot);
        dots.push(dot);
    });
    carousel.appendChild(dotsContainer);
});