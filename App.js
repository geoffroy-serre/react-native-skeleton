import React from 'react';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';

export default function App() {
	return (
		<>
			<View style={styles.first}>
				<Text>Search</Text>
			</View>
			<View style={styles.second}>
				<Text>List</Text>
			</View>
			<StatusBar style={'auto'} />
		</>
	);
}

const styles = StyleSheet.create({
	first: {
		backgroundColor: 'blue',
		padding: 16,
	},
	second: {
		flex: 1,
		backgroundColor: 'green',
		padding: 16,
	},
});
