import { View, Text, StyleSheet, StyleProp, TextStyle } from 'react-native';
import React from 'react';

interface Props {
  id: number | string;
  name: string;
  email: string;
  color?: string;
  counter?: number;
}

const TableRow = ({ id, name, email, color = 'green', counter = 0 }: Props) => {
  let fontWeightText = '400';
  let backgroundColorRow = '';
  if (id === 'Id') {
    fontWeightText = '800';
  }
  if (counter % 2 === 0) {
    backgroundColorRow = 'white';
  } else {
    backgroundColorRow = '#f2f2f2';
  }
  const styles = StyleSheet.create({
    row: {
      flexDirection: 'row',
      backgroundColor: backgroundColorRow,
      justifyContent: 'space-between',
      padding: 5,
    },
    text: {
      fontSize: 16,
      color: color,
      margin: 10,
      width: '40%',
      fontWeight: fontWeightText,
    },
    textId: {
      fontSize: 16,
      color: color,
      margin: 10,
      width: '5%',
      fontWeight: fontWeightText,
    },
  });
  return (
    <View style={styles.row}>
      <Text style={styles.textId as StyleProp<TextStyle>}>{id}</Text>
      <Text style={styles.text as StyleProp<TextStyle>}>{name}</Text>
      <Text style={styles.text as StyleProp<TextStyle>}>{email}</Text>
    </View>
  );
};

export default TableRow;
