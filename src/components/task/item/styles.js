import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/theme/colors';

export const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: colors.primary,
    marginBottom: 10,
    borderRadius: 10,
  },
  itemList: {
    fontSize: 14,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  checkbox: {
    margin: 8,
    width: 25,
    height: 25
  },
});