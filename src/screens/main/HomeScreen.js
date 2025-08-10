// import React from 'react';
// import { View, FlatList, StyleSheet } from 'react-native';
// import { jobs } from '../../api/mockData';
// import JobCard from '../../components/home/JobCard';
// import Header from '../../components/common/Header';
// import { colors } from '../../styles/colors';

// const HomeScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Header title="Job Feed" />
//       <FlatList
//         data={jobs}
//         renderItem={({ item }) => <JobCard job={item} />}
//         keyExtractor={(item) => item.id}
//         contentContainerStyle={styles.list}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: colors.background,
//   },
//   list: {
//     paddingHorizontal: 16,
//   },
// });

// export default HomeScreen;

import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Alert } from 'react-native';
import { jobs } from '../../api/mockData';
import JobCard from '../../components/home/JobCard';
import Header from '../../components/common/Header';
import { colors } from '../../styles/colors';

const HomeScreen = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);

  const handleApply = (jobId) => {
    if (appliedJobs.includes(jobId)) {
      return; // Already applied
    }

    Alert.alert("Confirm Application", "Are you sure you want to apply for this job?", [
      {
        text: "Cancel",
        style: "cancel"
      },
      {
        text: "Yes, Apply",
        onPress: () => {
          setAppliedJobs([...appliedJobs, jobId]);
          Alert.alert("Success!", "You have successfully applied for the job.");
        }
      }
    ]);
  };

  return (
    <View style={styles.container}>
      <Header title="Job Feed" />
      <FlatList
        data={jobs}
        renderItem={({ item }) => (
          <JobCard
            job={item}
            onApply={handleApply}
            isApplied={appliedJobs.includes(item.id)}
          />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  list: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
});

export default HomeScreen;