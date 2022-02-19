import React from 'react'
import styled from '@emotion/styled'
import { Box } from '@mui/material'
import { BoxProps } from '@mui/system'

interface Props extends BoxProps {
  url: string
}
const Img = styled('img')`
  width: 100%;
`

const ImageContainer: React.FC<Props> = ({ url, ...props }) => {
  return (
    <Box {...props}>
      <Img src={url} alt="" />
    </Box>
  )
}

export default ImageContainer
