import { Platform, Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width
const platform = Platform.OS
const isIOS = Platform.OS === 'ios'
const isAndroid = Platform.OS === 'android'

export const getWidth = (width) => {
    return deviceWidth * (width / 100)
}

export const getHeight = (height) => {
    return deviceHeight * (height / 100)
}

export const generateFontSize = (size) => {
    return parseInt(size * ((deviceWidth - 20) / 400))
}