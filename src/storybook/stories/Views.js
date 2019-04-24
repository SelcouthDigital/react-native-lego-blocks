import React from 'react'
import { View } from 'react-native'

const s = {
  centered: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 1,
    justifyContent: 'center'
  }
}

export const CenteredView = ({ children }) => (
  <View style={s.centered}>
    {children}
  </View>
)

export const TopView = ({ children }) => (
  <View>
    {children}
  </View>
)
