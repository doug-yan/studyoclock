import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.blink = this.blink.bind(this);
  }

  blink() {
    return (<Text> I love you!</Text>)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>This here is test!</Text>
        {this.blink()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
