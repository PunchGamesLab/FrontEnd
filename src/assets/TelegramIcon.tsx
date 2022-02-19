import * as React from 'react'

const Icon = ({
  height = '24px',
  width = '24px',
  color = 'black',
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 40 35" {...props}>
    <path
      d="M39.7085 2.14201L33.5314 33.2849C33.5314 33.2849 32.668 35.4443 30.2919 34.4077L15.9737 23.4488C17.8982 21.7188 32.8282 8.29614 33.4811 7.68744C34.4903 6.7454 33.864 6.18475 32.6909 6.89719L10.638 20.9019L2.12995 18.0376C2.12995 18.0376 0.790504 17.5624 0.661594 16.5258C0.531921 15.4892 2.17343 14.9278 2.17343 14.9278L36.8579 1.32125C36.8579 1.32125 39.7085 0.068763 39.7085 2.14201Z"
      fill="white"
    />
  </svg>
)

export default Icon