// Import library to help create component
import React from 'react';
import { Text, AppRegistry } from 'react-native';
import Header from './src/components/header';

// Create component
const App = () => (
    <Header headerText={'Album'} />
);
// Render

AppRegistry.registerComponent('albums', () => App);