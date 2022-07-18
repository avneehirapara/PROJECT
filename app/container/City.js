
// Course               Programming     Designing       Animation
// SubCourse            C               Photoshop       VFX

import { View, Text } from 'react-native'
import React from 'react'

export default function City(props) {
    // console.log(props.country_name);


    return (
        <View>
            {/* <Text>City</Text> */}
            {
                props.country_name === 'India' ?
                    <Text>Surat</Text> :
                    <Text>New York</Text>
            }
        </View>
    )
}
