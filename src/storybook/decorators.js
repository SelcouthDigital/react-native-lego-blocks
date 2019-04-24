import React from 'react'
import { StyleSheet, View } from 'react-native'
import { addDecorator } from '@storybook/react-native'

const s = StyleSheet.create({
  storyContainer: {
    marginTop: 100
  }
})

const marginDecorator = storyFn => <View style={s.storyContainer}>{storyFn()}</View>

export default () => addDecorator(marginDecorator)
