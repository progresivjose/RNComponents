import React, {useContext} from 'react';
import {View} from 'react-native';
import {ThemeContext} from '../context/theme/ThemeContext';

const ItemSeparator: React.FC = () => {
	const {
		theme: {dividerColor},
	} = useContext(ThemeContext);
	return (
		<View
			style={{
				borderBottomWidth: 1,
				marginVertical: 8,
				borderBottomColor: dividerColor,
			}}
		/>
	);
};

export default ItemSeparator;
