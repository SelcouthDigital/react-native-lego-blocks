import React, { PureComponent } from 'react'
import { storiesOf } from '@storybook/react-native'

import { CenteredView } from './Views'
import Button from '../../../packages/Button'
import ImageActionSheet from '../../../packages/ImageActionSheet'

class ImageActionSheetWrapper extends PureComponent {
  state = {
    visible: false
  }

  render() {
    const { visible } = this.state

    return (
      <CenteredView>
        <Button
          onPress={() => {
            this.setState({ visible: true })
          }}
          type="primary"
        >
          Click me
        </Button>
        <ImageActionSheet
          onDismiss={() => this.setState({ visible: false })}
          visible={visible}
        />
      </CenteredView>
    )
  }
}

storiesOf('ImageActionSheet', module).add('Basic', () => (
  <ImageActionSheetWrapper />
))
