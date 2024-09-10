import { Image } from 'react-native';



export const Icon = ({ source, size }) => {
  return (
    <Image
      source={source}
      style={{ width: size, height: size }}
    />
  );
};