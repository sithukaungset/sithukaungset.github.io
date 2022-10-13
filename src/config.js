module.exports = {
  siteTitle: 'SithuKaungset | Software Engineer | Blockchain Developer',
  siteDescription:
    'SithuKaungSet is a Software Engineer and Blockchain Developer, who loves learning new things and helping tech beginners.',
  siteKeywords:
    ' Sithukaungset, Sithu, Kaungset, sithukaungset, blockchain developer, software engineer, software developer, blockchain, face mask detection, web developer, java developer, cryptocurrency, south korea, watchdog, healthcare, gymbro',
  siteUrl: 'https://sithukaungset.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Sithu Kaung Set',
  location: 'Dongguk Univ, South Korea',
  email: 'sithukaungset27@gmail.com',
  github: 'https://github.com/sithukaungset',
  twitterHandle: '@sithukaungset', 
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/sithukaungset',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/sithukaungset/',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/sithukaungset',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/sithukaungset',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/sithukaungset',
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
