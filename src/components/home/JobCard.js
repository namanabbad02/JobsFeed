// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { colors } from '../../styles/colors';
// import { typography } from '../../styles/typography';
// import { timeSince } from '../../utils/helpers';
// import Card from '../common/Card';
// import Button from '../common/Button';
// const JobCard = ({ job }) => {
//   return (
//     <Card>
//     <View style={styles.card}>
//       <Text style={[styles.title, typography.h2]}>{job.title}</Text>
//       <Text style={[styles.company, typography.p]}>{job.company}</Text>
//       <Text style={[styles.location, typography.p]}>{job.location}</Text>
//       <Text style={[styles.date, typography.p]}>{timeSince(new Date(job.postedDate))}</Text>
//       <Button title="Apply Now" onPress={() => alert('Applied!')} />
//     </View></Card>
//   );
// };

// const styles = StyleSheet.create({
//   card: {
//     backgroundColor: colors.white,
//     borderRadius: 8,
//     padding: 16,
//     marginVertical: 8,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   title: {
//     color: colors.textPrimary,
//   },
//   company: {
//     color: colors.textSecondary,
//     marginVertical: 4,
//   },
//   location: {
//     color: colors.textSecondary,
//   },
//   date: {
//     color: colors.textSecondary,
//     marginTop: 8,
//     textAlign: 'right',
//   },
// });

// export default JobCard;

import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../../styles/colors';
import { timeSince } from '../../utils/helpers';
import Button from '../common/Button';

const JobCard = ({ job, onApply, isApplied }) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.logo}>
          <Icon name="briefcase-outline" size={24} color={colors.primary} />
        </View>
        <View style={styles.headerText}>
          <Text style={styles.title}>{job.title}</Text>
          <Text style={styles.company}>{job.company}</Text>
        </View>
      </View>

      <View style={styles.detailsContainer}>
        <View style={styles.detailItem}>
          <Icon name="location-outline" size={16} color={colors.textSecondary} />
          <Text style={styles.detailText}>{job.location}</Text>
        </View>
        <View style={styles.detailItem}>
          <Icon name="time-outline" size={16} color={colors.textSecondary} />
          <Text style={styles.detailText}>{timeSince(new Date(job.postedDate))}</Text>
        </View>
      </View>

      <View style={styles.skillsContainer}>
        {job.skills.map((skill) => (
          <View key={skill} style={styles.skillBadge}>
            <Text style={styles.skillText}>{skill}</Text>
          </View>
        ))}
      </View>

      <Button
        title={isApplied ? "Applied" : "Apply Now"}
        onPress={() => onApply(job.id)}
        disabled={isApplied}
        type={isApplied ? 'secondary' : 'primary'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.cardBackground,
    borderRadius: 16,
    padding: 20,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  logo: {
    width: 48,
    height: 48,
    borderRadius: 8,
    backgroundColor: colors.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  headerText: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.textPrimary,
  },
  company: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 2,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.border,
    paddingVertical: 12,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailText: {
    fontSize: 14,
    color: colors.textSecondary,
    marginLeft: 6,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  skillBadge: {
    backgroundColor: colors.primaryLight,
    borderRadius: 12,
    paddingVertical: 4,
    paddingHorizontal: 12,
    margin: 4,
  },
  skillText: {
    color: colors.primary,
    fontSize: 12,
    fontWeight: '500',
  },
});

export default JobCard;