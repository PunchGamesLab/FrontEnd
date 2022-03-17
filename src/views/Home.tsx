import React from 'react'
import Landing from './Landing'
import OurPlatform from './OurPlatform'
import Contact from './Contact'
import Partners from './Partners'
import { ReactComponent as CommunitySec } from 'assets/communitySec.svg'

const Home = () => {
  return (
    <>
      <Landing />
      <OurPlatform />
      <Partners />
      <CommunitySec width="100%" height="auto" />
      <Contact />
    </>
  )
}

export default Home
