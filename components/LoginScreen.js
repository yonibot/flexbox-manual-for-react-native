import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native'

class LoginScreen extends Component {

  render() {
    const { backToIntro } = this.props;
    const formGroup = (title) => {
      return (
        <View style={styles.formGroup}>
            {/* left col */}
            <View style={styles.labelCol}>
              <Text style={[styles.formText, styles.labelText]}>Email</Text>
              <Text style={[styles.formText, styles.labelText]}>Password</Text>
            </View>
            {/* right col */}
            <View style={styles.inputCol}>
              <TextInput
                style={[styles.formText, styles.inputText]}
                value="yoni@example.com"/>
              <TextInput
                style={[styles.formText, styles.inputText]}
                value="********"/>
            </View>
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={backToIntro} style={styles.backButton}>
          <Text style={styles.backText}>
            Back
          </Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.header}>
            Login
          </Text>
        </View>
        {formGroup()}
        <View style={styles.footer}>
          <Text style={styles.footerText}>(c) Yoni Weisbrod 2016</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4A90E2',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    fontSize: 50,
    color: 'white',
    marginTop: -50
  },
  backButton: {
    alignSelf: 'flex-start',
    backgroundColor: 'white',
    padding: 10,
    marginLeft: 10,
    marginTop: 40
  },
  formGroup: {
    marginTop: -40,
    flexDirection: 'row',
    height: 100
  },
  formText: {
    color: 'white',
  },
  labelText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  backText: {
    color: '#4A90E2',
    fontSize: 22
  },
  inputText: {
    height: 40,
    width: 200,
    borderColor: 'white',
    borderWidth: 1,
    fontSize: 16,
    color: 'white',
    paddingLeft: 7
  },
  labelCol: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    marginRight: 10,
  },
  inputCol: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginRight: 10,
  },
  footer: {
    alignSelf: 'flex-end',
    marginRight: 15,
  },
  footerText: {
    color: 'white'
  },

});

export {LoginScreen as default};
