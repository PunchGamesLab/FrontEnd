interface Links {
    signUp: string;
    socials: {
        twitter: string
        discord: string
        telegram: string
    }
}
export const Links: Links = {
    signUp: 'https://discord.gg/fjkd4f',
    socials: {
        twitter: 'https://twitter.com/',
        discord: 'https://discord.gg/',
        telegram: 'https://t.me/'
    }
}
  
export const navigation: { name: string; id: string }[] = [
    {
      name: 'Home',
      id: '#home',
    },
    {
      name: 'About',
      id: '#about',
    },
    {
      name: 'Partners',
      id: '#partners',
    },
    {
      name: 'Investors',
      id: '#investors',
    },
    {
      name: 'Contact',
      id: '#contact',
    },
  ]