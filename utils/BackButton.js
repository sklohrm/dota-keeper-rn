import * as React from 'react';
import {Button} from 'react-native';

export default class BackButton extends React.Component {
  render() {
    const {onPress, toScreen} = this.props;

    return (
      <Button onPress={() => onPress(toScreen)} title="Go Back" color="blue" />
    );
  }
}
