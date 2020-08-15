import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerStyles}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#f2f2f2',
    padding: 15
  },
  headerStyles: {
    marginTop: 14,
    textAlign: 'center',
    fontSize: 20
  }
});

export default Header;
