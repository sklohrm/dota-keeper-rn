import * as React from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';

export default class BackButton extends React.Component {
  render() {
    const {onPress, toScreen} = this.props;

    return (
      <Button
        onPress={() => onPress(toScreen)}
        title="Go Back"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    );
  }
}
