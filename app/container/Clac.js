import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

import { View } from "react-native";

export default function Clac() {
	const [equation, setEquation] = useState('');

	const handlePressDigit = (val) => {
		setEquation(equation + val);
	}

	const handlePressEqual = () => {
		setEquation(eval(equation).toString())
	}

	const restart = () => {
		setEquation('');
	}

	return (
		<View>
			<View>
				<Button onPress={() => restart(0)}>C</Button>
				<Button onPress={() => handlePressPercentage()}></Button>
				<Button onPress={() => handlePressPercentage()}>%</Button>
				<Button onPress={() => handlePressDigit('/')}>/</Button>
			</View>
			<View>
				<Button onPress={() => handlePressDigit('7')}>7</Button>
				<Button onPress={() => handlePressDigit('8')}>8</Button>
				<Button onPress={() => handlePressDigit('9')}>9</Button>
				<Button onPress={() => handlePressDigit('*')}>*</Button>
			</View>
			<View>
				<Button onPress={() => handlePressDigit('4')}>4</Button>
				<Button onPress={() => handlePressDigit('5')}>5</Button>
				<Button onPress={() => handlePressDigit('6')}>6</Button>
				<Button onPress={() => handlePressDigit('+')}>+</Button>
			</View>
			<View>
				<Button onPress={() => handlePressDigit('1')}>1</Button>
				<Button onPress={() => handlePressDigit('2')}>2</Button>
				<Button onPress={() => handlePressDigit('3')}>3</Button>
				<Button onPress={() => handlePressDigit('-')}>
				</Button>
			</View>
			<View>
				<Button onPress={() => handlePressDigit('0')}>0</Button>
				<Button onPress={() => handlePressDigit('.')}>.</Button>
				<Button onPress={() => handlePressEqual('=')}>=</Button>
			</View>

		</View>


	)
}

