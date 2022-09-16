import * as bootstrap from 'bootstrap'

let images = document.querySelectorAll('img')
for (let image of images) {
    image.onerror = function () {
        if (/(eurosvet.info)/.test(image.src)) {
            image.src = './images/' + image.src.replace(/(https:\/\/eurosvet.info\/catalog\/images\/products\/preview\/1)|(_0001)/gi, '')
        }
    }
}