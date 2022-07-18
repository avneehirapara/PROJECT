import { View, Text } from 'react-native'
import React from 'react'
import Home from './app/container/Home'
import City from './app/container/City'
import Decrement_Increment from './app/container/Decrement_Increment'


export default function App() {
  return (
    <View>
      <Home />
      <City />
       <Decrement_Increment />
    </View>
  )
}