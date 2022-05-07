import * as React from 'react';
import {Text, Image, View, StyleSheet, ScrollView} from 'react-native';

import MatchDetailList from '../components/MatchDetailList';
import BackButton from '../utils/BackButton';

export default class MatchDetail extends React.Component {
  render() {
    const {matchDetails, onPressBackButton} = this.props;
    return (
      <View>
        <BackButton onPress={onPressBackButton} toScreen={'matches'} />
        <MatchDetailList matchDetails={matchDetails} />
      </View>
    );
  }
}
