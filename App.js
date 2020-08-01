import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setisAddMode] = useState(false)

  const addGoalHandler = (goalTitle) => {
    setCourseGoals(currentGoals => [...currentGoals, {id: Math.random().toString(), value: goalTitle}])

    setisAddMode(false);
  }

  const RemoveGoalHandler = (goalId) => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    })
  }

  const CancelHandler = () => {
    setisAddMode(false);
  }
  return (
    <View style={styles.screen}>
      <Button title="ADD NEW GOAL" onPress={() => setisAddMode(true)}/>
      <GoalInput onCancel={CancelHandler} visible={isAddMode} onAddGoal={addGoalHandler}/>
      <FlatList data={courseGoals} keyExtractor={item => item.id} renderItem={itemData => (
        <GoalItem id={itemData.item.id} onDelete={RemoveGoalHandler} title={itemData.item.value}/>
      )}/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
