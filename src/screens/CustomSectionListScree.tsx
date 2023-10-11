import React from 'react';
import {SectionList, Text, View} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import ItemSeparator from '../components/ItemSeparator';
import {Casas, casas} from '../data/sectionList';
import {styles} from '../themes/appTheme';

// import { Container } from './styles';

const CustomSectionListScreen: React.FC = () => {
	return (
		<View style={styles.globalMargin}>
			<SectionList
				sections={casas}
				keyExtractor={(item, index) => item + index}
				renderSectionHeader={({section}) => (
					<HeaderTitle title={section.casa} />
				)}
				renderItem={({item}) => {
					return <Text style={{color: 'black'}}>{item}</Text>;
				}}
				ListHeaderComponent={() => <HeaderTitle title="Section List" />}
				ListFooterComponent={() => (
					<View style={{marginBottom: 70}}>
						<HeaderTitle title={'Total de casas: ' + casas.length} />
					</View>
				)}
				renderSectionFooter={({section}) => {
					return <HeaderTitle title={'Total' + section.data.length} />;
				}}
				stickySectionHeadersEnabled={true}
				SectionSeparatorComponent={() => <ItemSeparator />}
				ItemSeparatorComponent={() => <ItemSeparator />}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
};

export default CustomSectionListScreen;
