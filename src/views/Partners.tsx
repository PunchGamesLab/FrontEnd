import React from 'react'
import { Container, Typography, Grid } from '@mui/material'
import { ImageContainer } from 'components'
import { PartnersList } from 'config'
import useIntersectionObserver, { useInViewContext } from 'helpers'

const Partners = () => {
  const ref = React.useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(ref, {})
  const isVisible = !!entry?.isIntersecting

  const { handleChangeViews } = useInViewContext()
  React.useEffect(() => {
    if (isVisible) {
      handleChangeViews({
        home: false,
        about: false,
        partners: true,
        contact: false,
      })
    }
  }, [isVisible, handleChangeViews])

  return (
    <>
      <Container
        id="partners"
        sx={{
          paddingBottom: { xs: '60px', md: '160px' },
        }}
        ref={ref}
      >
        <Typography textAlign="center" fontSize={{ xs: '20px', md: '48px' }}>
          Partners
        </Typography>
        <Typography
          fontFamily="Rubik"
          fontWeight="600"
          textAlign="center"
          fontSize={{ xs: '12px', md: '24px' }}
          marginTop="10px"
        >
          Get to know our partners
        </Typography>
        <Grid container marginTop="40px" justifyContent="center" alignItems="center">
          {PartnersList.map((partner) => (
            <Grid item xs={6} sm={3} key={partner.name}>
              <a href={partner.website} target="_blank" rel="noreferrer">
                <ImageContainer
                  url={partner.logo}
                  sx={{
                    img: {
                      filter: 'brightness(0)',
                    },

                    maxWidth: '165px',
                    margin: '0 auto',
                  }}
                  alt={partner.name}
                />
              </a>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default Partners
