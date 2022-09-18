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