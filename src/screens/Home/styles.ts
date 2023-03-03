import { StyleSheet } from "react-native";
import { colors } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[600],
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  containerText: {
    color: colors.gray[300],
  },
  tasks: {
    width: '100%',
    paddingHorizontal: 24,
    gap: 20,
  },
  filters: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  filter: {
    flexDirection: 'row',
    gap: 8,
  }
});