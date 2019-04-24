import Styles from '../styles'

export default {
  button: {
    borderColor: 'transparent',
    borderWidth: 1,
    ...Styles.textStyles.body,
    padding: 20
  },
  text: {
    container: {
      backgroundColor: 'transparent'
    },
    text: {
      color: Styles.greyScale.black
    }
  },
  primary: {
    container: {
      backgroundColor: Styles.colors.primary
    },
    text: {
      color: Styles.greyScale.white
    }
  },
  secondary: {
    container: {
      backgroundColor: Styles.colors.secondary
    },
    text: {
      color: Styles.greyScale.white
    }
  },
  tertiary: {
    container: {
      backgroundColor: Styles.colors.tertiary
    },
    outlined: {
      backgroundColor: Styles.greyScale.white,
      borderColor: Styles.colors.tertiary
    },
    outlinedText: {
      color: Styles.colors.tertiary
    },
    text: {
      color: Styles.greyScale.white
    }
  }
}
