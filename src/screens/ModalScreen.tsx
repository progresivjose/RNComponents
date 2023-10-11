import React, {useState} from 'react';
import {Button, Modal, Text, View} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import {styles} from '../themes/appTheme';

const ModalScreen: React.FC = () => {
	const [visble, setVisble] = useState(false);
	const toggleModal = () => {
		setVisble(!visble);
	};

	return (
		<View style={styles.globalMargin}>
			<HeaderTitle title="Modals" />

			<Button title="Abir Modal" onPress={toggleModal} />

			<Modal animationType="fade" visible={visble} transparent={true}>
				<View
					style={{
						flex: 1,
						backgroundColor: 'rgba(0,0,0,0.3)',
						justifyContent: 'center',
						alignItems: 'center',
					}}>
					<View
						style={{
							backgroundColor: 'white',
							width: 200,
							height: 200,
							justifyContent: 'center',
							alignItems: 'center',
							shadowOffset: {
								width: 0,
								height: 10,
							},
							shadowOpacity: 0.25,
							elevation: 10,
							borderRadius: 5,
						}}>
						<HeaderTitle title="Modal" />
						<Text
							style={{
								color: 'black',
								fontSize: 16,
								fontWeight: '300',
								marginBottom: 20,
							}}>
							Cuerpo del modal
						</Text>
						<Button title="Cerrar" onPress={toggleModal} />
					</View>
				</View>
			</Modal>
		</View>
	);
};

export default ModalScreen;
