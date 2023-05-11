//чутка помог ;)))

let gallery_array = ['cocoa_gallery.png', 'bread_gallery.png', 'croissant_gallery.png']
let arrow_right = document.querySelector('.arrow_right');
let gallery = document.querySelector('.gallery');

arrow_right.addEventListener('click', function () {
    let x = Math.round(Math.random()*2);    
    gallery.setAttribute('src', './img/' + gallery_array[x]);
});


let arrow_left = document.querySelector('.arrow_left');

arrow_left.addEventListener('click', function () {
    let x = Math.round(Math.random()*2);    
    gallery.setAttribute('src', './img/' + gallery_array[x]);
});
