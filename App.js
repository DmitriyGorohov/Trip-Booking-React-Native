import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, TouchableOpacity } from 'react-native';
import { COLORS, SIZES, icons } from './constants';

import { OnBoarding, Home, DestinationDetail } from './screens';

import Tabs from './navigation/tabs';

const theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		border: 'transparent',
	},
};

const Stack = createStackNavigator();

const App = () => {
	return (
		<NavigationContainer theme={theme}>
			<Stack.Navigator initialRouteName={'OnBoarding'}>
				<Stack.Screen
					name="OnBoarding"
					component={OnBoarding}
					options={{
						headerShown: true,
						title: null,
						headerStyle: {
							backgroundColor: COLORS.white,
						},
						headerLeft: null,
						headerRight: () => (
							<TouchableOpacity
								style={{ marginRight: SIZES.padding }}
								onPress={() => console.log('Pressed')}>
								<Image
									source={icons.barMenu}
									resizeMode="contain"
									style={{
										width: 25,
										height: 25,
									}}
								/>
							</TouchableOpacity>
						),
					}}
				/>
				<Stack.Screen
					name="DestinationDetail"
					component={DestinationDetail}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="Home"
					component={Tabs}
					options={{
						title: null,
						headerStyle: {
							backgroundColor: COLORS.white,
						},
						headerRight: () => (
							<TouchableOpacity
								style={{ marginRight: SIZES.padding }}
								onPress={() => console.log('Menu')}>
								<Image
									source={icons.menu}
									resizeMode="contain"
									style={{
										width: 25,
										height: 25,
									}}
								/>
							</TouchableOpacity>
						),
						headerLeft: ({ onPress }) => (
							<TouchableOpacity
								style={{ marginLeft: SIZES.padding }}
								onPress={onPress}>
								<Image
									source={icons.back}
									resizeMode="contain"
									style={{
										width: 25,
										height: 25,
									}}
								/>
							</TouchableOpacity>
						),
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default () => {
	return <App />;
};
