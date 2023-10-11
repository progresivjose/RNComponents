import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {MenuItem} from '../interfaces/appInterfaces';

interface Props {
	menuItem: MenuItem;
}

export const FlatListMenuItem = ({menuItem}: Props) => {
	const navigation = useNavigation();
	return (
		<TouchableOpacity
			activeOpacity={0.6}
			onPress={() => navigation.navigate(menuItem.component)}>
			<View style={styles.container}>
				<View style={{flexDirection: 'row', flex: 2}}>
					<Icon name={menuItem.icon} size={20} color="#5856D6" />
					<Text style={styles.text}>{menuItem.name}</Text>
				</View>
				<Icon name="chevron-forward-outline" size={20} color="black" />
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
	},

	text: {
		color: 'black',
		marginLeft: 10,
		fontSize: 15,
	},
});
