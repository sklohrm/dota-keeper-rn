import * as React from 'react';
import {Text, Image, View, StyleSheet, ScrollView} from 'react-native';

import MatchDetailRow from './MatchDetailRow';

export default class MatchDetailList extends React.Component {
  render() {
    const {matchDetails} = this.props;

    return (
      <View>
        <ScrollView>
          <Text>{matchDetails.radiant_win ? 'Radiant' : 'Dire'} Victory</Text>
          <Text>Radiant</Text>
          {matchDetails.players.map(player => {
            return (
              player.isRadiant && (
                <MatchDetailRow key={player.player_slot} player={player} />
              )
            );
          })}
          <Text>Dire</Text>
          {matchDetails.players.map(player => {
            return (
              !player.isRadiant && (
                <MatchDetailRow key={player.player_slot} player={player} />
              )
            );
          })}
        </ScrollView>
      </View>
    );
  }
}
