module.exports = {
  siteTitle: 'XR7',
  siteDescription:
    'Just a random fella :)',
  siteKeywords:
    'Roopshree Udaiwal, Roopshree6902, Mern Stack Developer, web developer, javascript, girlscript, jodhpur, GDSC, GFG',
  siteUrl: 'https://xr7777.github.io/Portfolio.me',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'XR7',
  location: 'Delhi,India',
  email: 'samirawm7@gmail.com',
  github: 'https://github.com/xr7-samir',
  twitterHandle: '@Roopshr90263033',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/xr7-samir',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/',
    },
    {
      name: 'Codesandbox',
      url: 'https://codesandbox.io/u/xr7',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/lolwtf139/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
