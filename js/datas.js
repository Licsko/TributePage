/* KÉPEK IMPORTÁLÁSA A GALÉRIÁBA */

// A geléria terület kiválasztása
const galleryArea = document.querySelector('.gallery-area');

// Galéria adatok
const media = {
  images: [
    {
      src: "img/cserko.jpg",
      alt: "Egy üveg cseresznye befőtt Mamám kamrájában.",
      search: "cserkó",
    },
    {
      src: "img/mama_dediek.jpg",
      alt: "Mamám a Dédiékkel - A Nagymamám középen látható",
      search: "dédiékkel",
    },
    {
      src: "img/mama_cipzar_1.jpg",
      alt: "Mama belépőkártyája a cipzárgyárba",
      search: "belépőkártya",
    },
    {
      src: "img/ujsagcikk.jpg",
      alt: "A képen, az eredeti újságcikk található. Az ELSŐ TALÁLKOZÁS című rovat tetején láthatjuk a Mamám jobbra, és testvérét Vilit balra",
      search: "újságcikk",
    },
  ],
  videos: [
    {
      src: "vids/vid001.mp4",
      alt: "Egy üveg cseresznye befőtt Mamám kamrájában.",
      search: "cserkó",
    },
    {
      src: "vids/vid002.mp4",
      alt: "Egy üveg cseresznye befőtt Mamám kamrájában.",
      search: "cserkó",
    },
    {
      src: "vids/vid003.mp4",
      alt: "Egy üveg cseresznye befőtt Mamám kamrájában.",
      search: "cserkó",
    },
    {
      src: "vids/vid004.mp4",
      alt: "Egy üveg cseresznye befőtt Mamám kamrájában.",
      search: "cserkó",
    },
    {
      src: "vids/vid005.mp4",
      alt: "Egy üveg cseresznye befőtt Mamám kamrájában.",
      search: "cserkó",
    },
    {
      src: "vids/vid006.mp4",
      alt: "Egy üveg cseresznye befőtt Mamám kamrájában.",
      search: "cserkó",
    },
    {
      src: "vids/vid007.mp4",
      alt: "Egy üveg cseresznye befőtt Mamám kamrájában.",
      search: "cserkó",
    },
    {
      src: "vids/vid008.mp4",
      alt: "Egy üveg cseresznye befőtt Mamám kamrájában.",
      search: "cserkó",
    },
  ],
};

// Belépés a médiaanyagokhoz
let images = media.images;
let videos = media.videos;

// Image elem létrehozása a galériához
let picsToGallery = (src, alt) => {
  let tag = `
  <img class="small-thumbs" src="${src}" alt="${alt}" title="${alt}">
  `;
  
  return galleryArea.innerHTML += tag;
};

// Video elem létrehozása a galériához
let vidsToGallery = (src, alt) => {
  let tag = `
  <video class="small-thumbs" src="${src}" title="${alt}"></video>
  `;

  return galleryArea.innerHTML += tag;
};

// Médiaanyagok importálása a galériába ciklusokkal, és az elem létrehozó függvényekkel
for (let i = 0; i < media.images.length; i++) {
  picsToGallery(images[i].src, images[i].alt);
}
for (let k = 0; k < media.videos.length; k++) {
  vidsToGallery(media.videos[k].src, media.videos[k].alt);
}




