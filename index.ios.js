/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';
import LoginScreen from './components/LoginScreen'

class FlexTest extends Component {
  constructor() {
    super();
    this.state = {
      currentScreen: "intro"
    }
  }

  setScreen(name) {
    this.setState({
      currentScreen: name
    });
  }

  render() {
    const intro = (
        <View style={styles.container}>
          <Text style={styles.heading}>
            Choose an example
          </Text>
          <View style={styles.itemOptions}>
            <TouchableOpacity onPress={this.setScreen.bind(this, "login")}>
              <Text style={[styles.itemBox, styles.login]}>
                Login Screen
              </Text>
            </TouchableOpacity>
            <TouchableHighlight>
              <Text style={[styles.itemBox, styles.tweets]}>
                Tweets Page
              </Text>
            </TouchableHighlight>
            <TouchableHighlight>
              <Text style={[styles.itemBox, styles.foursquares]}>
                FourSquares
              </Text>
            </TouchableHighlight>
          </View>
        </View>
    )
    if (this.state.currentScreen == "intro") {
      return <LoginScreen />;
    } else if (this.state.currentScreen == "login") {
      return <LoginScreen />;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4A90E2',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  heading: {
    marginTop: -30,
    fontSize: 60,
    alignSelf: 'flex-end',
    lineHeight: 50,
    paddingTop: 30,
    color: 'white'
  },
  itemOptions: {
    marginRight: 40
  },
  itemBox: {
    marginTop: 15,
    borderColor: 'white',
    borderWidth: 1,
    color: 'white',
    padding: 10
  },
  login: {
    marginLeft: -30
  },
  tweets: {
    marginRight: -40
  },
  foursquares: {
    marginLeft: -50
  }

});

AppRegistry.registerComponent('FlexTest', () => FlexTest);
