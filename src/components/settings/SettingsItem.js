
// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { colors } from '../../styles/colors';

// const SettingsItem = ({ title, icon, isLogout }) => {
//   const itemColor = isLogout ? colors.danger : colors.textPrimary;

//   return (
//     <TouchableOpacity style={styles.item}>
//       <Icon name={icon} size={22} color={itemColor} style={styles.icon} />
//       <Text style={[styles.title, { color: itemColor }]}>
//         {title}
//       </Text>
//       <Icon name="chevron-forward-outline" size={22} color={colors.textSecondary} />
//     </TouchableOpacity>
//   );
// };

// const styles = StyleSheet.create({
//   item: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 18,
//     paddingHorizontal: 20,
//     backgroundColor: colors.white,
//     borderBottomWidth: 1,
//     borderBottomColor: colors.border,
//   },
//   icon: {
//     width: 30, // To align text
//   },
//   title: {
//     marginLeft: 16,
//     flex: 1,
//     fontSize: 16,
//   },
// });

// export default SettingsItem;

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../../styles/colors';

// Add the 'onPress' prop
const SettingsItem = ({ title, icon, isLogout, onPress }) => {
  const itemColor = isLogout ? colors.danger : colors.textPrimary;

  return (
    // Use the 'onPress' prop here
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <Icon name={icon} size={22} color={itemColor} style={styles.icon} />
      <Text style={[styles.title, { color: itemColor }]}>
        {title}
      </Text>
      <Icon name="chevron-forward-outline" size={22} color={colors.textSecondary} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 18,
    paddingHorizontal: 20,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  icon: {
    width: 30, // To align text
  },
  title: {
    marginLeft: 16,
    flex: 1,
    fontSize: 16,
  },
});

export default SettingsItem;