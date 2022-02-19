import { Container, Typography, Button } from '@mui/material'
import React from 'react'

const Landing = () => {
  return (
    <Container id="home" sx={{ height: 'calc(100vh - 97px)' }}>
      <Typography color="text.secondary">
        Punch Games is a Blockchain-powered Web 3.0 Esports Play-to-earn Gaming Metaverse
      </Typography>
      <Button variant="contained">Sign Up</Button>
    </Container>
  )
}

export default Landing
