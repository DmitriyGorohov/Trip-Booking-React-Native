import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '../screens';
import { COLORS, icons } from '../constants';

const Tab = createBottomTabNavigator();

const tabOptions = {
	shwoLabel: false,
	style: {
		height: 90,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 10,
		},
		shadowOpacity: 0.53,
		shadowRadius: 13.97,
		elevation: 21,
	},
};

const Tabs = () => {
	return (
		<Tab.Navigator
			tabBarOptions={tabOptions}
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused }) => {
					const tintColor = focused ? COLORS.primary : COLORS.gray;

					switch (route.name) {
						case 'Home':
							return (
								<Image
									source={icons.home}
									resizeMode="contain"
									style={{
										width: 30,
										height: 30,
										tintColor: tintColor,
									}}
								/>
							);
						case 'Search':
							return (
								<Image
									source={icons.search}
									resizeMode="contain"
									style={{
										width: 30,
										height: 30,
										tintColor: tintColor,
									}}
								/>
							);
						case 'Bookmark':
							return (
								<Image
									source={icons.bookmark}
									resizeMode="contain"
									style={{
										width: 30,
										height: 30,
										tintColor: tintColor,
									}}
								/>
							);
						case 'Account':
							return (
								<Image
									source={icons.user}
									resizeMode="contain"
									style={{
										width: 30,
										height: 30,
										tintColor: tintColor,
									}}
								/>
							);
					}
				},
			})}>
			<Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
			<Tab.Screen
				name="Search"
				component={Home}
				options={{ headerShown: false }}
			/>
			<Tab.Screen
				name="Bookmark"
				component={Home}
				options={{ headerShown: false }}
			/>
			<Tab.Screen
				name="Account"
				component={Home}
				options={{ headerShown: false }}
			/>
		</Tab.Navigator>
	);
};

export default Tabs;

const styles = StyleSheet.create({});
