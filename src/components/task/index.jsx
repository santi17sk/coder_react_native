import React from 'react';
import { FlatList } from 'react-native';
import TaskItem  from './item'
import { styles } from './styles';

const TaskList = ({ tasks, onHandlerModal }) => {

  const keyExtractor = (item) => item.id;

  const renderItem = ({item}) => (
    <TaskItem 
      item={item}
      onHandlerModal={onHandlerModal}
    />
  );

  return (
    <FlatList 
      data={tasks}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      style={styles.listContainer}
    />
  );
}

export default TaskList;