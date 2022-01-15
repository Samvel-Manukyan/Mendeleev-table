'use strict';

let elements = Array.from(document.querySelectorAll('section, .red, .violet')),
    mendeleevElement = document.querySelectorAll('.mendeleev_element');

mendeleevElement.forEach((item) => {
    item.addEventListener('click', (event) => {
        if (!event.currentTarget.classList.contains('rotate')) {
            event.currentTarget.classList.add('rotate');
            event.currentTarget.classList.remove('rotate_reverse');
        } else {
            event.currentTarget.classList.remove('rotate');
            event.currentTarget.classList.add('rotate_reverse');
        }
    });
});

function onResizeElements(color) {
    const clickedElements = Array.from(document.querySelectorAll(`.${color}`));
    let isClickedSecondTime;
    clickedElements.forEach(element => {
        isClickedSecondTime = element.classList.toggle('maximise');
        element.classList.remove('minimise');
    });

    elements.forEach(element => {
        if (isClickedSecondTime && !element.classList.contains(color)) {
            element.classList.add('minimise');
            element.classList.remove('maximise');
        } else if(!element.classList.contains(color)) {
            element.classList.remove('minimise');
            element.classList.remove('maximise');
        }
    });
}
