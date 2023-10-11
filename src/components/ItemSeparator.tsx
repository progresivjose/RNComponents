import React from 'react';
import {View} from 'react-native';

// import { Container } from './styles';

const ItemSeparator: React.FC = () => {
	return (
		<View
			style={{
				borderBottomWidth: 1,
				opacity: 0.4,
				marginVertical: 8,
			}}
		/>
	);
};

export default ItemSeparator;
