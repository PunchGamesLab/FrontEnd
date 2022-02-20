import React from 'react'
import Landing from 'views/Landing'
import OurPlatform from 'views/OurPlatform'
// import Page from './components/Page';
import { Page } from './components'
import { CssBaseline } from '@mui/material'
import Contact from 'views/Contact'
import Partners from 'views/Partners'

function App() {
  return (
    <>
      <CssBaseline />
      <Page>
        <Landing />
        <OurPlatform />
        <Partners />
        <Contact />
      </Page>
    </>
  )
}

export default App
