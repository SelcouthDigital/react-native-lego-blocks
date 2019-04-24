import { greyScale } from './colors'

const fonts = {
  body: 'Helvetica',
  heading: 'Helvetica-Bold',
}

const sizes = {
  body: 14,
  h1: 60,
  h2: 52,
  h3: 36,
  h4: 26,
  h5: 22,
  h6: 16,
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export default {
  body: {
    color: greyScale.black,
    fontFamily: fonts.body,
    fontSize: sizes.body,
  },
  h1: {
    color: greyScale.black,
    fontFamily: fonts.heading,
    fontSize: sizes.h1,
  },
  h2: {
    color: greyScale.black,
    fontFamily: fonts.heading,
    fontSize: sizes.h2,
  },
  h3: {
    color: greyScale.black,
    fontFamily: fonts.heading,
    fontSize: sizes.h3,
  },
  h4: {
    color: greyScale.black,
    fontFamily: fonts.heading,
    fontSize: sizes.h4,
  },
}
