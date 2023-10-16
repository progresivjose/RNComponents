import React, {useContext, useState} from 'react';
import {
	Animated,
	Dimensions,
	Image,
	SafeAreaView,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import AnimatedDotsCarousel from 'react-native-animated-dots-carousel';
import {items, Slide} from '../data/slideshow';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useAnimation} from '../hooks/useAnimation';
import {useNavigation} from '@react-navigation/native';
import {ThemeContext} from '../context/theme/ThemeContext';

const {width: screenWidth, height: screenHeight} = Dimensions.get('screen');

const SlidesScreen: React.FC = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [showButton, setShowButton] = useState(false);
	const {fadeIn, fadeOut, opacity} = useAnimation();
	const navigation = useNavigation();
	const {
		theme: {dividerColor, colors},
	} = useContext(ThemeContext);

	const toggleButton = (index: number) => {
		const showButton = index === items.length - 1;
		if (showButton) {
			setShowButton(showButton);
			fadeIn();
		} else {
			fadeOut(() => setShowButton(showButton));
		}
	};

	const renderItem = (item: Slide) => {
		return (
			<View
				style={{
					flex: 1,
					backgroundColor: colors.background,
					borderRadius: 5,
					padding: 40,
					justifyContent: 'center',
				}}>
				<Image
					source={item.img}
					style={{width: 350, height: 400, resizeMode: 'center'}}
				/>
				<Text style={{...customStyles.title, color: colors.text}}>
					{item.title}
				</Text>
				<Text style={{...customStyles.desc, color: colors.text}}>
					{item.desc}
				</Text>
			</View>
		);
	};
	return (
		<SafeAreaView style={{flex: 1, justifyContent: 'space-between'}}>
			<Carousel
				data={items}
				renderItem={({item}: any) => renderItem(item)}
				width={screenWidth}
				height={screenHeight * 0.7}
				loop={false}
				onSnapToItem={index => {
					setCurrentSlide(index);
					toggleButton(index);
				}}
			/>
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					marginHorizontal: 20,
					marginBottom: 50,
					minHeight: 50,
				}}>
				<View
					style={{
						justifyContent: 'center',
						alignItems: 'center',
						marginTop: 30,
					}}>
					<AnimatedDotsCarousel
						length={items.length}
						currentIndex={currentSlide}
						maxIndicators={3}
						activeIndicatorConfig={{
							size: 20,
							opacity: 1,
							color: colors.primary,
							margin: 3,
						}}
						inactiveIndicatorConfig={{
							size: 13,
							opacity: 0.8,
							color: dividerColor,
							margin: 3,
						}}
						decreasingDots={[
							{
								config: {color: colors.text, margin: 3, opacity: 0.5, size: 6},
								quantity: 1,
							},
						]}
					/>
				</View>

				{showButton && (
					<Animated.View style={{opacity}}>
						<TouchableOpacity
							style={{
								flexDirection: 'row',
								backgroundColor: colors.primary,
								width: 140,
								height: 50,
								borderRadius: 10,
								justifyContent: 'center',
								alignItems: 'center',
							}}
							onPress={() => navigation.navigate('HomeScreen')}
							activeOpacity={0.8}>
							<Text style={{fontSize: 25, color: colors.text}}>Entrar</Text>
							<Icon
								name="chevron-forward-outline"
								color={colors.text}
								size={30}
							/>
						</TouchableOpacity>
					</Animated.View>
				)}
			</View>
		</SafeAreaView>
	);
};

const customStyles = StyleSheet.create({
	title: {
		fontSize: 30,
		fontWeight: 'bold',
		color: '#5856D6',
	},
	desc: {
		color: 'black',
		fontSize: 16,
	},
});

export default SlidesScreen;
