import React from 'react'
import { Container, Typography, Button, Box } from '@mui/material'
import { LandingImg } from 'assets'
import { ImageContainer } from 'components'
import useIntersectionObserver, { useInViewContext } from 'helpers'
import { Links } from 'config'

const Landing = () => {
  const ref = React.useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(ref, {})
  const isVisible = !!entry?.isIntersecting

  const { handleChangeViews } = useInViewContext()
  React.useEffect(() => {
    if (isVisible) {
      handleChangeViews({
        home: true,
        about: false,
        partners: false,
        contact: false,
      })
    }
  }, [isVisible, handleChangeViews])

  return (
    <Container id="home" sx={{ height: '100vh', paddingTop: '68px' }} maxWidth="xl" ref={ref}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box>
          <Box>
            <Typography color="text.primary" fontSize={{ xs: '32px', md: '64px' }} fontFamily="Rubik" fontWeight="bold">
              Punch Games is a Blockchain-powered Web 3.0 Esports Play-to-earn Gaming Metaverse
            </Typography>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
            }}
          >
            <Button
              variant="contained"
              href={Links.signUp}
              sx={{
                width: '250px',
                background: 'linear-gradient(266.3deg, #5A95FF 10.08%, #2571FA 90.44%)',
                border: '5px solid #E3EDFF',
                boxSizing: 'border-box',
                borderRadius: '500px',
                fontSize: '30px',
              }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
        <ImageContainer url={LandingImg} sx={{ maxWidth: { xs: '325px', md: '43vw' }, height: 'fit-content' }} />
        <Box
          sx={{
            display: { xs: 'flex', md: 'none' },
          }}
        >
          <Button
            variant="contained"
            href={Links.signUp}
            sx={{
              width: '250px',
              background: 'linear-gradient(266.3deg, #5A95FF 10.08%, #2571FA 90.44%)',
              border: '5px solid #E3EDFF',
              boxSizing: 'border-box',
              borderRadius: '500px',
              fontSize: '30px',
            }}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </Container>
  )
}

export default Landing
