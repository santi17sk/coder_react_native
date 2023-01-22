import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Checkbox from 'expo-checkbox';
import { styles } from './styles';

const TaskItem = ({ item, onHandlerModal }) => {
  const [isChecked, setChecked] = useState(false);

  return(
    <TouchableOpacity style={styles.itemContainer} onPress={() => onHandlerModal(item)}>
      <Text style={{
        ...styles.itemList,
        textDecorationLine: isChecked ? 'line-through' : 'none'
      }}>
        {item.value}
      </Text>
      <Checkbox
        style={styles.checkbox}
        value={isChecked}
        onValueChange={setChecked}
        color={isChecked ? '#29007A' : '#fff'}
      />
    </TouchableOpacity>
  );
}

export default TaskItem;