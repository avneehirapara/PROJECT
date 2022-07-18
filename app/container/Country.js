import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import City from './City';

export default function Country() {
    const [countryName, setCountryName] = useState('India');

    const cityChange = () => {
        setCountryName('US');
    }

    return (
        <View>
            <Text>Country: {countryName}</Text>
            <TouchableOpacity onPress={cityChange}>
                <Text>Change</Text>
            </TouchableOpacity>
            <City country_name={countryName} />
        </View>
    )
} 