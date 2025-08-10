// import React from 'react';
// import { View, ScrollView, StyleSheet } from 'react-native';
// import Header from '../../components/common/Header';
// import SettingsItem from '../../components/settings/SettingsItem';
// import { colors } from '../../styles/colors';

// const SettingsScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Header title="Settings" />
//       <ScrollView>
//         <SettingsItem title="Account" icon="person-outline" />
//         <SettingsItem title="Notifications" icon="notifications-outline" />
//         <SettingsItem title="Privacy" icon="lock-closed-outline" />
//         <SettingsItem title="About" icon="information-circle-outline" />
//         <SettingsItem title="Logout" icon="log-out-outline" isLogout />
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: colors.background,
//   },
// });

// export default SettingsScreen;

import React from 'react';
import { View, ScrollView, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import navigation
import Header from '../../components/common/Header';
import SettingsItem from '../../components/settings/SettingsItem';
import { colors } from '../../styles/colors';

const SettingsScreen = () => {
  const navigation = useNavigation(); // Get navigation object

  // --- Action Handlers ---

  // Placeholder action for most buttons
  const handleComingSoon = (feature) => {
    Alert.alert("Coming Soon", `${feature} functionality is under development.`);
  };

  // Specific action for Logout with a confirmation dialog
  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Logout",
          onPress: () => {
            // In a real app, you would clear user tokens here.
            // We will simulate this by navigating to the splash screen,
            // which will then navigate to the main app, resetting the state.
            navigation.navigate('Splash');
          },
          style: "destructive", // "destructive" gives the button a red color on iOS
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Header title="Settings" />
      <ScrollView>
        <SettingsItem
          title="Account"
          icon="person-outline"
          onPress={() => handleComingSoon("Account")}
        />
        <SettingsItem
          title="Notifications"
          icon="notifications-outline"
          onPress={() => handleComingSoon("Notifications")}
        />
        <SettingsItem
          title="Privacy"
          icon="lock-closed-outline"
          onPress={() => handleComingSoon("Privacy")}
        />
        <SettingsItem
          title="About"
          icon="information-circle-outline"
          onPress={() => handleComingSoon("About")}
        />
        <SettingsItem
          title="Logout"
          icon="log-out-outline"
          onPress={handleLogout} // Use the specific logout handler
          isLogout
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});

export default SettingsScreen;