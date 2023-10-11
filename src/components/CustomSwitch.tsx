import React, {useState} from 'react';
import {Switch} from 'react-native';

interface Props {
	isOn: boolean;
	onChange: (isEnabled: boolean) => void;
}

const CustomSwitch = ({isOn, onChange}: Props) => {
	const [isEnabled, setIsEnabled] = useState(isOn);
	const toggleSwitch = () => {
		setIsEnabled(previousState => !previousState);
		onChange(!isEnabled);
	};

	return (
		<Switch
			trackColor={{false: '#767577', true: '#81b0ff'}}
			thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
			ios_backgroundColor="#3e3e3e"
			onValueChange={toggleSwitch}
			value={isEnabled}
		/>
	);
};

export default CustomSwitch;
