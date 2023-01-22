import React, { useState } from 'react';
import { View } from 'react-native';
import { AddItem, CustomModal, TaskList } from './components';
import { colors } from './constants/theme/colors';
import { styles } from './styles';

const App = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const onHandlerChange = (text) => {
    setTask(text)
  }

  const onHandlerSubmit = () => {
    setTasks([
      ...tasks,
      {
        id: Math.random().toString(),
        value: task
      }
    ]);
    setTask('');
  }

  const onHandlerModal = (item) => {
    setIsModalVisible(!isModalVisible)
    setSelectedTask(item);
  }
  
  const onHandleCancel = () => {
    setIsModalVisible(!isModalVisible);
    setSelectedTask(null);
  }

  const onHandleDelete = () => {
    setTasks((prevTaskList) => prevTaskList.filter((task) => task.id !== selectedTask.id));
    setIsModalVisible(!isModalVisible);
  }

  return (
    <View style={styles.container}>
      <AddItem 
        task={task}
        placeholder="add a new task"
        buttonColor={colors.primary}
        buttonText="Add"
        onHandlerChange={onHandlerChange}
        onHandlerSubmit={onHandlerSubmit}
      />
      <TaskList
        tasks={tasks}
        onHandlerModal={onHandlerModal}
      />

      <CustomModal 
        isModalVisible={isModalVisible}
        selectedTask={selectedTask}
        onHandleCancel={onHandleCancel}
        onHandleDelete={onHandleDelete}
      />

    </View>
  );
}

export default App;