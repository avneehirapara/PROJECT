import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'


export default class City extends Component {
  constructor(props) {
    super(props);
    this.state = {
      City: '2.' +" " +  "Ahemdabad"
    }
  }


  change = () => {
    this.setState({
        City:  '2.' +" " + 'surat'
      })
  }



  render() {
    return (
      <View style={StyleSheet.container}>
        <Text style={styles.name}>{this.state.City}</Text>
        <TouchableOpacity onPress={this.change}>
          <Text style={styles.btn}> Change Name </Text>

        </TouchableOpacity>

      </View>
    )
  }
}
let styles = StyleSheet.create({
  btn: {
    backgroundColor: 'grey',
    height: 50,
    width: 200,
    marginTop: 30,
    marginLeft: 100,
    color: 'white',
    fontFamily: 'georgia',
    fontSize: 25,
    borderRadius: 50,
    textAlign: 'center',
    textAlignVertical: 'center',

  },
  name :{
    marginTop: 30,
    marginLeft: 115,
    fontFamily: 'georgia',
    fontSize: 25,
  }
})