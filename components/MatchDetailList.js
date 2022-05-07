import * as React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';

import MatchDetailRow from './MatchDetailRow';

export default class MatchDetailList extends React.Component {
  render() {
    const {matchDetails} = this.props;

    return (
      <View>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.radiantText}>Radiant</Text>
          {matchDetails.players.map(player => {
            return (
              player.isRadiant && (
                <MatchDetailRow key={player.player_slot} player={player} />
              )
            );
          })}
          <Text style={styles.direText}>Dire</Text>
          {matchDetails.players.map(player => {
            return (
              !player.isRadiant && (
                <MatchDetailRow key={player.player_slot} player={player} />
              )
            );
          })}
          <Text style={{height: 200}}></Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#DCDCDC',
  },
  radiantText: {
    paddingTop: 10,
    paddingLeft: 15,
    fontWeight: 'bold',
    fontSize: 18,
    color: 'green',
  },
  direText: {
    paddingTop: 10,
    paddingLeft: 15,
    fontWeight: 'bold',
    fontSize: 18,
    color: 'red',
  },
});
