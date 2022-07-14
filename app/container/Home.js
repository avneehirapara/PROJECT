// Country      countryName
// City         cityName, famousPlace   // ternary operator
import { Text, TouchableOpacity, View ,StyleSheet } from 'react-native'
import React, { Component } from 'react'

export default class Home  extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '1.' +" " + 'avnee'
        }
    }

    handleChangeName = () => {
        this.setState({
           name: '1.' +" " +  'amit' 
        })
    }

    render() {
        return (
            <View style = {StyleSheet.container}>
                <Text  style={styles.name}>{this.state.name}</Text>
                <TouchableOpacity 
                    onPress={this.handleChangeName}
                >
                    <Text  style = {styles.btn}>Change Name</Text>
                </TouchableOpacity>
            </View>
        )
    }
}   

let styles = StyleSheet.create({
    name :{
        marginTop: 30,
        marginLeft: 115,
        fontFamily: 'georgia',
        fontSize: 25,
      },
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

})
