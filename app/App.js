import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image, TouchableWithoutFeedback
} from 'react-native';

import ToastExample from './native_modules/ToastExample';
import KotlinVideoStream from './native_modules/KotlinVideoStream';

import GridView from 'react-native-super-grid';
import Globals from './lib/global'

export default class App extends Component<{}> {

    render() {
        return (
            <View style={styles.container}>
                <GridView
                    itemDimension={130}
                    items={Globals.PIXABAY.videos}
                    style={styles.gridView}
                    renderItem={item => (
                        <TouchableWithoutFeedback onPress={() => this.onHandleItemPress(item)}>
                            <View style={styles.itemContainer}>
                                <Image
                                    style={styles.image}
                                    source={{uri: item.thumbnail}}
                                />
                                <Text style={styles.videoTitle}>{item.title}</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    )}
                />
            </View>
        );
    }

    onHandleItemPress(item) {
        ToastExample.show('Playing: ' + item.title, ToastExample.LONG);
        KotlinVideoStream.playVideoStream(
            item.title,
            item.url
        );
    }

    searchFor(searchTerm) {
        if (searchTerm.length <= 0) return;

        ToastExample.show('Searching for: ' + searchTerm, ToastExample.LONG);
        VideoSearch(searchTerm)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },


    //grid
    gridView: {
        paddingTop: 25,
        flex: 1,
    },
    itemContainer: {
        justifyContent: 'flex-end',
        borderRadius: 5,
        height: 150,
        backgroundColor: '#2ecc71'
    },
    videoTitle: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '600',
        padding: 5,

    },
    image: {
        flexGrow: 1,
        height: null,
        width: null,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
