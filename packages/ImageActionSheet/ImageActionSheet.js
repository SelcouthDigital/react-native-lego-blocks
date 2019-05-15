import { PureComponent } from 'react'
import { Alert } from 'react-native'
import PropTypes from 'prop-types'
import { ImagePicker, Permissions } from 'expo'

export default class ImageActionSheet extends PureComponent {
  static propTypes = {
    onDismiss: PropTypes.func.isRequired,
    title: PropTypes.string,
    visible: PropTypes.bool
  }

  static defaultProps = {
    title: 'Select an option',
    visible: false
  }

  handlePhotoTake = async () => {
    const { onDismiss } = this.props
    try {
      const { status } = await Permissions.askAsync(Permissions.CAMERA)

      if (status !== 'granted') {
        console.warn('Camera permissions denied!')
        return Alert.alert(
          'Permissions denied!',
          `You don't have the access to the camera!`,
          {
            text: 'Cancel',
            onPress: onDismiss,
            style: 'cancel'
          }
        )
      }

      const photo = await ImagePicker.launchCameraAsync()
      console.log(photo)

      return onDismiss()
    } catch (e) {
      console.warn(e)
      return e
    }
  }

  handleSelectFromLibrary = async () => {
    const { onDismiss } = this.props
    try {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)

      if (status !== 'granted') {
        console.warn('Camera Roll permissions denied!')
        return Alert.alert(
          'Permissions denied!',
          `You don't have the access to the camera roll!`,
          {
            text: 'Cancel',
            onPress: onDismiss,
            style: 'cancel'
          }
        )
      }

      const options = {
        base64: true,
        mediaTypes: 'Images'
      }
      const image = await ImagePicker.launchImageLibraryAsync(options)
      console.log(image)

      return onDismiss()
    } catch (e) {
      console.warn(e)
      return e
    }
  }

  render() {
    const { onDismiss, title, visible } = this.props
    const options = [
      {
        text: 'Take a photo',
        onPress: this.handlePhotoTake
      },
      {
        text: 'Select from library',
        onPress: this.handleSelectFromLibrary
      },
      {
        text: 'Cancel',
        onPress: onDismiss,
        style: 'cancel'
      }
    ]
    if (visible) {
      Alert.alert(title, null, options)
    }
    return null
  }
}
