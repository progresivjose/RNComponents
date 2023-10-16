import React, {useContext} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import {ThemeContext} from '../context/theme/ThemeContext';
import {styles} from '../themes/appTheme';

const ChangeThemeScreen: React.FC = () => {
	const {
		theme: {dark, colors},
		setLightTheme,
		setDarkTheme,
	} = useContext(ThemeContext);

	const toggleTheme = () => {
		dark ? setLightTheme() : setDarkTheme();
	};

	return (
		<View style={styles.globalMargin}>
			<HeaderTitle title="Theme" />

			<TouchableOpacity
				onPress={toggleTheme}
				activeOpacity={0.8}
				style={{
					width: 150,
					height: 50,
					borderRadius: 20,
					backgroundColor: colors.primary,
					justifyContent: 'center',
				}}>
				<Text style={{color: 'white', textAlign: 'center', fontSize: 22}}>
					Light / Dark
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default ChangeThemeScreen;
