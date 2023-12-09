const carousel = document.getElementById("carousel");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

const scrollAmount = 2000; 
const scrollDuration = 1500; 

next.addEventListener("click", () => {
    smoothScroll(carousel, scrollAmount, scrollDuration);
});

prev.addEventListener("click", () => {
    smoothScroll(carousel, -scrollAmount, scrollDuration);
});

function smoothScroll(element, scrollAmount, duration) {
    const start = element.scrollLeft;
    const startTime = performance.now();

    function scroll() {
        const elapsed = performance.now() - startTime;
        element.scrollLeft = easeInOut(elapsed, start, scrollAmount, duration);

        if (elapsed < duration) {
            requestAnimationFrame(scroll);
        }
    }

    function easeInOut(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(scroll);
}
