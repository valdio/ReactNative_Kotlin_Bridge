import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Button
} from 'react-native';

export default class SearchBar extends Component {
    state = {searchText: ''};

    render({onSearchButtonPress} = this.props) {
        return (
            <View style={styles.container}>
                <TextInput
                    ref="input"
                    autoFocus={true}
                    style={styles.searchBar}
                    value={this.state.searchText}
                    onChangeText={term => this.setState({searchText: term})}
                    placeholder={'Search...'}
                    onSubmitEditing={() => this.refs['email_input'].blur()}
                />

                <Button

                    style={styles.button}
                    title='Search'
                    onPress={() => {
                        //remove focus from TextInput
                        this.refs.input.blur();
                        onSearchButtonPress(this.state.searchText)
                    }}
                />

            </View>
        );
    }

}


const styles = StyleSheet.create({
    container: {
        margin: 10,
        justifyContent: 'flex-start',
        flexDirection: 'row'
    },
    searchBar: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

    button: {
    }
});

