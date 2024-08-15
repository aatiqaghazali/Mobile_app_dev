import React from 'react'
import { Text, View } from 'react-native'

export default function dog(props) {
  return (
    <View>
        <Text>Hello I am a dog. My name is {props.name}</Text>
    </View>
  )
}
