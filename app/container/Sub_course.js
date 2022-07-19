import { View, Text } from 'react-native'
import React from 'react'

export default function Sub_course(props) {
    let sub = '';
    if (props.c === 'programming') {
        sub = 'C Programming';
    } else if (props.c === 'designing') {
        sub = 'Photoshop';
    } else if (props.c === 'animation') {
        sub = 'VFX';
    }

    return (
        <View>
            <Text>Sub Course: {sub}</Text>
        </View>
    )
} 