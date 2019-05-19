function mouseOver() {
    var style = document.createElement('style');

    style.innerHTML = '#image1 {' + 'border: 3px solid red;' + '}';

    var ref = document.querySelector('script');

    ref.parentNode.insertBefore(style, ref);
}

function mouseOut() {
    var style = document.createElement('style');

    style.innerHTML = '#image1 {' + 'border: none;' + '}';

    var ref = document.querySelector('script');

    ref.parentNode.insertBefore(style, ref);
}