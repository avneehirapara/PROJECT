import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Home from './app/container/Home'
import City from './app/container/City'
import Decrement_Increment from './app/container/Decrement_Increment'
import Course from './app/container/Course'


export default function App() {
  return (
  <ScrollView>
      <View>
      <Home />
      <City/>
      <Decrement_Increment/>
      <Course />
    </View>
  </ScrollView>
  )
}