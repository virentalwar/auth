import React, { Component } from 'react';
import QRCode from 'react-native-qrcode';

import { StyleSheet, View, TextInput } from 'react-native';

class QrGenerator extends Component {
    state = {
        text: 'Hello'
    };

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    onChangeText={text => this.setState({ text: text })}
                    value={this.state.text}
                />
                <QRCode
                    value={this.state.text}
                    size={200}
                    bgColor="purple"
                    fgColor="white"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },

    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        borderRadius: 5,
        padding: 5
    }
});

export default QrGenerator;
