import React, {useState} from 'react';
import {
	Keyboard,
	KeyboardAvoidingView,
	Platform,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	TouchableWithoutFeedback,
	View,
} from 'react-native';
import CustomSwitch from '../components/CustomSwitch';
import HeaderTitle from '../components/HeaderTitle';
import {useForm} from '../hooks/useForm';
import {styles} from '../themes/appTheme';

const TextInputScreen: React.FC = () => {
	const {form, onChange, isSubscribed} = useForm({
		name: '',
		email: '',
		phone: '',
		isSubscribed: false,
	});

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<ScrollView>
					<View style={styles.globalMargin}>
						<HeaderTitle title="Text Input" />

						<TextInput
							style={customStyles.textInput}
							placeholder="Ingrese su nombre"
							placeholderTextColor="gray"
							autoCorrect={false}
							autoCapitalize="words"
							onChangeText={(value: string) => onChange(value, 'name')}
						/>
						<TextInput
							style={customStyles.textInput}
							placeholder="Ingerese su email"
							placeholderTextColor="gray"
							autoCorrect={false}
							autoCapitalize="none"
							onChangeText={(value: string) => onChange(value, 'email')}
							keyboardType="email-address"
						/>

						<View style={{flexDirection: 'row'}}>
							<Text style={customStyles.switchText}>isActive</Text>
							<CustomSwitch
								isOn={isSubscribed}
								onChange={value => onChange(value, 'isSubscribed')}
							/>
						</View>
						<View>
							<Text style={customStyles.textView}>
								{JSON.stringify(form, null, 3)}
							</Text>
						</View>

						<View>
							<Text style={customStyles.textView}>
								{JSON.stringify(form, null, 3)}
							</Text>
						</View>

						<View>
							<Text style={customStyles.textView}>
								{JSON.stringify(form, null, 3)}
							</Text>
						</View>

						<TextInput
							style={customStyles.textInput}
							placeholder="Ingrese su teléfono"
							placeholderTextColor="gray"
							onChangeText={(value: string) => onChange(value, 'phone')}
							keyboardType="phone-pad"
						/>
					</View>

					<View style={{height: 100}} />
				</ScrollView>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
};

export default TextInputScreen;

const customStyles = StyleSheet.create({
	textInput: {
		borderWidth: 1,
		height: 50,
		paddingHorizontal: 10,
		color: 'black',
		borderRadius: 10,
		borderColor: 'grey',
		marginVertical: 10,
	},
	textView: {
		color: 'black',
		fontSize: 20,
	},
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	switchText: {
		fontSize: 25,
		color: 'black',
	},
});
