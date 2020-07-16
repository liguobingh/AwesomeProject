import React, { Component } from 'react';
import { Stylesheet, View, Button } from 'react-native';

export default class ButtonBasics extends Component {
    _onPressButton() {
        alert("you tapped the button");
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <Button
                        title={"按钮a"}
                        onPress={() => {
                            this._onPressButton()
                        }}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        title={"按钮b"}
                        onPress={() => {
                            this._onPressButton()
                        }}
                        color={'#841584'}
                    />
                </View>

                <View style={styles.alternativeLayoutButtonContainer}>
                    <Button
                        title={"按钮c"}
                        onPress={() => {
                            this._onPressButton()
                        }}
                    />

                    <Button
                        title={"按钮d"}
                        color={'#841584'}
                        onPress={() => {
                            this._onPressButton()
                        }}
                    />
                </View>

            </View>
        );
    }
}

const styles = Stylesheet.creat({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    buttonContainer: {
        margin: 20,
    },
    alternativeLayoutButtonContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})