import React, {useState} from 'react';
import {
	ActivityIndicator,
	Animated,
	ImageStyle,
	StyleProp,
	View,
} from 'react-native';
import {useAnimation} from '../hooks/useAnimation';

interface Props {
	uri: string;
	style?: StyleProp<ImageStyle>;
}

const FadeImage = ({uri, style}: Props) => {
	const {opacity, fadeIn} = useAnimation();
	const [isLoading, setIsLoading] = useState(false);

	return (
		<View style={{justifyContent: 'center', alignItems: 'center'}}>
			{isLoading && <ActivityIndicator color="#5856D6" size={30} />}

			<Animated.Image
				onLoad={() => {
					setIsLoading(false);
					fadeIn(500);
				}}
				source={{uri}}
				style={{...(style as any), opacity}}
			/>
		</View>
	);
};

export default FadeImage;
