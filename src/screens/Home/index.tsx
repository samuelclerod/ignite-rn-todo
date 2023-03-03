import React from 'react'
import { View, Text, TouchableOpacity, Alert } from 'react-native'
import { Form } from '../../components/Form'
import { Header } from '../../components/Header'
import { TasksList } from '../../components/Tasks'
import { Task } from '../../types'
import { styles } from './styles'

export const Home = () => {

  const [tasks, setTasks] = React.useState<Task[]>([])

  const handleToggleTaskDone = (id: number) => {
    const updatedTasks = [...tasks]
    const foundTask = updatedTasks.find(task => task.id === id)
    if (!foundTask) return
    foundTask.done = !foundTask.done
    setTasks(updatedTasks)
  }

  const handleAddTask = (task: string) => {

    const found = tasks.find(t => t.title === task)

    if (found) {
      return Alert.alert(
        'Tarefa já cadastrada',
        'Você não pode cadastrar uma tarefa com o mesmo nome')
    }

    const data = {
      id: new Date().getTime(),
      title: task,
      done: false
    }

    setTasks(oldState => [...oldState, data])
  }

  const handleRemoveTask = (id: number) => {
    const task = tasks.find(task => task.id === id)
    if (!task) return
    Alert.alert('Remover tarefa', `Deseja remover a tarefa ${task.title}?`, [
      {
        text: 'sim', onPress: () => {
          const updatedTasks = tasks.filter(task => task.id !== id)
          setTasks(updatedTasks)
        }
      },
      { text: 'não', style: 'cancel' },
    ])

  }

  return (
    <View style={styles.container}>
      <Header />

      <Form handleAddTask={handleAddTask} />

      <TasksList tasks={tasks}
        handleToggleTaskDone={handleToggleTaskDone}
        handleRemoveTask={handleRemoveTask}
      />

    </View>
  )
}