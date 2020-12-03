import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Amrik Malhans | Web Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description:
    'I am a Full-Stack Web Developer building web applications and websties with MERN Stack and I can help you build a complex web app or a simple static website, or anything in between.', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'React Colors',
    info:
      'This is a React Color Pallete app where you can create and store different palletes, I did this project in the React course I took and learnt to built web apps with React. This was built with React.JS & Material UI.',
    info2: '',
    url: 'https://react-color-palette.vercel.app/',
    repo: 'https://github.com/am-coding/color-palette', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'Soundzbay',
    info: 'This is a static site I made with React.JS for a DJ/Producer friend to market and sell his beats, the owner of the site really liked the work, but we are thinking of revamping the site',
    info2: '',
    url: 'https://soundzbay.firebaseapp.com/',
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'AnimeLab',
    info: 'This is a full stack project I made with templating engine, Node.JS & MongoDB with Auth and API calls, it is an Anime directory site where users can search for animes and add them to their wishlist after creating an account.',
    info2: '',
    url: 'https://animeflixam.herokuapp.com/',
    repo: 'https://github.com/am-coding/aniflix', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'amrikdeveloper@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/am_coding',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/am-coding',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://instagram.com/am.coding',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
