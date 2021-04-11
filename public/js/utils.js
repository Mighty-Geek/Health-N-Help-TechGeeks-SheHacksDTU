// HOMEPAGE: slider

function Slider(slider) {

    if (!(slider instanceof Element)) {
        throw new Error('No slider passed in');
    }

    let current;
    let prev;
    let next;

    const slides = slider.querySelector('.slides');
    const prevButton = slider.querySelector('.controls .goToPrev');
    const nextButton = slider.querySelector('.controls .goToNext');

    console.log(slides, prevButton, nextButton);

    function startSlider() {
        current = slider.querySelector('.current') ||
            slides.firstElementChild;
        prev = current.previousElementSibling ||
            slides.lastElementChild;
        next = current.nextElementSibling ||
            slides.firstElementChild;
    }

    function applyClasses() {
        current.classList.add('current');
        prev.classList.add('prev');
        next.classList.add('next');
    }

    function move(direction) {
        const classesToRemove = ['prev', 'current', 'next'];
        prev.classList.remove(...classesToRemove);
        current.classList.remove(...classesToRemove);
        next.classList.remove(...classesToRemove);
        if (direction === 'back') {
            [prev, current, next] = [
                prev.previousElementSibling || slides.lastElementChild,
                prev,
                current,
            ];
        }
        else {
            [prev, current, next] = [
                current,
                next,
                next.nextElementSibling || slides.firstElementChild,
            ];
        }

        applyClasses();
    }

    startSlider();
    applyClasses();

    //event-listeners
    prevButton.addEventListener('click', () => move('back'));
    nextButton.addEventListener('click', move);
}

// const mySlider = Slider(document.querySelector('.slider'));
export { Slider };

export function handleError(err) {
    console.log('OH NO!');
    console.log(err);
    window.alert(`Something went wrong: ${err}`);
}

export function wait(ms = 0) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    })
}