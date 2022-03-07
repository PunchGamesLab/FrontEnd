interface LinksProps {
  signUp: string;
  socials: {
    twitter: string
    discord: string
    telegram: string
  }
}
export const Links: LinksProps = {
  signUp: 'https://forms.gle/jkNPfDQPxtYqzcFf8',
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

interface PartnerProps {
  name: string;
  logo: string;
  website: string;
}

export const PartnersList: PartnerProps[] = [
  {
    name: 'Ludena Protocol',
    logo: '/images/partners/Ludena.png',
    website: 'https://www.ludenaprotocol.io/',
  },
  {
    name: 'Yield Guild Games SEA',
    logo: '/images/partners/ygg.png',
    website: 'https://twitter.com/yggsea?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor',
  },
]