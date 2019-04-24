import React from 'react'
import { View } from 'react-native'
import { storiesOf } from '@storybook/react-native'

import { CenteredView } from './Views'
import Button from '../../../packages/Button'

storiesOf('Button', module)
  .add('Text', () => (
    <CenteredView>
      <Button
        onPress={() => console.info('pressed')}
      >
        Click me
      </Button>
    </CenteredView>
  ))
  .add('Primary', () => (
    <CenteredView>
      <Button
        onPress={() => console.info('pressed')}
        type="primary"
      >
        Click me
      </Button>
    </CenteredView>
  ))
  .add('Secondary', () => (
    <CenteredView>
      <Button
        onPress={() => console.info('pressed')}
        type="secondary"
      >
        Click me
      </Button>
    </CenteredView>
  ))
  .add('Tertiary', () => (
    <CenteredView>
      <View style={{ flexDirection: 'row' }}>
        <Button
          onPress={() => console.info('pressed')}
          type="tertiary"
        >
        Click me
        </Button>
        <Button
          onPress={() => console.info('pressed')}
          outlined
          type="tertiary"
        >
        Click me
        </Button>
      </View>
    </CenteredView>
  ))
