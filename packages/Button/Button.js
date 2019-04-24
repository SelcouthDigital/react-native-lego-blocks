import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import PropTypes from 'prop-types'

import s from './styles'

const Button = ({
  children,
  onPress,
  outlined,
  type
}) => {
  const styles = {
    container: outlined ? s[type].outlined : s[type].container,
    text: outlined ? s[type].outlinedText : s[type].text
  }
  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <View
        style={[s.button, styles.container]}
      >
        <Text style={styles.text}>{children}</Text>
      </View>
    </TouchableOpacity>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onPress: PropTypes.func.isRequired,
  outlined: PropTypes.bool,
  type: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'text'])
}

Button.defaultProps = {
  outlined: false,
  type: 'text',
}

export default Button
