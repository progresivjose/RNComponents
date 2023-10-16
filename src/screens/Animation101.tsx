import React, {useContext, useRef} from 'react';
import {Animated, Button, StyleSheet, View} from 'react-native';
import {ThemeContext} from '../context/theme/ThemeContext';
import {useAnimation} from '../hooks/useAnimation';

const Animation101: React.FC = () => {
	const {position, opacity, fadeIn, fadeOut, startMoving} = useAnimation();
	const {
		theme: {colors},
	} = useContext(ThemeContext);

	return (
		<View style={styles.container}>
			<Animated.View
				style={{
					...styles.purpleBox,
					backgroundColor: colors.primary,
					opacity,
					transform: [{translateX: position}],
				}}></Animated.View>

			<Button
				title="Fade In"
				onPress={() => {
					fadeIn();
					startMoving(100);
				}}
				color={colors.primary}
			/>
			<Button
				title="Fade Out"
				onPress={() => fadeOut(() => {})}
				color={colors.primary}
			/>
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
		width: 150,
		height: 150,
		marginBottom: 20,
	},
	button: {
		marginVertical: 20,
	},
});
