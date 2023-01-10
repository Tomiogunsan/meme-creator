

console.log('Memes JS file');

// class Memes {
//     constructor (){
//         console.log ('Inside Memes Class')
//     }
// }

// new Memes ();

const uploadImage = document.querySelector('#image');
const topText = document.querySelector('#top-text');
const bottomText = document.querySelector('#bottom-text');
const button = document.querySelector('#btn');

function createMeme () {
    let context = canvas.getContext('2d');
    if(uploadImage.files && uploadImage.files[0]){
        let reader = new FileReader ();
        reader.onload = () => {
            console.log('file completel');
            let image = new Image();
            image.onload = () => {
                canvas.height = image.h
            };
            image.src = reader.result;
        }
    reader.readAsDataURL(uploadImage.files[0])
    console.log('this will get')
    }
    console.log('rendered');
}

const inputNodes = [topText, bottomText, uploadImage]
inputNodes.forEach(element => element.addEventListener('keyup', createMeme))

// topText.addEventListener('keyup', createMeme);
// bottomText.addEventListener('keyup', createMeme);

// uploadImage.addEventListener('change', () => {
//     const uploadImageURL = URL.createObjectURL(uploadImage.files[0]);
//     image = new Image();
//     image.src = uploadImageURL;
//     console.log(uploadImageURL);
// });

// const canvas = document.querySelector('#canvas');
// if(canvas.getContext('2d')) {
//     function loadTheImage () {
//         console.log('click')
//         const ctx = canvas.getContext('2d');
//         ctx.beginPath();
//         image = new Image();
//         const width = image.width;
//         const height = image.height;
//         const yOffSet = height / 7;
//         canvas.width = width;
//         canvas.height = height;
//         ctx.drawImage(image, 0, 0);

//         // styling the meme text
//         ctx.font ='Bold 30px Sans-serif';
//         ctx.fillStyle = 'white';
//         ctx.strokeStyle = 'black';

//         // adding the top text
//         ctx.textBaseline = 'Top';
//         ctx.fillText(topText.value, width/3, yOffSet);
//         ctx.strokeStyle(topText.value, width/3, yOffSet);

//         // adding the bottom text
//         ctx.textBaseline = 'Bottom';
//         ctx.fillText(bottomText.value, width/3, height - yOffSet);
//         ctx.strokeStyle(bottomText.value, width/3, height - yOffSet);
       

     
//     };
// }else {
//     alert('Your browser does not support this image format');
// };

// button.addEventListener('click', loadTheImage);