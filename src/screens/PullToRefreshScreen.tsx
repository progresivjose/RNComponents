import React, {useState} from 'react';
import {RefreshControl, ScrollView, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import HeaderTitle from '../components/HeaderTitle';
import {styles} from '../themes/appTheme';

// import { Container } from './styles';

const PullToRefreshScreen: React.FC = () => {
	const [refreshing, setRefreshing] = useState(false);
	const [data, setData] = useState<string>();
	const {top} = useSafeAreaInsets();

	const onRefresh = () => {
		setRefreshing(true);

		setTimeout(() => {
			setRefreshing(false);
			setData('Hola Mundo');
		}, 1500);
	};

	return (
		<ScrollView
			style={{marginTop: refreshing ? top : 0}}
			refreshControl={
				<RefreshControl
					refreshing={refreshing}
					onRefresh={onRefresh}
					progressViewOffset={10}
					colors={['white', 'red', 'orange']}
					progressBackgroundColor="#5856D6"
					style={{backgroundColor: '#5856D6'}}
					tintColor="white"
					title="Refreshing"
				/>
			}>
			<View style={styles.globalMargin}>
				<HeaderTitle title="Pull To Refresh" />

				{data && <Text style={styles.title}>{data}</Text>}
			</View>
		</ScrollView>
	);
};

export default PullToRefreshScreen;
