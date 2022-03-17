import React from 'react'
import { Page } from './components'
import { CssBaseline } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import Home from 'views/Home'
import Terms from 'views/Terms'

function App() {
  return (
    <>
      <CssBaseline />
      <Page>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tos" element={<Terms />} />
        </Routes>
      </Page>
    </>
  )
}

export default App
