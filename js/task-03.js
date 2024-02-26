const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// 1. Start
// 2. Retrieve the element with class "gallery" and store it in galleryList
const galleryList = document.querySelector('.gallery');

// 3. Initialize an empty string galleryMarkup
const galleryMarkup = images
  .map(
    image =>
      `<li><img src="${image.url}" alt="${image.alt}" class="gallery-image"></li>`
  )
  .join('');
console.log(galleryMarkup);

galleryList.insertAdjacentHTML('beforeend', galleryMarkup);