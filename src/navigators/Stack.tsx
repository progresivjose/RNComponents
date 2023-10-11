import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import AlertScreen from '../screens/AlertScreen';
import Animation101 from '../screens/Animation101';
import Animation102 from '../screens/Animation102';
import CustomSectionListScreen from '../screens/CustomSectionListScree';
import {HomeScreen} from '../screens/HomeScreen';
import InifiteScrollScreen from '../screens/InfiniteScrollScreen';
import ModalScreen from '../screens/ModalScreen';
import PullToRefreshScreen from '../screens/PullToRefreshScreen';
import SwitchScreen from '../screens/SwitchScreen';
import TextInputScreen from '../screens/TextInputScreen';

const StackNavigator = createStackNavigator();

export const Stack: React.FC = () => {
	return (
		<StackNavigator.Navigator screenOptions={{headerShown: false}}>
			<StackNavigator.Screen name="HomeScreen" component={HomeScreen} />
			<StackNavigator.Screen
				name="Animation101Screen"
				component={Animation101}
			/>
			<StackNavigator.Screen
				name="Animation102Screen"
				component={Animation102}
			/>
			<StackNavigator.Screen name="SwitchScreen" component={SwitchScreen} />
			<StackNavigator.Screen name="AlertScreen" component={AlertScreen} />
			<StackNavigator.Screen
				name="TextInputScreen"
				component={TextInputScreen}
			/>
			<StackNavigator.Screen
				name="PullToRefreshScreen"
				component={PullToRefreshScreen}
			/>
			<StackNavigator.Screen
				name="CustomSectionListScreen"
				component={CustomSectionListScreen}
			/>
			<StackNavigator.Screen name="ModalScreen" component={ModalScreen} />
			<StackNavigator.Screen
				name="IniniteScrollScreen"
				component={InifiteScrollScreen}
			/>
		</StackNavigator.Navigator>
	);
};
