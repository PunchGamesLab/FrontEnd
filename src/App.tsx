import React from 'react'
import Landing from 'views/Landing'
import OurPlatform from 'views/OurPlatform'
// import Page from './components/Page';
import ResponsiveAppBar from './components/Page'
import { CssBaseline } from '@mui/material'
import Contact from 'views/Contact'

function App() {
  return (
    <>
      <CssBaseline />
      <ResponsiveAppBar>
        <Landing />
        <OurPlatform />
        <Contact />
      </ResponsiveAppBar>
    </>
  )
}

export default App
