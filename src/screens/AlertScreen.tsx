import React from 'react';
import {Alert, Button, View} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import {styles} from '../themes/appTheme';

// import { Container } from './styles';

const AlertScreen: React.FC = () => {
	const showAlert = () => {
		Alert.alert('Hello World', 'This is an alert from React Native', [
			{
				text: 'Cancel',
				style: 'cancel',
				onPress: () => console.log('Cancel Button'),
			},
			{
				text: 'OK',
				onPress: () => console.log('OK Button'),
			},
		]);
	};

	return (
		<View style={styles.globalMargin}>
			<HeaderTitle title="Alert" />

			<Button title="Show Alert" onPress={showAlert} />
		</View>
	);
};

export default AlertScreen;
