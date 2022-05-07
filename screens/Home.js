import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS, SIZES, FONTS, icons, images } from '../constants';

const OptionItem = ({ icon, label, onPress, bgColor }) => {
	return (
		<TouchableOpacity
			style={{
				flex: 1,
				alignItems: 'center',
				justifyContent: 'center',
			}}
			onPress={onPress}>
			<View style={{ width: 60, height: 60 }}>
				<LinearGradient
					style={{
						flex: 1,
						alignItems: 'center',
						borderRadius: 15,
						justifyContent: 'center',
					}}
					colors={bgColor}
					start={{ x: 0, y: 0 }}
					end={{ x: 0, y: 1 }}>
					<Image
						source={icon}
						resizeMode="cover"
						style={{
							tintColor: COLORS.white,
							width: 30,
							height: 30,
						}}
					/>
				</LinearGradient>
			</View>
			<Text style={{ marginTop: SIZES.base, color: COLORS.gray, ...FONTS.body3 }}>
				{label}
			</Text>
		</TouchableOpacity>
	);
};

const Home = ({ navigation }) => {
	const [destinations, setDestinations] = React.useState([
		{ id: 0, name: 'Ski Vila', img: images.skiVilla },
		{ id: 2, name: 'Climbing Hills', img: images.climbingHills },
		{ id: 3, name: 'Forzen Hills', img: images.frozenHills },
		{ id: 4, name: 'Beach', img: images.beach },
	]);

	function renderDestinations(item, index) {
		let destinationStyle = {};

		if (index === 0) {
			destinationStyle = {
				marginLeft: SIZES.padding,
			};
		}
		return (
			<TouchableOpacity
				style={{
					justifyContent: 'center',
					marginHorizontal: SIZES.padding,
					...destinationStyle,
				}}
				onPress={() => navigation.navigate('DestinationDetail')}>
				<Image
					source={item.img}
					resizeMode="cover"
					style={{
						width: SIZES.width * 0.28,
						height: '82%',
						borderRadius: 15,
					}}
				/>
				<Text
					style={{
						marginTop: SIZES.base / 2,
						...FONTS.h4,
						textAlign: 'center',
						color: COLORS.gray,
					}}>
					{item.name}
				</Text>
			</TouchableOpacity>
		);
	}

	return (
		<View style={styles.container}>
			<View
				style={{
					flex: 1,
					marginTop: SIZES.base,
					paddingHorizontal: SIZES.padding,
				}}>
				<Image
					source={images.homeBanner}
					resizeMode="cover"
					style={{
						width: '100%',
						height: '100%',
						borderRadius: 10,
					}}
				/>
			</View>
			<View style={{ flex: 1, justifyContent: 'center' }}>
				<View
					style={{
						flexDirection: 'row',
						marginTop: SIZES.base,
						paddingHorizontal: SIZES.padding,
					}}>
					<OptionItem
						icon={icons.airplane}
						bgColor={['#46aeff', '#5884ff']}
						label="Flight"
						onPress={() => console.log('Flight')}
					/>
					<OptionItem
						icon={icons.train}
						bgColor={['#fddf90', '#fcda13']}
						label="Train"
						onPress={() => console.log('Train')}
					/>
					<OptionItem
						icon={icons.bus}
						bgColor={['#e973ad', '#da5df2']}
						label="Bus"
						onPress={() => console.log('Bus')}
					/>
					<OptionItem
						icon={icons.taxi}
						bgColor={['#fcaba8', '#fe6bba']}
						label="Taxi"
						onPress={() => console.log('Taxi')}
					/>
				</View>
				<View
					style={{
						flexDirection: 'row',
						marginTop: SIZES.radius,
						paddingHorizontal: SIZES.padding,
					}}>
					<OptionItem
						icon={icons.bed}
						bgColor={['#ffc465', '#ff9c5f']}
						label="Hotel"
						onPress={() => console.log('Hotel')}
					/>
					<OptionItem
						icon={icons.eat}
						bgColor={['#e973ad', '#4ebefd']}
						label="Eats"
						onPress={() => console.log('Eats')}
					/>
					<OptionItem
						icon={icons.compass}
						bgColor={['#7be993', '#46caaf']}
						label="Advenure"
						onPress={() => console.log('Advenure')}
					/>
					<OptionItem
						icon={icons.event}
						bgColor={['#fca397', '#fc7b6c']}
						label="Event"
						onPress={() => console.log('Event')}
					/>
				</View>
			</View>
			<View style={{ flex: 1 }}>
				<Text
					style={{
						marginTop: SIZES.base,
						marginHorizontal: SIZES.padding,
						...FONTS.h2,
					}}>
					Destination
				</Text>
				<FlatList
					horizontal
					showsHorizontalScrollIndicator={false}
					data={destinations}
					keyExtractor={item => item.id.toString()}
					renderItem={({ item, index }) => renderDestinations(item, index)}
				/>
			</View>
		</View>
	);
};

export default Home;

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
