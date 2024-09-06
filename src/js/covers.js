const observerdSectionEl = document.querySelector('.section-covers');
const marqueeLines = document.querySelectorAll('.marquee__line');

const observerOptions = {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.1,
} 

const observerCallBack = entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            marqueeLines.forEach(line => {
                line.style.animationPlayState = 'running';
            });
        } else {
            marqueeLines.forEach(line => {
                line.style.animationPlayState = 'paused';
            });
        }
    });
}

const observer = new IntersectionObserver(observerCallBack, observerOptions);

observer.observe(observerdSectionEl);
