import { StyleSheet } from 'react-native';
import { theme } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginVertical: 10,
  },
  number: {
    fontSize: 40,
    fontWeight: 'bold',
    color: theme.colors.black,
  },
});