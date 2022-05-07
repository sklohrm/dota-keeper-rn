import * as React from 'react';
import {Text, Image, View, StyleSheet, ScrollView} from 'react-native';

import MatchList from '../components/MatchList';
import BackButton from '../utils/BackButton';

export default class Matches extends React.Component {
  render() {
    console.log(typeof onPressBackButton);
    const {matches, onSelectMatch, onPressBackButton} = this.props;
    return (
      <View>
        <BackButton onPress={onPressBackButton} toScreen={'players'} />
        <MatchList matches={matches} onSelectMatch={onSelectMatch} />
      </View>
    );
  }
}
