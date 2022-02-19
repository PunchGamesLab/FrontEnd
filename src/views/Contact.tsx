import React from 'react'
import { Container, Typography, Button, Card, CardContent } from '@mui/material'
import { Links } from 'config'
import { JoinNowImg } from 'assets'

const Contact = () => {
  return (
    <Container id="contact">
      <Card>
        <CardContent>
          <Typography>Join our communities</Typography>
          <Typography>Join Now</Typography>
          <Button href={Links.socials.discord}>Discord</Button>
          <Button href={Links.socials.telegram}>twitter</Button>
          <Button href={Links.socials.telegram}>telegram</Button>
          <img src={JoinNowImg} alt="join now" />
        </CardContent>
      </Card>
    </Container>
  )
}

export default Contact
