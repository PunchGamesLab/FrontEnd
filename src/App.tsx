import React from 'react'
import Landing from 'views/Landing'
import OurPlatform from 'views/OurPlatform'
// import Page from './components/Page';
import { Page } from './components'
import { CssBaseline } from '@mui/material'
import Contact from 'views/Contact'

function App() {
  return (
    <>
      <CssBaseline />
      <Page>
        <Landing />
        <OurPlatform />
        <Contact />
      </Page>
    </>
  )
}

export default App
