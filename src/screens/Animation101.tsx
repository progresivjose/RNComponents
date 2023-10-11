import React, {useRef} from 'react';
import {Animated, Button, StyleSheet, View} from 'react-native';
import {useAnimation} from '../hooks/useAnimation';

const Animation101: React.FC = () => {
	const {position, opacity, fadeIn, fadeOut, startMoving} = useAnimation();

	return (
		<View style={styles.container}>
			<Animated.View
				style={{
					...styles.purpleBox,
					opacity,
					transform: [{translateX: position}],
				}}></Animated.View>

			<Button
				title="Fade In"
				onPress={() => {
					fadeIn();
					startMoving(100);
				}}
			/>
			<Button title="Fade Out" onPress={fadeOut} />
		</View>
	);
};

export default Animation101;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	purpleBox: {
		backgroundColor: '#5856D6',
		width: 150,
		height: 150,
		marginBottom: 20,
	},
	button: {
		marginVertical: 20,
	},
});
