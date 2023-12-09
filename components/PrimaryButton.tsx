import { View, Text, Pressable } from 'react-native'
import React from 'react'
import globalStyles from '../styles'

export default function PrimaryButton({ title, handler, isSelected, styles }: { title: string, handler: () => void, isSelected?: any, styles?:any }) {
  return (
    <Pressable style={[globalStyles.button,styles, { backgroundColor: "#00467F", opacity: !Boolean(isSelected) ? 0.7 : 1 }]}
      onPress={handler}
      disabled={!Boolean(isSelected)}
    >
      <View>
        <Text style={globalStyles.buttonText}>{title}</Text>
      </View>
    </Pressable>
  )
}