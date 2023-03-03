import React from 'react'
import { View, Image, TextInput, TouchableOpacity } from 'react-native'
import { colors } from '../../constants'
import { styles } from './styles'

type Props = {
  handleAddTask: (task: string) => void
}

export const Form = ({ handleAddTask }: Props) => {
  const [taskText, setTextTask] = React.useState('')

  const handleAddNewTask = () => {
    handleAddTask(taskText)
    setTextTask('')
  }

  return (
    <View style={styles.form} >
      <TextInput
        style={styles.input}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={colors.gray[300]}
        keyboardType='default'
        onChangeText={setTextTask}
        value={taskText}
      />

      <TouchableOpacity style={styles.button} onPress={() => handleAddTask(taskText)}>
        <Image source={require('../../../assets/icons/plus.png')} />
      </TouchableOpacity>
    </View>
  )
}