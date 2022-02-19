import React from 'react'
import { Container, Typography, Button, Card, Grid, CardContent } from '@mui/material'
import { Card1Img } from 'assets'

const OurPlatform = () => {
  return (
    <Container id="about" sx={{ height: '100%' }}>
      <Typography>Our Platform</Typography>
      <Typography>Will Include</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3}>
          <Card
            variant="outlined"
            sx={{
              background: `linear-gradient(360deg, rgba(38, 114, 250, 0.67) 29.13%, rgba(196, 196, 196, 0) 91.93%), url(${Card1Img});
          `,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'bottom, center',
              height: '390px',
              borderRadius: '20px',
              border: '1px solid #294FE4',
              display: 'flex',
              alignItems: 'flex-end',
            }}
          >
            <CardContent>
              <Typography color="white">All Categories of play to earn games</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Card
            variant="outlined"
            sx={{
              background: `linear-gradient(360deg, rgba(38, 114, 250, 0.67) 29.13%, rgba(196, 196, 196, 0) 91.93%), url(${Card1Img});
            `,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'bottom, center',
              height: '390px',
              borderRadius: '20px',
              border: '1px solid #294FE4',
              display: 'flex',
              alignItems: 'flex-end',
            }}
          >
            <CardContent>
              <Typography color="white">Tokens &amp; NFT releases</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Card
            variant="outlined"
            sx={{
              background: `linear-gradient(360deg, rgba(38, 114, 250, 0.67) 29.13%, rgba(196, 196, 196, 0) 91.93%), url(${Card1Img});
          `,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'bottom, center',
              height: '390px',
              borderRadius: '20px',
              border: '1px solid #294FE4',
              display: 'flex',
              alignItems: 'flex-end',
            }}
          >
            <CardContent>
              <Typography color="white">Esports tournaments</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Card
            variant="outlined"
            sx={{
              background: `linear-gradient(360deg, rgba(38, 114, 250, 0.67) 29.13%, rgba(196, 196, 196, 0) 91.93%), url(${Card1Img});
          `,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'bottom, center',
              height: '390px',
              borderRadius: '20px',
              border: '1px solid #294FE4',
              display: 'flex',
              alignItems: 'flex-end',
            }}
          >
            <CardContent>
              <Typography color="white">Social features like video chatting,live streaming and more</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Typography>In the Punch Metaverse you can</Typography>
      <Typography>EARN MONEY, MAKE FRIENDS and have A LOT OF FUN!</Typography>
    </Container>
  )
}

export default OurPlatform
