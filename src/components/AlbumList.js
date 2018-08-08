import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetailes from './AlbumDetailes';

class AlbumList extends Component {
    state = { albums: [] };

    componentWillMount() {
        console.log('willMount in AlbucmsList !!!!');
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then((response) => this.setState({ albums: response.data }));
    }

    renderAlbums() {
        return this.state.albums.map(album =>
            <AlbumDetailes key={album.title} album={album}/>
        );

    }

    render() {
        console.log(this.state);
        return (
            <ScrollView>
                { this.renderAlbums() }
            </ScrollView>
        );
    }
}

export default AlbumList;
