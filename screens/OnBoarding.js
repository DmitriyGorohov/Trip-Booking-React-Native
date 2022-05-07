import React from 'react';
import {
	StyleSheet,
	SafeAreaView,
	Image,
	TouchableOpacity,
	Text,
	View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS, FONTS, SIZES, icons, images } from '../constants';

const OnBoarding = ({ navigation }) => {
	return (
		<SafeAreaView style={styles.container}>
			<View
				style={{
					flex: 1,
					alignItems: 'center',
					justifyContent: 'center',
				}}>
				<Image
					source={images.onboardingImage}
					resizeMode="contain"
					style={{ width: '100%', height: '100%' }}
				/>
			</View>

			<View
				style={{
					flex: 1,
					alignItems: 'center',
					justifyContent: 'center',
				}}>
				<View style={{ marginHorizontal: SIZES.padding, alignItems: 'center' }}>
					<Text style={{ ...FONTS.h2 }}>Digital Ticket</Text>
					<Text
						style={{
							color: COLORS.gray,
							marginTop: SIZES.padding,
							textAlign: 'center',
							...FONTS.body3,
						}}>
						Easy solustion o buy ticketsfor you travel, busines trips,
						transportation, lodging and culinary.
					</Text>
				</View>
				<TouchableOpacity
					style={[styles.shadow, {
						width: '70%',
						height: 50,
						alignItems: 'center',
						justifyContent: 'center',
						marginTop: SIZES.padding * 2,
					}]}
					onPress={() => navigation.navigate("Home")}>
					<LinearGradient
						style={
							{
								width: '100%',
								height: '100%',
								borderRadius: 15,
								alignItems: 'center',
								justifyContent: 'center',
							}
						}
						colors={['#46aeff', '#5884ff']}
						start={{ x: 0, y: 0 }}
						end={{ x: 1, y: 1 }}>
						<Text style={{ color: COLORS.white, ...FONTS.h3 }}>Start !</Text>
					</LinearGradient>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

export default OnBoarding;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.white,
	},
	shadow: {
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
});
