import theGodFather from './assets/the-god-father.jpg';
import killBill from './assets/kill-bill.jpg';
import shawshankRedemption from './assets/shawshank-redemption.jpg';
import piratesOfTheCaribbean from './assets/pirates-of-the-caribbean.jpg';
import catchMeIfYouCan from './assets/catch-me-if-you-can.jpg';
import beautifulMind from './assets/beautiful-mind.jpg';
import titanic from './assets/titanic.jpg';

export const AVAILABLE_PLACES = [
  {
    id: 'm1',
    title: 'The Godfather',
    image: {
      src: theGodFather,
      alt: 'The Godfather',
    },
    lat: 44.5588,
    lon: -80.344,
  },
  {
    id: 'm2',
    title: 'Kill Bill',
    image: {
      src: killBill,
      alt: 'Kill Bill',
    },
    lat: 25.0,
    lon: 0.0,
  },
  {
    id: 'm3',
    title: 'Shawshank Redemption',
    image: {
      src: shawshankRedemption,
      alt: 'Shawshank Redemption',
    },
    lat: 27.9881,
    lon: 86.925,
  },
  {
    id: 'm4',
    title: 'Pirates of the Caribbean',
    image: {
      src: piratesOfTheCaribbean,
      alt: 'Pirates of the Caribbean',
    },
    lat: 18.2208,
    lon: -66.5901,
  },
  {
    id: 'm5',
    title: 'Catch Me If You Can',
    image: {
      src: catchMeIfYouCan,
      alt: 'Catch Me If You Can.',
    },
    lat: 37.9715,
    lon: 23.7257,
  },
  {
    id: 'm6',
    title: 'A Beautiful Mind',
    image: {
      src: beautifulMind,
      alt: 'A Beautiful Mind',
    },
    lat: -3.4653,
    lon: -62.2159,
  },
  {
    id: 'm7',
    title: 'Titanic',
    image: {
      src: titanic,
      alt: 'Titanic',
    },
    lat: 64.9631,
    lon: -19.0208,
  },
];
