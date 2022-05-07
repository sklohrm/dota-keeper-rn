import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import MatchDetailList from '../components/MatchDetailList';
import BackButton from '../utils/BackButton';

export default class MatchDetail extends React.Component {
  render() {
    const {matchDetails, onPressBackButton} = this.props;
    return (
      <View>
        <View style={styles.header}>
          <Text style={styles.title}>
            {matchDetails.radiant_win ? 'Radiant' : 'Dire'} Victory
          </Text>
          <BackButton onPress={onPressBackButton} toScreen={'Matches'} />
        </View>

        <MatchDetailList matchDetails={matchDetails} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    paddingLeft: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {fontWeight: 'bold', fontSize: 28},
});
