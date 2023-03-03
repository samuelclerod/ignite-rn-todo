import { Text, View } from 'react-native'
import React from 'react'

import { styles } from './styles'
import { Info } from './Info'
import { EmptyState } from './EmptyState'
import { Task } from '../../types'
import { TaskItem } from './TaskItem'

type Props = {
  tasks: Task[]
  handleToggleTaskDone: (id: number) => void
  handleRemoveTask: (id: number) => void
}

export const TasksList = ({ tasks, handleToggleTaskDone, handleRemoveTask }: Props) => {

  return (
    <View style={styles.container}>
      <Info tasks={tasks} />

      <View style={styles.content}>
        {tasks.length === 0 ? (<EmptyState />) : tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            handleToggleTaskDone={handleToggleTaskDone}
            handleRemoveTask={handleRemoveTask}
          />
        ))}

      </View>
    </View>
  )
}
