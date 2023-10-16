import {useRef} from 'react';
import {Animated, Easing} from 'react-native';

export const useAnimation = () => {
	const opacity = useRef(new Animated.Value(0)).current;
	const position = useRef(new Animated.Value(0)).current;

	const fadeIn = (duration = 300) => {
		Animated.timing(opacity, {
			toValue: 1,
			duration,
			useNativeDriver: true,
		}).start();
	};

	const fadeOut = (callback?: Function) => {
		Animated.timing(opacity, {
			toValue: 0,
			duration: 300,
			useNativeDriver: true,
		}).start(() => (callback ? callback() : null));
	};

	const startMoving = (initPosition: number, duration: number = 300) => {
		position.setValue(initPosition);

		Animated.timing(position, {
			toValue: 0,
			duration,
			useNativeDriver: true,
		}).start();
	};

	return {
		opacity,
		position,
		fadeIn,
		fadeOut,
		startMoving,
	};
};
