import './general.js';

console.log('Memes JS file');

// class Memes {
//     constructor (){
//         console.log ('Inside Memes Class')
//     }
// }

// new Memes ();

const uploadImage = document.querySelector('#avatar');
const topText = document.querySelector('#top-text');
const bottomText = document.querySelector('#bottom-text');
const button = document.querySelector('#btn');

uploadImage.addEventListener('change', () => {
    const uploadImageURL = URL.createObjectURL(uploadImage.files[0]);
    image = new Image();
    image.src = uploadImageURL;
});

const canvas = document.querySelector('#canvas');
if(canvas.getContext('2d')) {
    const loadTheImage = () => {
        const ctx = canvas.getContext('2d');
        ctx.beginPath();
        const width = image.width;
        const height = image.height;
        const yOffSet = height / 7;
        canvas.width = width;
        v
    }
}