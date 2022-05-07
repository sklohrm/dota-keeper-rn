import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import MatchList from '../components/MatchList';
import BackButton from '../utils/BackButton';

export default class Matches extends React.Component {
  render() {
    console.log(typeof onPressBackButton);
    const {matches, onSelectMatch, onPressBackButton} = this.props;
    return (
      <View>
        <View style={styles.header}>
          <Text style={styles.title}>Matches</Text>
          <BackButton onPress={onPressBackButton} toScreen={'Players'} />
        </View>

        <MatchList matches={matches} onSelectMatch={onSelectMatch} />
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
