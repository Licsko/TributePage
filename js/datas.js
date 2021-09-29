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
      src: "img/mama_en.jpg",
      alt: "Mama és én egy vendégségben.",
      search: "sanyika",
    },
    {
      src: "img/mama-bontas.jpg",
      alt: "Mama épp kicsomagolja az ajándékát. Ekkor új TV-t kapott.",
      search: "ajándék",
    },
    {
      src: "img/mama-kriszta-eskuvo.jpg",
      alt: "Mama Kriszti esküvőjén.",
      search: "esküvő",
    },
    {
      src: "img/mama-kriszta-tomi-eskuvo.jpg",
      alt: "Mama Krisztiék esküvőjén. Balról: Tomi, Mama, Kriszti.",
      search: "esküvő",
    },
    {
      src: "img/mama-kriszta.jpg",
      alt: "Mama Krisztivel.",
      search: "kriszti",
    },
    {
      src: "img/unnepiteritek.jpg",
      alt: "Így nézett ki egy ünnepi teríték Mamánál.",
      search: "evés",
    },
    {
      src: "img/zaba.jpg",
      alt: "itt meg már eszünk is.",
      search: "evés",
    },
    {
      src: "img/mama-sanyi-harminc.jpg",
      alt: "Egy nagy családi-, és baráti kép a 30. szülinapomról, amin Mama is ott volt.",
      search: "sanyika",
    },
    {
      src: "img/mama-virag-ballagas.jpg",
      alt: "Mama Virággal, Virág ballagása után.",
      search: "virág",
    },
    {
      src: "img/mama-vivi-szalag.jpg",
      alt: "Mama Vivi szalagavatóján.",
      search: "vivi",
    },
    {
      src: "img/mama-titi.jpg",
      alt: "Titi felköszönti Mamát.",
      search: "ajándék",
    },
    {
      src: "img/mama-nevet.jpg",
      alt: "Mama! Lehet tudni, hogy minek örülsz? :D",
      search: "mama",
    },
    {
      src: "img/mama-virag.jpg",
      alt: "Mama Virággal.",
      search: "virág",
    },
    {
      src: "img/mama-vivike.jpg",
      alt: "Mama Vivikével.",
      search: "vivi",
    },
    {
      src: "img/mama-kriszta2.jpg",
      alt: "Mama Krisztivel.",
      search: "kriszti",
    },
    {
      src: "img/mama-vidam1.jpg",
      alt: "Egy jó ízű, vidám beszélegtés a családdal.",
      search: "család",
    },
    {
      src: "img/mama-kriszta2.jpg",
      alt: "Mama Krisztivel.",
      search: "kriszti",
    },
  ],
  videos: [
    {
      src: "vids/mama-deni.mp4",
      alt: "Mama megsimogatja Denit.",
      search: "deni",
    },{
      src: "vids/mama-deni.mp4",
      alt: "Mama megsimogatja Denit.",
      search: "deni",
    },{
      src: "vids/mama-deni.mp4",
      alt: "Mama megsimogatja Denit.",
      search: "deni",
    },
  ]
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




