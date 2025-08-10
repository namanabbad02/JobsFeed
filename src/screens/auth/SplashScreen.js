// import React, { useEffect } from 'react';
// import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { colors } from '../../styles/colors';

// const SplashScreen = () => {
//   const navigation = useNavigation();

//   useEffect(() => {
//     setTimeout(() => {
//       navigation.replace('Main');
//     }, 2000);
//   }, [navigation]);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>JobsFeed</Text>
//       <ActivityIndicator size="large" color={colors.primary} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: colors.white,
//   },
//   title: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     color: colors.primary,
//     marginBottom: 20,
//   },
// });

// export default SplashScreen;

import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen'; // Import the library
import { colors } from '../../styles/colors';

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // This is where you would normally load fonts, check for user tokens, etc.
    // Once everything is ready, hide the native splash screen and navigate.
    
    SplashScreen.hide(); // Hide the native splash screen
    navigation.replace('Main'); // Navigate to the main app
  }, [navigation]);

  // This view is only visible for a split second.
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});

export default Splash;