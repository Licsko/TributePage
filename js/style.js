/* SCRIPTS FOR LIGHTBOX GALLERY */

// Main gallery elements
const gallery = document.querySelector('.gallery-area');
const galleryThumbnails = document.querySelectorAll('.gallery-area .small-thumbs');

// Lightbox elements
const lightBox = document.querySelector(".gallery-box-container");
const thumbnailsArea = document.querySelector('.images');
const thumbnails = thumbnailsArea.children;
const displayArea = document.querySelector(".display-pic-area figure");
const arrows = document.querySelectorAll(".arrows");


// Jelenlegi indexszám
let currentIndex;

// Thumbnails from main gallery
for (let j = 0; j < galleryThumbnails.length; j++) {
  galleryThumbnails[j].addEventListener('click', () => {
    lightBox.style.display = 'block';
    galleryThumbnails.forEach(thumb => {
      if (thumb.nodeName == 'IMG') {
        thumbnailsArea.innerHTML += createImageTagForThumbnails(thumb.src,thumb.alt);
      }
      if (thumb.nodeName == 'VIDEO') {
        thumbnailsArea.innerHTML += createVideoTagForThumbnails(thumb.src,thumb.title);
      }
    });
    displayArea.innerHTML = (galleryThumbnails[j].nodeName == 'IMG') ? createImageTag(galleryThumbnails[j].src,galleryThumbnails[j].alt) : createVideoTag(galleryThumbnails[j].src,galleryThumbnails[j].alt);
    showArrows();
    currentIndex = j;
  });
}


// Tagkészítő függvények a Modalbox-ba

let createImageTagForThumbnails = (src, alt) => {
  let tag= `
  <img class="thumbnails" src="${src}" alt="${alt}"  title="${alt}">
  `;
  return tag;
}
let createVideoTagForThumbnails = (src, alt) => {
  let tag= `
  <video class="thumbnails" src="${src}"  title="${alt}"></video>   
  `;
  return tag;
}


for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener("click", function () {
    if(thumbnails[i].nodeName == 'VIDEO') {
      removeActiveClasses();
      thumbnails[i].classList.add("active");
      displayArea.innerHTML = `
      ${createVideoTag(thumbnails[i].src, thumbnails[i].title)}
      `;
    } else {
      removeActiveClasses();
      thumbnails[i].classList.add("active");
      displayArea.innerHTML = `
          ${createImageTag(thumbnails[i].src, thumbnails[i].alt)}
          `;
    }
    showArrows();
  });
}

function nextPic(n) {
  currentIndex += n;
  if(thumbnails[currentIndex].nodeName == 'VIDEO') {
    removeActiveClasses();
    thumbnails[currentIndex].classList.add("active");
    displayArea.innerHTML = `
    ${createVideoTag(thumbnails[currentIndex].src, thumbnails[currentIndex].title)}
    `;
  } else {
    removeActiveClasses();
    thumbnails[currentIndex].classList.add("active");
    displayArea.innerHTML = `
        ${createImageTag(thumbnails[currentIndex].src, thumbnails[currentIndex].alt)}
        `;
  }
}

function removeActiveClasses() {
  for (const pic of thumbnails) {
    pic.classList.remove("active");
  };
}

function showArrows() {
  for (let j = 0; j < arrows.length; j++) {
    arrows[j].style.display = "block";
  }
}

function closeLightBox() {
  lightBox.style.display = "none";
}

function jumpTo(pos) {
  removeActiveClasses();
  currentIndex = pos;
  if(thumbnails[pos].nodeName == 'VIDEO') {
    removeActiveClasses();
    thumbnails[pos].classList.add("active");
    displayArea.innerHTML = `
      ${createVideoTag(thumbnails[pos].src, thumbnails[pos].title)}
    `;
  } else {
    removeActiveClasses();
    thumbnails[pos].classList.add("active");
    displayArea.innerHTML = `
      ${createImageTag(thumbnails[pos].src, thumbnails[pos].alt)}
    `;
  }
  
}

function createImageTag(src, alt) {
    let imageTag = `
    <img src="${src}" alt="${alt}">
    <figcaption>${alt}</figcaption>
    `;
    
    return imageTag;
}

function createVideoTag(src, alt) {
    let videoTag = `
    <video src="${src}" controls></video>
    <figcaption>${alt}</figcaption>
    `;
    
    return videoTag;
}
