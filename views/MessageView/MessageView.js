import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

export default class MessageView extends Component {

    render() {
        return (
          <View style={styles.container}>
            <Text style={styles.hello}>Login successfully!</Text>
          </View>
        );
      }

}

var styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    hello: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
  });