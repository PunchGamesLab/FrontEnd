import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer'
import { List, ListItemButton, Paper } from '@mui/material'
import { navigation, Links } from 'config'
import { InViewContext } from 'helpers'
import ImageContainer from './ImageContainer'
import { PunchLogo, PaymentProviders, DiscordIcon, TelegramIcon, TwitterIcon } from 'assets'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import Slide from '@mui/material/Slide'

interface Props {
  children: React.ReactNode
}
interface HideOnScrollProps {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window
  children: React.ReactElement
}

function HideOnScroll(props: HideOnScrollProps) {
  const { children, window } = props
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  })

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

const IconButtonStyles = {
  background: 'linear-gradient(266.3deg, #5A95FF 10.08%, #2571FA 90.44%)',
  border: '5px solid #E3EDFF',
  borderRadius: '500px',
  width: '60px',
  aspectRatio: '1',
} as const

const ResponsiveAppBar: React.FC<Props> = ({ children, ...props }) => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  })

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }

    setState({ ...state, [anchor]: open })
  }
  const [currentSection, setCurrentSection] = useState({
    home: true,
    about: false,
    partners: false,
    contact: false,
  })

  const scrollTo = (id: string) => {
    const section = document.querySelector(id)
    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <Paper sx={{ minHeight: '100vh' }}>
      <InViewContext.Provider value={{ views: currentSection, handleChangeViews: setCurrentSection }}>
        <HideOnScroll {...props}>
          <AppBar sx={{ background: '#FFFFFF', height: '68px' }} elevation={0}>
            <Container maxWidth="xl">
              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
                <IconButton color="primary">
                  <MenuIcon onClick={toggleDrawer('left', true)} fontSize="large" />
                </IconButton>
                <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, color: 'black' }}>
                  Punch
                </Typography>
              </Box>
              <Toolbar disableGutters>
                <Box
                  sx={{
                    flexGrow: 1,
                    display: { xs: 'none', md: 'flex' },
                    alignItems: 'center',
                    gap: '10px',
                  }}
                >
                  <ImageContainer url={PunchLogo} sx={{ width: '45px' }} />
                  <Typography variant="h4" noWrap component="div" sx={{ flexGrow: 1, color: 'black' }}>
                    Punch
                  </Typography>
                </Box>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                  {navigation.map((page) => (
                    <Button
                      key={page.name}
                      onClick={scrollTo.bind(null, page.id)}
                      variant="text"
                      sx={{
                        my: 2,
                        display: 'block',
                        color: currentSection[page.id.replace('#', '')] ? 'text.sceondary' : 'text.primary',
                        fontFamily: 'Rubik',
                        fontWeight: 'bold',
                      }}
                    >
                      {page.name}
                    </Button>
                  ))}
                </Box>
              </Toolbar>
              <Drawer variant="temporary" anchor="left" open={state.left} onClose={toggleDrawer('left', false)}>
                <Box>
                  <List>
                    {navigation.map((page) => (
                      <ListItemButton
                        key={page.name}
                        onClick={toggleDrawer('left', false) && scrollTo.bind(null, page.id)}
                        sx={{
                        color: currentSection[page.id.replace('#', '')] ? 'text.sceondary' : 'text.primary',
                        }}
                      >
                        {page.name}
                      </ListItemButton>
                    ))}
                  </List>
                </Box>
              </Drawer>
            </Container>
          </AppBar>
        </HideOnScroll>
        {children}
        <Box
          sx={{
            background: '#2672FA',
            p: { xs: '30px', md: '30px 130px' },
            '*': {
              fontFamily: 'Rubik',
            },
          }}
        >
          <ImageContainer url={PunchLogo} sx={{ width: '51px' }} />
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                maxWidth: { md: '390px' },
              }}
            >
              <Typography color="white">
                Punch Games is a Blockchain-powered Web 3.0 Esports Play-to-earn Gaming Metaverse
              </Typography>
              <ImageContainer
                url={PaymentProviders}
                sx={{
                  maxWidth: '270px',
                }}
              />
            </Box>
            <Box sx={{ flexGrow: 1, display: 'flex', flexWrap: 'wrap' }}>
              {navigation.map((page) => (
                <Button
                  key={page.name}
                  onClick={scrollTo.bind(null, page.id)}
                  variant="text"
                  sx={{ my: 2, display: 'block', color: 'white', fontFamily: 'Rubik', fontWeight: 'bold' }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>
            <Box
              sx={{
                display: 'flex',
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
          <Box>
            <Typography fontFamily="Rubik" textAlign="center" color="white" fontSize={{ xs: '12px', md: '16px' }}>
              ©2021 DREPUBLIC, INC. ALL RIGHTS RESERVED.
            </Typography>
          </Box>
        </Box>
      </InViewContext.Provider>
    </Paper>
  )
}
export default ResponsiveAppBar
