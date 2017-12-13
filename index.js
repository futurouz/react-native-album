// Import library to help create component
import React from 'react';
import { Text, View, AppRegistry } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// Create component
const App = () => (
    <View style={{ flex: 1 }}>
        <Header headerText={'Album'} />
        <AlbumList />
    </View>
);

// Render
AppRegistry.registerComponent('albums', () => App);