import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function Decrement_Increment() {
    let[Number,setNumber]=useState('0');
    let increment= () => {
        setNumber(prvNumber => prvNumber + 1);
    }
    let decrement = () => {
        setNumber(prvNumber => prvNumber - 1);
    }
  return (
    <View>
      <Text>{Number}</Text>
      
      <TouchableOpacity onPress={increment}>
        <Text>INCREMENT</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={decrement}>
        <Text>Decrement</Text>
      </TouchableOpacity>
    </View>
  )
}