import React from 'react'
import { Container, Typography, Box, Card, Grid, CardContent } from '@mui/material'
import { Card1Img, Card2Img, Card3Img, Card4Img, MetaverseImg } from 'assets'
import styled from '@emotion/styled'
import ImageContainer from 'components/ImageContainer'
import useIntersectionObserver, { useInViewContext } from 'helpers'
import Carousel from 'react-material-ui-carousel'

const Indicator = styled('div')`
  background: #294fe4;
  width: 60px;
  height: 5px;
  margin: 0 auto;
  border-radius: 20px;
`

const OurPlatform = () => {
  const ref = React.useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(ref, {})
  const isVisible = !!entry?.isIntersecting

  const { handleChangeViews } = useInViewContext()
  React.useEffect(() => {
    if (isVisible) {
      handleChangeViews({
        home: false,
        about: true,
        partners: false,
        contact: false,
      })
    }
  }, [isVisible, handleChangeViews])

  const cardsConfig: { text: string; img: string; id: number }[] = [
    {
      id: 1,
      text: 'Tokens & NFT releases',
      img: Card1Img,
    },
    {
      id: 2,
      text: 'Esports tournaments',
      img: Card2Img,
    },
    {
      id: 3,
      text: 'Social features like video chatting,live streaming and more',
      img: Card3Img,
    },
    {
      id: 4,
      text: 'All Categories of play to earn games',
      img: Card4Img,
    },
  ]

  return (
    <Container id="about" sx={{ height: '100%' }} maxWidth="xl" ref={ref}>
      <Box>
        <Typography textAlign="center" fontSize={{ xs: '20px', md: '48px' }}>
          Our Platform
        </Typography>
        <Indicator />
        <Typography
          fontFamily="Rubik"
          fontWeight="600"
          textAlign="center"
          fontSize={{ xs: '12px', md: '24px' }}
          marginTop="10px"
        >
          Will Include
        </Typography>
      </Box>
      <Grid
        container
        spacing={2}
        padding="60px 0"
        marginBottom={{ xs: '20px', md: '160px' }}
        sx={{
          display: { xs: 'none', md: 'flex' },
          flexWrap: { xs: 'nowrap', md: 'wrap' },
        }}
      >
        {cardsConfig.map((card) => (
          <Grid item xs={12} sm={3} key={card.id}>
            <Card
              variant="outlined"
              sx={{
                background: `linear-gradient(360deg, rgba(38, 114, 250, 0.67) 29.13%, rgba(196, 196, 196, 0) 91.93%), url(${card.img});
              `,
                backgroundSize: '100% 50%, cover',
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
                <Typography color="white">{card.text}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box
        padding="60px 0 10px"
        marginBottom={{ xs: '80px', md: '160px' }}
        sx={{
          display: { xs: 'box', md: 'none' },
        }}
      >
        <Carousel
          animation="slide"
          indicatorIconButtonProps={{
            style: {
              background: '#E3EDFF',
              color: '#E3EDFF',
              margin: '0 5px',
            },
          }}
          activeIndicatorIconButtonProps={{
            style: {
              background: '#294FE4',
              color: '#294FE4',
            },
          }}
        >
          {cardsConfig.map((card) => (
            <Card
              variant="outlined"
              key={card.id}
              sx={{
                background: `linear-gradient(360deg, rgba(38, 114, 250, 0.67) 29.13%, rgba(196, 196, 196, 0) 91.93%), url(${card.img});
              `,
                backgroundSize: '100% 50%, cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'bottom, center',
                height: '390px',
                borderRadius: '20px',
                border: '1px solid #294FE4',
                display: 'flex',
                alignItems: 'flex-end',
                width: '100%',
                flex: '0 0 100%',
                maxWidth: '343px',
              }}
            >
              <CardContent>
                <Typography color="white">{card.text}</Typography>
              </CardContent>
            </Card>
          ))}
        </Carousel>
      </Box>
      <Box>
        <Typography textAlign="center" fontSize={{ xs: '20px', md: '48px' }}>
          In the Punch Metaverse you can
        </Typography>
        <Indicator />
        <Typography
          fontFamily="Rubik"
          fontWeight="600"
          textAlign="center"
          fontSize={{ xs: '12px', md: '24px' }}
          marginTop="10px"
        >
          EARN MONEY, MAKE FRIENDS and have A LOT OF FUN!
        </Typography>
        <ImageContainer
          url={MetaverseImg}
          sx={{
            maxWidth: { xs: '100%', md: '720px' },
            height: 'fit-content',
            mx: 'auto',
            marginBottom: { xs: '60px', md: '200px' },
          }}
        />
      </Box>
    </Container>
  )
}

export default OurPlatform
