import { StyleSheet } from 'react-native'
import { colors } from '../../../constants'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  filter: {
    flexDirection: 'row',
    gap: 8,
  },
  counter: {
    backgroundColor: colors.gray[400],
    height: 20,
    width: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  counterText: {
    color: colors.gray[200],
    fontSize: 12,
    fontWeight: 'bold',
  },
  created: {
    color: colors.blue,
    fontSize: 14,
    fontWeight: 'bold',
  },
  finished: {
    color: colors.purple,
    fontSize: 14,
    fontWeight: 'bold',
  }

})