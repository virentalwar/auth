import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import {
    Header,
    Button,
    CardSection,
    Spinner,
    Card
} from './components/common';
import LoginForm from './components/LoginForm';

class Check extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: '',
            authDomain: '',
            databaseURL: '',
            projectId: '',
            storageBucket: '',
            messagingSenderId: ''
        });

        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <View>
                        <CardSection>
                            <Button
                                onPress={() =>
                                    this.props.navigation.navigate('Generate')
                                }
                            >
                                Generate QR Code
                            </Button>
                        </CardSection>
                        <CardSection>
                            <Button
                                onPress={() =>
                                    this.props.navigation.navigate('Scan')
                                }
                            >
                                Scan QR Code
                            </Button>
                        </CardSection>
                        <CardSection>
                            <Button onPress={() => firebase.auth().signOut()}>
                                Log Out
                            </Button>
                        </CardSection>
                    </View>
                );
            case false:
                return <LoginForm />;
            default:
                return (
                    <View style={styles.spinnerStyle}>
                        <Spinner size="large" />
                    </View>
                );
        }
    }

    render() {
        return <View>{this.renderContent()}</View>;
    }
}

const styles = {
    spinnerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        height: 800
    }
};

export default Check;
