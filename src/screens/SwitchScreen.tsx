import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CustomSwitch from '../components/CustomSwitch';
import HeaderTitle from '../components/HeaderTitle';
import {styles} from '../themes/appTheme';

const SwitchScreen: React.FC = () => {
	const [state, setState] = useState({
		isActive: true,
		isHungry: false,
		isHappy: true,
	});

	const onChange = (value: boolean, field: string) => {
		setState({
			...state,
			[field]: value,
		});
	};

	return (
		<View style={{flex: 1, ...styles.globalMargin}}>
			<HeaderTitle title="Switches" />

			<View style={customStyles.container}>
				<View style={{flexDirection: 'row'}}>
					<Text style={customStyles.switchText}>isActive</Text>
					<CustomSwitch
						isOn={state.isActive}
						onChange={value => onChange(value, 'isActive')}
					/>
				</View>
				<View style={{flexDirection: 'row'}}>
					<Text style={customStyles.switchText}>isHungry</Text>
					<CustomSwitch
						isOn={state.isHungry}
						onChange={value => onChange(value, 'isHungry')}
					/>
				</View>
				<View style={{flexDirection: 'row'}}>
					<Text style={customStyles.switchText}>isHappy</Text>
					<CustomSwitch
						isOn={state.isHappy}
						onChange={value => onChange(value, 'isHappy')}
					/>
				</View>
			</View>

			<Text style={customStyles.switchText}>
				{JSON.stringify(state, null, 5)}
			</Text>
		</View>
	);
};

export default SwitchScreen;

const customStyles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	switchText: {
		fontSize: 25,
		color: 'black',
	},
});
