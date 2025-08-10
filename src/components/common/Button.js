import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
import { typography } from '../../styles/typography';

const Button = ({ title, onPress, style, textStyle, type = 'primary', disabled = false }) => {
  const getButtonStyles = () => {
    if (disabled) {
      return styles.disabledButton;
    }
    switch (type) {
      case 'secondary':
        return styles.secondaryButton;
      case 'danger':
        return styles.dangerButton;
      default:
        return styles.primaryButton;
    }
  };

  const getTextStyles = () => {
    if (disabled) {
      return styles.disabledButtonText;
    }
    switch (type) {
      case 'secondary':
        return styles.secondaryButtonText;
      case 'danger':
        return styles.dangerButtonText;
      default:
        return styles.primaryButtonText;
    }
  };

  return (
    <TouchableOpacity
      style={[styles.button, getButtonStyles(), style]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[styles.buttonText, getTextStyles(), textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  buttonText: {
    ...typography.p,
    fontWeight: 'bold',
  },
  primaryButton: {
    backgroundColor: colors.primary,
  },
  primaryButtonText: {
    color: colors.white,
  },
  secondaryButton: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  secondaryButtonText: {
    color: colors.primary,
  },
  dangerButton: {
    backgroundColor: colors.danger,
  },
  dangerButtonText: {
    color: colors.white,
  },disabledButton: {
    backgroundColor: colors.border,
  },
  disabledButtonText: {
    color: colors.textSecondary,
  },
});

export default Button;