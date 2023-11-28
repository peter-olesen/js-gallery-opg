const myImages = ['elephant.jpg', 'great-white.jpg', 'koala.jpg', 'smithi.jpg', 'tiger.jpg'];

/* const myGalleryElement = document.getElementById('gallery');

myImages.forEach((image) => {
    let myImage = document.createElement('img');

    myImage.src = 'assets/img/' + image;

    myGalleryElement.appendChild(myImage);
});  */

buildGallery();

function buildGallery(){
    const myGalleryElement = document.getElementById('gallery');
    myImages.forEach(image => {
        buildCard('assets/img/' + image, myGalleryElement)
    });
}

function buildCard(imageUrl, myGalleryElement){
    const myArticle = document.createElement('article');
    const myImage = document.createElement('img');

    myImage.src = imageUrl;

    myImage.addEventListener('click', (event) =>{
        myGalleryElement.innerHTML = '';
        
        buildBigImage(imageUrl, myGalleryElement);
    });

    myArticle.appendChild(myImage);

    myGalleryElement.appendChild(myArticle);
}

function buildBigImage(imageUrl, myGalleryElement){
    const myArticle = document.createElement('article');
    const myImage = document.createElement('img');
    
    myImage.classList.add('bigImage');

    myImage.src = imageUrl;

    myImage.addEventListener('click', (event) =>{
        myGalleryElement.innerHTML = '';
        buildGallery();
    });

    myArticle.appendChild(myImage);

    myGalleryElement.appendChild(myArticle);

}