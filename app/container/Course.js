// Employee:  Manager 100000, Team Leader 80000, Developer 50000, Tester 30000
// Salary:  Count Gross Salary < 50000     10% Bounus    Basic Salary, Bonus, Total Salary

import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Sub_course from './Sub_course';

export default function Course() {
    const [course, setCourse] = useState('');

    const handleCourse = (val) => {
        setCourse(val)
    }

    return (
        <View>
            <Text>Course: {course}</Text>
            <Sub_course c={course} /> 
            <TouchableOpacity onPress={() => handleCourse('programming')}>
                <Text >Programming</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleCourse('designing')}>
                <Text >Designing</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleCourse('animation')}>
                <Text >Animation</Text>
            </TouchableOpacity>
        </View>
    )
}