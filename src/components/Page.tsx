import React, { useState, useRef } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import Drawer from '@mui/material/Drawer'
import { Paper } from '@mui/material'
// import Container from '@mui/material/Container'
import { navigation } from 'config'
import useIntersectionObserver from 'helpers'

interface Props {
  children: React.ReactNode
}

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
  const [currentSection, setCurrentSection] = useState<string>('#home')
  const pathname = window.location.pathname
  const isActive = (path: string): boolean => pathname.includes(path) || currentSection === path
  const ref = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(ref, {})
  const isVisible = !!entry?.isIntersecting

  return (
    <Paper sx={{ minHeight: '100vh' }}>
      <AppBar position="static" sx={{ background: '#FFFFFF', height: '97px' }}>
        <Container maxWidth="xl">
          
          <Toolbar disableGutters>
            <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {navigation.map((page) => (
                <Button
                  key={page.name}
                  onClick={null}
                  variant="text"
                  color={isActive(page.id) ? 'primary' : 'secondary'}
                  href={page.id}
                  sx={{ my: 2, display: 'block' }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={null} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
          <Drawer variant="temporary" anchor="left" open={state.left} onClose={toggleDrawer('left', false)}></Drawer>
        </Container>
      </AppBar>
      {children}
      <Container>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#2672FA' }}>
          <Box>copyright</Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {navigation.map((page) => (
              <Button
                key={page.name}
                onClick={null}
                variant="text"
                href={page.id}
                sx={{ my: 2, display: 'block', color: 'white' }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
          <Box>socials</Box>
        </Box>
      </Container>
    </Paper>
  )
}
export default ResponsiveAppBar
