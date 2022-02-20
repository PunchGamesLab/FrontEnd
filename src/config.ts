interface LinksProps {
  signUp: string;
  socials: {
    twitter: string
    discord: string
    telegram: string
  }
}
export const Links: LinksProps = {
  signUp: 'https://forms.gle/byc8wQTyjWBymW9z8',
  socials: {
    twitter: 'https://twitter.com/Punch__Games',
    discord: 'https://t.co/jXQ5tJC75s',
    telegram: 'https://t.co/sNr3UGVcpi '
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
    name: 'Contact',
    id: '#contact',
  },
]