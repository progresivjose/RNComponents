import React, {useContext, useState} from 'react';
import {Switch} from 'react-native';
import {ThemeContext} from '../context/theme/ThemeContext';

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
	const {
		theme: {colors},
	} = useContext(ThemeContext);

	return (
		<Switch
			trackColor={{false: colors.notification, true: colors.primary}}
			thumbColor={isEnabled ? colors.primary : colors.text}
			ios_backgroundColor="#3e3e3e"
			onValueChange={toggleSwitch}
			value={isEnabled}
		/>
	);
};

export default CustomSwitch;
