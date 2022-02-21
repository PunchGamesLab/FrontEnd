import React from 'react'
import { Container, Typography, Card, CardContent, Box } from '@mui/material'
import Button from '@mui/material/Button'
import { Links } from 'config'
import { DiscordIcon, JoinNowImg, TelegramIcon, TwitterIcon } from 'assets'
import { ImageContainer } from 'components'
import { IconButton } from '@mui/material'
import useIntersectionObserver, { useInViewContext } from 'helpers'

const IconButtonStyles = {
  background: 'linear-gradient(266.3deg, #5A95FF 10.08%, #2571FA 90.44%)',
  border: '5px solid #E3EDFF',
  borderRadius: '500px',
  width: { xs: '55px', md: '85px' },
  aspectRatio: '1',
} as const

const Contact = () => {
  const ref = React.useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(ref, {})
  const isVisible = !!entry?.isIntersecting

  const { handleChangeViews } = useInViewContext()
  React.useEffect(() => {
    if (isVisible) {
      handleChangeViews({
        home: false,
        about: false,
        partners: false,
        contact: true,
      })
    }
  }, [isVisible, handleChangeViews])

  return (
    <Container
      id="contact"
      sx={{
        paddingBottom: { xs: '60px', md: '160px' },
      }}
      ref={ref}
      maxWidth="md"
    >
      <Card
        sx={{
          border: '2px solid #2671FA',
          borderRadius: '20px',
        }}
      >
        <CardContent>
          <Box>
            <Typography textAlign="center" fontSize={{ xs: '20px', md: '48px' }}>
              Join our communities
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: { xs: 'center', md: 'center' },
              alignItems: { xs: 'center', md: 'center' },
              my: 2,
            }}
          >
            <Box>
              <Box
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  gap: '20px',
                }}
              >
                <IconButton href={Links.socials.discord} sx={IconButtonStyles} target="_blank" rel="noreferrer">
                  <DiscordIcon width="34px" />
                </IconButton>
                <IconButton href={Links.socials.twitter} sx={IconButtonStyles} target="_blank" rel="noreferrer">
                  <TwitterIcon width="34px" />
                </IconButton>
                <IconButton href={Links.socials.telegram} sx={IconButtonStyles} target="_blank" rel="noreferrer">
                  <TelegramIcon width="34px" />
                </IconButton>
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: 'flex', md: 'none' },
                gap: '20px',
              }}
            >
              <IconButton href={Links.socials.discord} sx={IconButtonStyles}>
                <DiscordIcon width="24px" />
              </IconButton>
              <IconButton href={Links.socials.twitter} sx={IconButtonStyles}>
                <TwitterIcon width="24px" />
              </IconButton>
              <IconButton href={Links.socials.telegram} sx={IconButtonStyles}>
                <TelegramIcon width="24px" />
              </IconButton>
            </Box>
          </Box>
          <Box display="flex" justifyContent="center" my={2}>
            <Button
              variant="contained"
              href={Links.signUp}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                width: { xs: '150px', md: '250px' },
                background: 'linear-gradient(266.3deg, #5A95FF 10.08%, #2571FA 90.44%)',
                border: '5px solid #E3EDFF',
                boxSizing: 'border-box',
                borderRadius: '500px',
                fontSize: { xs: '20px', md: '30px' },
              }}
            >
              Sign Up
            </Button>
          </Box>
          <ImageContainer
            url={JoinNowImg}
            sx={{ maxWidth: { xs: '150px', md: '299px' }, margin: '0 auto', marginTop: 2 }}
          />
        </CardContent>
      </Card>
    </Container>
  )
}

export default Contact
