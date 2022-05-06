import * as React from 'react';
import {Text, Image, View, StyleSheet, ScrollView} from 'react-native';

import SearchRow from './SearchRow';

export default class SearchList extends React.Component {
  render() {
    const {players, onSelectPlayer} = this.props;

    return (
      <View>
        <ScrollView>
          {players.map(player => {
            return (
              <SearchRow
                key={player.account_id}
                player={player}
                onSelectPlayer={onSelectPlayer}
              />
            );
          })}
        </ScrollView>
      </View>
    );
  }
}
