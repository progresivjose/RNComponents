import React, {useState} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import FadeImage from '../components/FadeImage';
import HeaderTitle from '../components/HeaderTitle';

const InifiteScrollScreen: React.FC = () => {
	const [numbers, setNumbers] = useState<number[]>([0, 1, 2, 3, 4, 5]);

	const loadMore = () => {
		const newArray: number[] = Array.from({length: 5}, (_, i) => i).map(
			i => numbers.length + i,
		);
		setTimeout(() => {
			setNumbers([...numbers, ...newArray]);
		}, 1500);
	};

	const renderItem = (item: number) => {
		return (
			<FadeImage
				uri={`https://picsum.photos/id/${item}/500/400`}
				style={{height: 400, width: '100%'}}
			/>
		);
	};

	return (
		<View>
			<FlatList
				data={numbers}
				keyExtractor={item => item.toString()}
				renderItem={({item}) => renderItem(item)}
				ListHeaderComponent={() => <HeaderTitle title="Inifite Scroll" />}
				onEndReached={loadMore}
				onEndReachedThreshold={0.5}
				ListFooterComponent={() => {
					return (
						<View
							style={{
								height: 150,
								width: '100%',
								justifyContent: 'center',
								alignItems: 'center',
							}}>
							<ActivityIndicator size={20} color="#5856d6" />
						</View>
					);
				}}
			/>
		</View>
	);
};

export default InifiteScrollScreen;
