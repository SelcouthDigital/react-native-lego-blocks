import { configure } from '@storybook/react-native'

import './rn-addons'
import { loadStories } from './storyLoader'

export default () => {
  configure(loadStories, module)
}
