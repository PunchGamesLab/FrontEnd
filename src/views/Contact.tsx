import React from 'react'
import { Container, Typography, Card, CardContent, Box } from '@mui/material'
import { Links } from 'config'
import { DiscordIcon, JoinNowImg, TelegramIcon, TwitterIcon } from 'assets'
import { ImageContainer } from 'components'
import { IconButton } from '@mui/material'
import useIntersectionObserver, { useInViewContext } from 'helpers'

const IconButtonStyles = {
  background: 'linear-gradient(266.3deg, #5A95FF 10.08%, #2571FA 90.44%)',
  border: '5px solid #E3EDFF',
  borderRadius: '500px',
  width: '85px',
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
        investors: false,
        contact: true,
      })
    }
  }, [isVisible, handleChangeViews])
  console.log('contact is visible', isVisible)

  return (
    <Container
      id="contact"
      sx={{
        paddingBottom: { xs: '60px', md: '160px' },
      }}
      ref={ref}
    >
      <Card
        sx={{
          border: '2px solid #2671FA',
          borderRadius: '20px',
        }}
      >
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: { xs: 'center', md: 'space-between' },
            alignItems: { xs: 'center', md: 'flex-start' },
          }}
        >
          <Box>
            <Box>
              <Typography textAlign="center" fontSize={{ xs: '20px', md: '48px' }}>
                Join our communities
              </Typography>
              <Typography
                fontFamily="Rubik"
                textAlign={{ xs: 'center', md: 'left' }}
                fontSize={{ xs: '12px', md: '24px' }}
              >
                Join Now
              </Typography>
            </Box>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: '20px',
              }}
            >
              <IconButton href={Links.socials.discord} sx={IconButtonStyles}>
                <DiscordIcon width="34px" />
              </IconButton>
              <IconButton href={Links.socials.twitter} sx={IconButtonStyles}>
                <TwitterIcon width="34px" />
              </IconButton>
              <IconButton href={Links.socials.telegram} sx={IconButtonStyles}>
                <TelegramIcon width="34px" />
              </IconButton>
            </Box>
          </Box>
          <ImageContainer url={JoinNowImg} sx={{ maxWidth: '299px' }} />
          <Box
            sx={{
              display: { xs: 'flex', md: 'none' },
              gap: '20px',
            }}
          >
            <IconButton href={Links.socials.discord} sx={IconButtonStyles}>
              <DiscordIcon width="34px" />
            </IconButton>
            <IconButton href={Links.socials.twitter} sx={IconButtonStyles}>
              <TwitterIcon width="34px" />
            </IconButton>
            <IconButton href={Links.socials.telegram} sx={IconButtonStyles}>
              <TelegramIcon width="34px" />
            </IconButton>
          </Box>
        </CardContent>
      </Card>
    </Container>
  )
}

export default Contact
