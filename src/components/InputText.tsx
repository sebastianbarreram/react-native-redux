import {
  View,
  StyleProp,
  ViewStyle,
  StyleSheet,
  TextInput,
  NativeSyntheticEvent,
  TextInputEndEditingEventData,
} from 'react-native';
import React from 'react';

interface Props {
  style?: StyleProp<ViewStyle>;
  placeHolder: string;
  type?: string;
  handleOnChange: (value: string) => void;
  validateInput?: (
    e: NativeSyntheticEvent<TextInputEndEditingEventData>,
  ) => void;
  value: string;
}

const InputTextContainer = ({
  style,
  placeHolder,
  handleOnChange,
  validateInput,
  value,
}: Props) => {
  const textInput = (
    <TextInput
      style={styles.input}
      placeholder={placeHolder}
      placeholderTextColor="#rgba(0, 0, 0, 0.6)"
      onChangeText={handleOnChange}
      value={value}
      onEndEditing={validateInput}
    />
  );

  return (
    <View style={style}>
      <View style={styles.inputContainer}>{textInput}</View>
    </View>
  );
};

export default InputTextContainer;

const styles = StyleSheet.create({
  icon: {
    height: 56,
    width: 48,
    justifyContent: 'flex-end',
    padding: 10,
  },

  inputContainer: {
    height: 56,
    width: 330,
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderStyle: 'solid',
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
    borderColor: 'rgba(0, 0, 0, 0.38)',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    textAlignVertical: 'center',
    marginLeft: 12,
    color: 'black',
    fontSize: 16,
    width: '82%',
  },
});
