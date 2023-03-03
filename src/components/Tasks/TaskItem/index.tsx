import { Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { Task } from '../../../types'
import { styles } from './styles'

type Prop = {
  task: Task
  handleRemoveTask: (id: number) => void
  handleToggleTaskDone: (id: number) => void
}

export const TaskItem = ({ task, handleToggleTaskDone, handleRemoveTask }: Prop) => {
  const { title } = task

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleToggleTaskDone(task.id)}>
        {task.done ?
          <Image source={require('../../../../assets/icons/checked.png')} /> :
          <Image source={require('../../../../assets/icons/unchecked.png')} />
        }
      </TouchableOpacity>

      <Text
        style={{ ...styles.containerText, textDecorationLine: task.done ? 'line-through' : 'none' }}
      >{title}</Text>

      <TouchableOpacity
        onPress={() => handleRemoveTask(task.id)}
      >
        <Image source={require('../../../../assets/icons/trash.png')} />
      </TouchableOpacity>
    </View>
  )
}
