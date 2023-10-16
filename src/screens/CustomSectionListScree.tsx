import React, {useContext} from 'react';
import {SectionList, Text, View} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import ItemSeparator from '../components/ItemSeparator';
import {ThemeContext} from '../context/theme/ThemeContext';
import {Casas, casas} from '../data/sectionList';
import {styles} from '../themes/appTheme';

const CustomSectionListScreen: React.FC = () => {
	const {
		theme: {colors},
	} = useContext(ThemeContext);

	return (
		<View style={styles.globalMargin}>
			<SectionList
				sections={casas}
				keyExtractor={(item, index) => item + index}
				renderSectionHeader={({section}) => (
					<HeaderTitle title={section.casa} />
				)}
				renderItem={({item}) => {
					return <Text style={{color: colors.text}}>{item}</Text>;
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
