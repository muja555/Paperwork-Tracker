import { Dimensions } from 'react-native';

// Guideline sizes based on a standard reference screen (e.g., iPhone 11)
const guidelineBaseWidth: number = 375;
const guidelineBaseHeight: number = 812;

// Get current device dimensions
const { width, height } = Dimensions.get('window');

// Horizontal scaling based on screen width
const scale = (size: number): number => (width / guidelineBaseWidth) * size;

// Vertical scaling based on screen height
const verticalScale = (size: number): number =>
  (height / guidelineBaseHeight) * size;

// Moderate scaling (geometric mean of width and height scaling)
const moderateScale = (size: number, factor: number = 0.5): number =>
  size + (scale(size) - size) * factor;

export { scale, verticalScale, moderateScale };
