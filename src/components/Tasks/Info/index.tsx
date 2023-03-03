import { Text, View } from 'react-native'
import React from 'react'

import { styles } from './styles'
import { Task } from '../../../types'

type Props = {
  tasks: Task[]
}

export const Info = ({ tasks }: Props) => {


  const total = tasks.length

  const finished = tasks.filter(task => task.done).length

  return (
    <View style={styles.container}>
      <View style={styles.filter}>
        <Text style={styles.created}>Criadas</Text>
        <View style={styles.counter}>
          <Text style={styles.counterText}>
            {total}
          </Text>
        </View>
      </View>

      <View style={styles.filter}>
        <Text style={styles.finished}>Concluídas</Text>
        <View style={styles.counter}>
          <Text style={styles.counterText}>
            {finished}
          </Text>
        </View>
      </View>
    </View>
  )
}
