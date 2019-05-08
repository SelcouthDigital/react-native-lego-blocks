import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { State, Store } from '@sambego/storybook-state'

import { CenteredView } from './Views'
import Button from '../../../packages/Button'
import ImageActionSheet from '../../../packages/ImageActionSheet'

const store = new Store({
  visible: false
})

storiesOf('ImageActionSheet', module)
  .add('Basic', () => (
    <CenteredView>
      <Button
        onPress={() => {
          store.set({ visible: true })
        }}
        type="primary"
      >
          Click me
      </Button>
      <State store={store}>
        <ImageActionSheet
          onDismiss={() => store.set({ visible: false })}
          visible={store.visible}
        />
      </State>
    </CenteredView>
  ))
