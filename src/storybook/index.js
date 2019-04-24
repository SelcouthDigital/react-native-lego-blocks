import { getStorybookUI } from '@storybook/react-native'

import configure from './configure'
import setDecorators from './decorators'

configure()
setDecorators()

// Refer to https://github.com/storybooks/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({
  host: 'localhost',
  onDeviceUI: true,
  disableWebsockets: true,
  port: 7007
})

export default StorybookUIRoot
