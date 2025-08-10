// import React from 'react';
// import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
// import { colors } from '../../styles/colors';
// import { typography } from '../../styles/typography';

// const Header = ({ title }) => {
//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <View style={styles.header}>
//         <Text style={[styles.title, typography.h1]}>{title}</Text>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   safeArea: {
//     backgroundColor: colors.white,
//   },
//   header: {
//     height: 60,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderBottomWidth: 1,
//     borderBottomColor: colors.border,
//   },
//   title: {
//     color: colors.textPrimary,
//   },
// });

// export default Header;
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { colors } from '../../styles/colors';
import { typography } from '../../styles/typography';

const Header = ({ title }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={[styles.title, typography.h1]}>{title}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.background, // Match the screen background
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'flex-start', // Align title to the left
  },
  title: {
    color: colors.textPrimary,
    fontSize: 32, // Larger title
    fontWeight: 'bold',
  },
});

export default Header;