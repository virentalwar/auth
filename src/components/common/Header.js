//Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

//make a component
const Header = props => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2, //for iOS
        elevation: 5, //for Android
        position: 'relative',
        paddingTop: 30
    },
    textStyle: {
        fontSize: 20,
        fontWeight: '500'
    }
};

//export the component for other components
export { Header };
