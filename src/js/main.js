import * as bootstrap from 'bootstrap'

let images = document.querySelectorAll('img')
for (let image of images) {
    image.onerror = function () {
        if (!/(placeholder)/.test(image.src)) {
            //window.open(`http://portal.eurosvet.com/images/nomenclatures/1c/eurosvet/images/big/${image.alt}.jpg`, '_blank')
            image.src = 'https://minimir.ru/expo/images/placeholder.png'
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    let hash = window.location.hash.replace("#", ""),
        selector = document.querySelector(`[name=${hash}]`);

    if (selector) {
        setTimeout(function () {
            window.scroll(0, selector.offsetTop - 100);
            selector.setAttribute('tabindex', '-1')
            selector.focus()
            node.removeAttribute('tabindex')
        }, 0)
    }
})