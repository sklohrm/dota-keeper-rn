import * as React from 'react';
import {Text, Image, View, StyleSheet, ScrollView} from 'react-native';

import MatchList from '../components/MatchList';

export default class Matches extends React.Component {
  render() {
    const {matches, onSelectMatch} = this.props;
    return (
      <View>
        <MatchList matches={matches} onSelectMatch={onSelectMatch} />
      </View>
    );
  }
}
