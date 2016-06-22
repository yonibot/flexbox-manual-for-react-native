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

  backToIntro() {
    this.setState({
      currentScreen: "intro"
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
            <TouchableOpacity>
              <Text style={[styles.itemBox, styles.tweets]}>
                Button 2
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={[styles.itemBox, styles.foursquares]}>
                Button 3
              </Text>
            </TouchableOpacity>
          </View>
        </View>
    )
    if (this.state.currentScreen == "intro") {
      return intro;
    } else if (this.state.currentScreen == "login") {
      return <LoginScreen backToIntro={this.backToIntro.bind(this)} />;
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
    fontSize: 70,
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
