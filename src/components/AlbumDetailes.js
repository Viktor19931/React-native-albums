import React from 'react';
import { Image, Text, View, Linking } from 'react-native';

import { Card } from './common';
import { CardSection } from './common';
import { Button } from './common';

const AlbumDetailes = ({ album }) => {
    const { title, artist, thumbnail_image, image, url } = album;
    const {
        thumbnailStyle,
        headerContentStyle,
        thumbnailContainerStyle,
        headerTextStyle,
        imageStyle
    } = styles;

    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image
                        style={thumbnailStyle}
                        source={{ uri: thumbnail_image }}
                    />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{ title }</Text>
                    <Text>{ artist }</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image
                    style={imageStyle}
                    source={{ uri: image}}
                />
            </CardSection>
            <CardSection>
                <Button  onPress={() => Linking.openURL(url)}>
                    Buy now
                </Button>
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
      fontSize: 18
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    },
    thumbnailStyle: {
        width: 50,
        height: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        marginLeft: 10
    }
};

export default AlbumDetailes;
