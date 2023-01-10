

console.log('Memes JS file');

// class Memes {
//     constructor (){
//         console.log ('Inside Memes Class')
//     }
// }

// new Memes ();

const uploadImage = document.querySelector('#image');
const topTextInput = document.querySelector('#top-text').value.toUpperCase();
const bottomTextInput = document.querySelector('#bottom-text').value.toUpperCase();
const button = document.querySelector('#btn');
const canvas = document.querySelector('#canvas')

const topText = topTextInput.value.toUpperCase();
const bottomText = bottomTextInput

function createMeme () {
    let context = canvas.getContext('2d');
    if(uploadImage.files && uploadImage.files[0]){
        let reader = new FileReader ();
        reader.onload = () => {
            console.log('file completel');
            let image = new Image();
            image.onload = () => {
                canvas.height = image.height;
                canvas.width = image.width;
                context.clearRect(0, 0 ,canvas.height, canvas.width);
                context.drawImage(image, 0, 0);
                let fontSize = ((canvas.height + canvas.width)/ 2) * 4/100;
                context.font = `${fontSize}px sans-serif`;
                context.textAlign = 'center';
                context.textBaseline = 'top';
                context.lineWidth = fontSize/5;
                context.strokeStyle = 'black';
                context.fillStyle = 'white';

                // toptext
                context.strokeText(topText, canvas.width/2, canvas.height*(5/100)); 
                context.fillText(topText, canvas.width/2, canvas.height*(5/100));
                // bottomtext
                context.strokeText(bottomText, canvas.width/2, canvas.height*(90/100)); 
                context.fillText(bottomText, canvas.width/2, canvas.height*(90/100));

                context.lineJoin = 'round';
            };
            image.src = reader.result;
            console.log(reader.result)
        }
    reader.readAsDataURL(uploadImage.files[0])
    console.log('this will get')
    }
    console.log('rendered');
}

// const inputNodes = [topText, bottomText, uploadImage]
// inputNodes.forEach(element => element.addEventListener('keyup', createMeme))

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