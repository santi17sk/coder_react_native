import React from 'react';
import { Button, TextInput, View } from 'react-native';
import { styles } from './styles';

const AddItem = ({ 
  task, 
  placeholder,
  buttonColor,
  buttonText,
  onHandlerChange, 
  onHandlerSubmit,
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput 
        style={styles.input} 
        placeholder={placeholder}
        autoComplete="off"
        autoCorrect={false}
        autoCapitalize="none"
        value={task}
        onChangeText={onHandlerChange}
      />

      <Button 
        disabled={!task} 
        title={buttonText} 
        color={buttonColor} 
        onPress={onHandlerSubmit}
      />
    </View>
  )
}

export default AddItem;