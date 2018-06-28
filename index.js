// import library to help create component
import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import { Header } from './src/components/common';
import AlbumList from './src/components/AlbumList';

// Create a component
class App extends Component {
    render() {
        return (
            <View style={{ flex: 1}}>
                <Header headerText={'Albums'} />
                <AlbumList />
            </View>
        );
    };
}


// Render it to the device
AppRegistry.registerComponent('albums', () => App);

